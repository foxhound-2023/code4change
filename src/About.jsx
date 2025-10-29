// src/About.jsx
import React from "react";

export default function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About This Learning Platform</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.6", fontSize: "18px" }}>
        This platform was created to provide beginners with an easy and
        accessible entry point into coding. Our goal is to offer a simple,
        user-friendly interface so that anyone, including underprivileged
        individuals, can explore web development and programming concepts
        without barriers.
      </p>
      <p style={{ marginTop: "15px", lineHeight: "1.6", fontSize: "18px" }}>
        Through interactive lessons, practice projects, and guided exercises,
        users can gradually build confidence and skills in HTML, CSS, JavaScript,
        and more. We believe that learning to code should be inclusive, fun, and
        empowering.
      </p>
    </div>
  );
}
