import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {

  const location = useLocation();

  const active = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">🛡️</span>
        <span>SafeRoute</span>
      </Link>

      <div className="nav-links">

        <Link to="/" className={active("/")}>
          Home
        </Link>

        <Link to="/dashboard" className={active("/dashboard")}>
          Dashboard
        </Link>

        <Link to="/journey" className={active("/journey")}>
          🧭 Journey
        </Link>

        <Link to="/safe-places" className={active("/safe-places")}>
          📍 Places
        </Link>

        <Link to="/contacts" className={active("/contacts")}>
          👥 Contacts
        </Link>

        <Link to="/report" className={active("/report")}>
          📢 Report
        </Link>

        <button
          className="theme-button"
          onClick={toggleDarkMode}
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/emergency" className="emergency-nav">
          🚨 SOS
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;