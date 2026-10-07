import React from "react";
import { Link } from "react-router-dom";

function EmergencyButton() {
  return (
    <Link to="/emergency" className="emergency-button">
      🚨 Emergency Help
    </Link>
  );
}

export default EmergencyButton;