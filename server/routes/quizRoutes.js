import { Router } from "express";
import callClaude from "../services/claudeClient.js";

const router = Router();

router.post("/generate-quiz", async (req, res) => {
  const { topic, difficulty, numQuestions, style, expertise } = req.body;
  const quizTopic = topic || "Basic JavaScript";
  const quizDifficulty = difficulty || "easy";
  const count = Math.min(Math.max(parseInt(numQuestions ?? 5, 10) || 5, 1), 20);
  const quizStyle = style || "normal";
  const quizExpertise = expertise || "beginner";

  const prompt = `
You generate quizzes and respond with JSON only.
Create ${count} multiple-choice questions on "${quizTopic}" for "${quizDifficulty}" difficulty and "${quizExpertise}" expertise in "${quizStyle}" style.
Return this exact shape:
{
  "topic": "${quizTopic}",
  "difficulty": "${quizDifficulty}",
  "count": ${count},
  "questions": [
    { "question": "string", "choices": ["A","B","C","D"], "answer": "A", "explanation": "short helpful explanation" }
  ]
}
Do not include markdown, backticks, or any text outside the JSON.
`.trim();

  try {
    const aiText = await callClaude(prompt);
    let quizJson;
    try {
      quizJson = JSON.parse(aiText);
    } catch {
      return res.status(502).json({ error: "non_json_from_model", raw: aiText });
    }
    return res.json(quizJson);
  } catch (err) {
    const status = err.status || 500;
    return res.status(status).json({
      error: err.message || "server_error",
      details: err.details || null,
    });
  }
});

export default router;
