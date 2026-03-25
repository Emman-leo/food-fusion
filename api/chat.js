// Vercel Serverless Function
// Provides POST /api/chat by proxying chat requests to Groq.
//
// Your frontend already calls `/api/chat` with `{ messages: [...] }`.

// Groq has decommissioned `llama3-8b-8192`.
// Recommended replacement: `llama-3.1-8b-instant` (Groq deprecations page).
const GROQ_CHAT_MODEL = process.env.GROQ_CHAT_MODEL || 'llama-3.1-8b-instant';
const GROQ_TEMPERATURE = process.env.GROQ_TEMPERATURE ? Number(process.env.GROQ_TEMPERATURE) : 0.4;
const GROQ_MAX_TOKENS = process.env.GROQ_MAX_TOKENS ? Number(process.env.GROQ_MAX_TOKENS) : 400;
const GROQ_MAX_MESSAGES = process.env.GROQ_MAX_MESSAGES ? Number(process.env.GROQ_MAX_MESSAGES) : 20;

function trimMessages(messages) {
  if (!Array.isArray(messages)) return [];
  if (messages.length <= GROQ_MAX_MESSAGES) return messages;

  const systemMsg = messages[0] && messages[0].role === 'system'
    ? messages[0]
    : messages.find(m => m && m.role === 'system');

  const tail = messages.slice(-(GROQ_MAX_MESSAGES - (systemMsg ? 1 : 0)));
  return systemMsg ? [systemMsg, ...tail] : tail;
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return res.status(500).json({ error: 'Missing GROQ_API_KEY on the server.' });
    }

    const rawBody = req.body;
    const body = rawBody && typeof rawBody === 'string' ? JSON.parse(rawBody) : (rawBody || {});
    const messages = trimMessages(body.messages).map((m) => {
      // Groq expects `message.content` to be either a string or an array (per OpenAI format).
      // If we receive a structured error object (from the frontend), coerce to string.
      const content = m && m.content;
      let nextContent = content;
      if (typeof content !== 'string' && !Array.isArray(content)) {
        nextContent = content == null ? '' : JSON.stringify(content);
      }
      return { ...m, content: nextContent };
    });

    if (!messages.length) {
      return res.status(400).json({ error: '`messages` must be a non-empty array.' });
    }

    const payload = {
      model: GROQ_CHAT_MODEL,
      messages,
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

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Chat proxy failed.', details: err?.message || String(err) });
  }
}

