const payload = {
  topic: form.topic,
  difficulty: form.difficulty,
  numQuestions: form.numQuestions,
  style: form.style,
  expertise: form.expertise,
};

const res = await fetch("/api/generate-quiz", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const data = await res.json();

import { useState } from "react";

export default function QuizGenerator() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    org: "",
    topic: "",
    expertise: "",
    difficulty: "",
    numQuestions: 5,
    style: "normal",
    message: "",
    agree: false,
  });
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setQuiz(null);
    try {
      const res = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: form.topic,
          difficulty: form.difficulty,
          numQuestions: Number(form.numQuestions),
          style: form.style,
          expertise: form.expertise,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setQuiz(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={loading}>{loading ? "Generating..." : "SUBMIT"}</button>
      {error && <p>{error}</p>}
      {quiz && (
        <div>
          <h3>{quiz.topic} — {quiz.difficulty}</h3>
          {quiz.questions?.map((q, i) => (
            <div key={i}>
              <p>{i + 1}. {q.question}</p>
              <ul>
                {q.choices.map((c, j) => <li key={j}>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
