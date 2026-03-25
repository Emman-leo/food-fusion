import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Keep responses predictable and smallish for a browser widget.
const GROQ_CHAT_MODEL = process.env.GROQ_CHAT_MODEL || 'llama3-8b-8192';
const GROQ_TEMPERATURE = process.env.GROQ_TEMPERATURE ? Number(process.env.GROQ_TEMPERATURE) : 0.4;
const GROQ_MAX_TOKENS = process.env.GROQ_MAX_TOKENS ? Number(process.env.GROQ_MAX_TOKENS) : 400;
const GROQ_MAX_MESSAGES = process.env.GROQ_MAX_MESSAGES ? Number(process.env.GROQ_MAX_MESSAGES) : 20;

app.use(express.json({ limit: '1mb' }));

function trimMessages(messages) {
  if (!Array.isArray(messages)) return [];
  if (messages.length <= GROQ_MAX_MESSAGES) return messages;

  // Preserve the first system prompt when present.
  const first = messages[0];
  const systemMsg = first && first.role === 'system' ? first : messages.find(m => m && m.role === 'system');
  const tail = messages.slice(-(GROQ_MAX_MESSAGES - (systemMsg ? 1 : 0)));
  return systemMsg ? [systemMsg, ...tail] : tail;
}

app.post('/api/chat', async (req, res) => {
  try {
    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return res.status(500).json({ error: 'Missing GROQ_API_KEY on the server.' });
    }

    const { messages } = req.body || {};
    const trimmedMessages = trimMessages(messages);
    if (!trimmedMessages.length) {
      return res.status(400).json({ error: '`messages` must be a non-empty array.' });
    }

    const payload = {
      model: GROQ_CHAT_MODEL,
      messages: trimmedMessages,
      temperature: GROQ_TEMPERATURE,
      max_tokens: GROQ_MAX_TOKENS
    };

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${groqApiKey}`
      },
      body: JSON.stringify(payload)
    });

    const data = await groqRes.json().catch(() => ({}));
    if (!groqRes.ok) {
      return res.status(groqRes.status).json(data);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Chat proxy failed.', details: err?.message || String(err) });
  }
});

// Serve static site files (index.html, recipes.html, script.js, style.css, etc.)
app.use(express.static(path.resolve(process.cwd())));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[food-fusion] Server listening on http://localhost:${PORT}`);
});

