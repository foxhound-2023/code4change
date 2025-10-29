import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import { questions } from "./questions"; // must match your export

export default function QuestionPage() {
  const { id } = useParams(); // gets lesson id
  const navigate = useNavigate();
  const question = questions.find((q) => q.id === Number(id));
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  // Reset input and feedback when question changes
  useEffect(() => {
    setUserAnswer("");
    setFeedback("");
    setAnsweredCorrectly(false);
  }, [id]);

  if (!question) return <div>Question not found</div>;

  const checkAnswer = () => {
  if (userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
    setFeedback("Correct!");
    setAnsweredCorrectly(true); // show Next button

    // --- LOCAL STORAGE UPDATE ---
    const stored = JSON.parse(localStorage.getItem("progress")) || { completedLessons: [] };
    if (!stored.completedLessons.includes(question.id)) {
      stored.completedLessons.push(question.id);
      localStorage.setItem("progress", JSON.stringify(stored));
    }
  } else {
    setFeedback("Incorrect, try again.");
  }
};

const goToNext = () => {
  const nextId = question.id + 1;
  if (nextId <= questions.length) {
    navigate(`/lesson/${nextId}`);
  } else {
    alert("You've completed all questions!");
    navigate("/");
  }
};

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      {/* Home button top-left */}
      <button
        style={{ position: "absolute", top: "20px", left: "20px", fontSize: "24px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <i class="fa-solid fa-house"></i>
      </button>

      <h1>Lesson {question.id}</h1>
      <p>{question.question}</p>

      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        style={{ width: "300px", padding: "10px", fontSize: "16px" }}
      />
      <br />

      <button
        onClick={checkAnswer}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Check Answer
      </button>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{feedback}</p>

      {/* Next button appears only after correct answer */}
      {answeredCorrectly && (
  <button
    onClick={goToNext}
    style={{
      marginTop: "20px",
      padding: "10px",
      fontSize: "24px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#4ade80", // optional: color for the icon
    }}
    title="Next"
  >
    <i className="fa-solid fa-arrow-right"></i>
  </button>
      )}
    </div>
  );
}
