import React from "react";

function SafetyCard({ icon, title, description }) {
  return (
    <div className="safety-card">
      <div className="safety-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default SafetyCard;