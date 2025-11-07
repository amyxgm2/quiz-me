import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import quizRouter from "./routes/quizRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "quiz-me-server" });
});

app.use("/api", quizRouter);

app.listen(PORT, () => {
  console.log(`quiz-me server running on port ${PORT}`);
});
