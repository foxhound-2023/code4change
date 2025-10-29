// src/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      {/* Home button top-left */}
      <button
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-house"></i>
      </button>

      <h1>Projects</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <a
          href="src/assets/Projects.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "15px 30px",
            background: "#4ade80",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Open Projects PDF
        </a>

        <a
          href="src/assets/Solutions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "15px 30px",
            background: "#3b82f6",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Open Solutions PDF
        </a>
      </div>
    </div>
  );
}
