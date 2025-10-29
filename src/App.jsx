// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import Lesson from "./Lesson"; // import your Lessons component
import Projects from "./Projects"; // your projects page
import About from "./About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/:id" element={<QuestionPage />} />
      <Route path="/lessons" element={<Lesson />} /> {/* new route */}
      <Route path="/projects" element={<Projects />} /> {/* projects route */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
