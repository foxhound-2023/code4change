// src/Home.jsx
import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LessonButton from "./LessonButton";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  

  // Load lessons dynamically and read completion from localStorage
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("progress")) || { completedLessons: [] };
    const tempLessons = Array.from({ length: 36 }, (_, i) => ({
      id: i + 1,
      percentage: stored.completedLessons.includes(i + 1) ? 100 : 0,
      locked: i > 0 && !stored.completedLessons.includes(i),
      current: i === 0,
    }));
    setLessons(tempLessons);
  }, []);

  const handleClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };


  // Call this from QuestionPage via navigate state or a context
  const markLessonComplete = (lessonId) => {
    setLessons((prev) =>
      prev.map((l) =>
        l.id === lessonId
          ? { ...l, percentage: 100, current: false }
          : l.id === lessonId + 1
          ? { ...l, locked: false, current: true }
          : l
      )
    );
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="sidebar">
        <ul>
          <li className={location.pathname === "/" ? "current" : ""}>
            <Link to="/">My Path</Link>
          </li>
          <li className={location.pathname === "/lessons" ? "current" : ""}>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li className={location.pathname === "/projects" ? "current" : ""}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={location.pathname === "/about" ? "current" : ""}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Account button top right */}
      <button className="account-button top-right">
        <i className="fa-regular fa-user"></i>
      </button>

      

      {/* My Path Container */}
      <main className="path-container">
        <h1>My Learning Path</h1>

        {/* Horizontally scrollable row of lesson circles */}
        <div
          className="lesson-buttons-row"
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "20px 0",
            gap: "20px",
            scrollBehavior: "smooth",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "40px",
            width: "100%",
            scrollbarWidth: "thin",
          }}
        >
          {lessons.map((lesson, i) => (
            <LessonButton
              key={lesson.id}
              index={i}
              totalCount={lessons.length - 1}
              percentage={lesson.percentage}
              current={lesson.current}
              locked={lesson.locked}
              onClick={() => handleClick(lesson.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
