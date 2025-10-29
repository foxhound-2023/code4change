// src/Lessons.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const lessonsList = [
  { id: 1, title: "Introduction to HTML", url: "https://www.youtube.com/embed/UB1O30fR-EE" },
  { id: 2, title: "CSS Fundamentals", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
  { id: 3, title: "JavaScript Basics", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
  // Add more lessons as needed
];

export default function Lessons() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      {/* Home button top-left */}
      <button
        style={{ position: "absolute", top: "20px", left: "20px", fontSize: "24px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <i class="fa-solid fa-house"></i>
      </button>
        

      {/* Main content */}
      <div style={{ padding: "40px", flex: 1 }}>
        <h1>Lessons</h1>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}

          
        >
          {lessonsList.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              style={{
                padding: "15px",
                background: "#4ade80",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {lesson.title}
            </button>
          ))}
        </div>

        {/* Embedded Video */}
        {selectedLesson && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h2>{selectedLesson.title}</h2>
            <iframe
              width="800"
              height="450"
              src={selectedLesson.url}
              title={selectedLesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
