import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🛡️ SMART PERSONAL SAFETY PLATFORM
          </div>

          <h1>
            Your journey.
            <br />
            <span>Your safety.</span>
          </h1>

          <p>
            SafeRoute combines journey planning, safety
            check-ins, location awareness, trusted contacts
            and emergency assistance in one platform.
          </p>

          <div className="hero-buttons">

            <Link
              to="/journey"
              className="primary-btn"
            >
              🧭 Start Safe Journey
            </Link>

            <Link
              to="/emergency"
              className="emergency-button"
            >
              🚨 Emergency
            </Link>

          </div>

        </div>


        <div className="hero-card">

          <div className="hero-floating">
            ✨
          </div>

          <div className="shield">
            🛡️
          </div>

          <h3>
            Safety Companion
          </h3>

          <p>
            Plan your journey and stay prepared before
            you travel.
          </p>

          <div className="status">
            <span className="status-dot"></span>
            Safety system ready
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="section">

        <div className="section-title">

          <span>
            WHY SAFEROUTE?
          </span>

          <h2>
            One platform for your safety
          </h2>

          <p>
            Tools designed to help you prepare, stay aware
            and respond quickly.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon">
              🧭
            </div>

            <h3>
              Safe Journey
            </h3>

            <p>
              Create a journey plan with a safety check-in
              timer.
            </p>

            <Link to="/journey">
              Try it →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon">
              📍
            </div>

            <h3>
              Safe Places
            </h3>

            <p>
              Find hospitals, police stations and other
              useful public places.
            </p>

            <Link to="/safe-places">
              Explore →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon">
              👥
            </div>

            <h3>
              Trusted Network
            </h3>

            <p>
              Keep important contacts ready for emergencies.
            </p>

            <Link to="/contacts">
              Manage →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              04
            </div>

            <div className="feature-icon">
              📢
            </div>

            <h3>
              Community Reports
            </h3>

            <p>
              Record unsafe conditions you notice around you.
            </p>

            <Link to="/report">
              Report →
            </Link>

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="how-section">

        <div className="section-title">

          <span>
            SIMPLE PROCESS
          </span>

          <h2>
            Stay prepared in 3 steps
          </h2>

        </div>


        <div className="process-line">

          <div className="process-card">

            <div className="process-circle">
              01
            </div>

            <h3>
              Prepare
            </h3>

            <p>
              Add trusted contacts and plan your journey.
            </p>

          </div>


          <div className="process-card">

            <div className="process-circle">
              02
            </div>

            <h3>
              Stay Aware
            </h3>

            <p>
              Check your surroundings and use the safety
              checklist.
            </p>

          </div>


          <div className="process-card">

            <div className="process-circle">
              03
            </div>

            <h3>
              Respond
            </h3>

            <p>
              Use SOS or emergency support whenever needed.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <div className="cta-content">

          <span>
            YOUR SAFETY MATTERS
          </span>

          <h2>
            Don't wait for an emergency.
            <br />
            Be prepared before it happens.
          </h2>

          <p>
            Create your personal safety plan today.
          </p>

          <Link
            to="/dashboard"
            className="cta-button"
          >
            Open Safety Dashboard →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;