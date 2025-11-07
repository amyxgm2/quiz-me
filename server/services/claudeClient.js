import axios from "axios";

const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

export default async function callClaude(prompt) {
  const apiKey = (process.env.CLAUDE_API_KEY || process.env.CLAUDE_API_KEY || "").trim();
  console.log("anthropic key prefix:", apiKey.slice(0, 8), "len:", apiKey.length);
  if (!apiKey || apiKey.length < 20) {
    const e = new Error("missing_api_key");
    e.status = 401;
    throw e;
  }

  try {
    const r = await axios.post(
      CLAUDE_API_URL,
      {
        model: "claude-3-5-sonnet-latest",
        max_tokens: 800,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );
    return r.data?.content?.[0]?.text || "";
  } catch (err) {
    const e = new Error("claude_api_error");
    e.status = err.response?.status || 500;
    e.details = err.response?.data || { message: err.message };
    throw e;
  }
}
