import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import SafePlaces from "./pages/SafePlaces";
import Contacts from "./pages/Contacts";
import Journey from "./pages/Journey";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("safeRouteDarkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);
    localStorage.setItem("safeRouteDarkMode", newMode);
  };

  return (
    <BrowserRouter>

      <div className={darkMode ? "app dark-mode" : "app"}>

        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/journey" element={<Journey />} />

            <Route path="/safe-places" element={<SafePlaces />} />

            <Route path="/contacts" element={<Contacts />} />

            <Route path="/emergency" element={<Emergency />} />

            <Route path="/report" element={<Report />} />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;