import React from "react";

export default function LessonButton({
  index,
  totalCount,
  percentage = 0,
  current = false,
  locked = false,
  onClick = () => {},
}) {
  // Zig-zag wave calculation
  const cycleLength = 4; // 4 steps up-down
  const cycleIndex = index % cycleLength;
  const offsetY = cycleIndex <= 1 ? cycleIndex * 10 : (2 - cycleIndex) * 10;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 10px",
        transform: `translateY(${offsetY}px)`,
      }}
    >
      <div
        onClick={() => !locked && onClick(index)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: locked ? "#ccc" : "#4ade80",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: locked ? "not-allowed" : "pointer",
          border: current ? "3px solid #50C878" : "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fill circle */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: `${percentage}%`,
            background: "#2f855a",
            borderRadius: "50% 50% 0 0",
            transition: "height 0.3s",
            zIndex: 0,
          }}
        />
        {/* Icon / Step number */}
        <span style={{ zIndex: 1, color: "white", fontWeight: "bold" }}>
          {index + 1}
        </span>
      </div>
      <div style={{ marginTop: "5px", fontSize: "12px", textAlign: "center" }}>
        Step {index + 1}
      </div>
    </div>
  );
}
