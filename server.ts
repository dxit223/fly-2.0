import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client safely
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey
    ? new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      })
    : null;

  app.post("/api/agent/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Missing message parameter" });
      }

      if (!ai) {
        return res.json({ text: "API Key not configured." });
      }

      const contentsParts: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          contentsParts.push({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          });
        });
      }

      if (contentsParts.length === 0 || contentsParts[contentsParts.length - 1].parts[0].text !== message) {
        contentsParts.push({
          role: "user",
          parts: [{ text: message }]
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contentsParts,
        config: {
          temperature: 0.8,
        }
      });

      res.json({ text: response.text || "Empty response" });
    } catch (err: any) {
      console.error("Gemini Agent API error:", err);
      res.status(500).json({ error: "Failed to communicate", details: err.message });
    }
  });

  // Serve static folders BEFORE Vite
  app.use('/htdocs', express.static(path.join(process.cwd(), 'htdocs')));
  app.use('/new_html', express.static(path.join(process.cwd(), 'new_html')));
  app.use('/furiousfly-v2', express.static(path.join(process.cwd(), 'furiousfly-v2')));
  
  // Also serve furiousfly-v2 as root if requested
  app.use('/', express.static(path.join(process.cwd(), 'furiousfly-v2')));
  app.use('/', express.static(path.join(process.cwd(), 'new_html')));

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Furious Fly Server running on http://localhost:${PORT}`);
  });
}

startServer();
