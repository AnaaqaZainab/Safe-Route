import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Journey() {

  const [destination, setDestination] = useState("");

  const [minutes, setMinutes] = useState(5);

  const [timeLeft, setTimeLeft] = useState(0);

  const [journeyActive, setJourneyActive] = useState(false);

  const [location, setLocation] = useState(null);

  const [locationMessage, setLocationMessage] = useState("");

  const [factors, setFactors] = useState({
    lighting: true,
    crowd: true,
    familiar: false,
    phone: true,
  });


  const calculateScore = () => {

    let score = 40;

    if (factors.lighting) score += 15;

    if (factors.crowd) score += 15;

    if (factors.familiar) score += 15;

    if (factors.phone) score += 15;

    return Math.min(score, 100);
  };


  const score = calculateScore();


  useEffect(() => {

    if (!journeyActive || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {

      setTimeLeft((previous) => {

        if (previous <= 1) {

          clearInterval(timer);

          setJourneyActive(false);

          alert(
            "⚠️ Check-in time finished. Please make sure you are safe."
          );

          return 0;
        }

        return previous - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [journeyActive, timeLeft]);


  const startJourney = () => {

    if (!destination.trim()) {

      alert("Please enter your destination.");

      return;
    }

    setTimeLeft(minutes * 60);

    setJourneyActive(true);

    localStorage.setItem(
      "safeRouteJourney",
      JSON.stringify({
        destination,
        startedAt: new Date().toISOString()
      })
    );

  };


  const confirmSafe = () => {

    setJourneyActive(false);

    setTimeLeft(0);

    localStorage.removeItem(
      "safeRouteJourney"
    );

    alert(
      "💚 Safety check-in completed successfully!"
    );

  };


  const cancelJourney = () => {

    setJourneyActive(false);

    setTimeLeft(0);

    localStorage.removeItem(
      "safeRouteJourney"
    );

  };


  const getLocation = () => {

    if (!navigator.geolocation) {

      setLocationMessage(
        "Geolocation is not supported by this browser."
      );

      return;
    }

    setLocationMessage(
      "Getting your location..."
    );

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation({
          latitude:
            position.coords.latitude.toFixed(5),

          longitude:
            position.coords.longitude.toFixed(5)
        });

        setLocationMessage(
          "✓ Location detected successfully."
        );

      },

      () => {

        setLocationMessage(
          "Location permission was denied or unavailable."
        );

      }

    );

  };


  const formatTime = () => {

    const mins =
      Math.floor(timeLeft / 60);

    const secs =
      timeLeft % 60;

    return `${String(mins).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;

  };


  return (

    <div className="journey-page">

      <div className="page-heading">

        <span>SMART SAFETY</span>

        <h1>Safe Journey Mode</h1>

        <p>
          Plan your journey, check your safety conditions
          and stay connected.
        </p>

      </div>


      <div className="journey-layout">


        {/* PLAN */}

        <div className="journey-card">

          <div className="journey-icon">
            🧭
          </div>

          <h2>Plan Your Journey</h2>

          <p className="card-description">
            Create a temporary safety plan before travelling.
          </p>

          <label>
            Destination
          </label>

          <input
            type="text"
            placeholder="Example: College"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />


          <label>
            Safety Check-in
          </label>

          <select
            value={minutes}
            onChange={(e) =>
              setMinutes(Number(e.target.value))
            }
          >

            <option value={1}>
              1 minute
            </option>

            <option value={5}>
              5 minutes
            </option>

            <option value={10}>
              10 minutes
            </option>

            <option value={15}>
              15 minutes
            </option>

          </select>


          <button
            className="start-journey-btn"
            onClick={startJourney}
          >
            🟢 Start Safe Journey
          </button>

        </div>


        {/* SCORE */}

        <div className="journey-card score-card">

          <div className="score-circle">

            <strong>
              {score}
            </strong>

            <span>
              /100
            </span>

          </div>

          <h2>
            Safety Checklist
          </h2>

          <p>
            Complete the checklist based on your current
            surroundings.
          </p>


          <div className="factor">

            <label>

              <input
                type="checkbox"
                checked={factors.lighting}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    lighting: e.target.checked
                  })
                }
              />

              Good lighting

            </label>

          </div>


          <div className="factor">

            <label>

              <input
                type="checkbox"
                checked={factors.crowd}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    crowd: e.target.checked
                  })
                }
              />

              Public / populated area

            </label>

          </div>


          <div className="factor">

            <label>

              <input
                type="checkbox"
                checked={factors.familiar}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    familiar: e.target.checked
                  })
                }
              />

              Familiar route

            </label>

          </div>


          <div className="factor">

            <label>

              <input
                type="checkbox"
                checked={factors.phone}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    phone: e.target.checked
                  })
                }
              />

              Phone available

            </label>

          </div>

        </div>

      </div>


      {/* ACTIVE JOURNEY */}

      {journeyActive && (

        <div className="active-journey">

          <div>

            <span className="live-badge">
              ● JOURNEY ACTIVE
            </span>

            <h2>
              Travelling to {destination}
            </h2>

            <p>
              Check in before the timer ends.
            </p>

          </div>


          <div className="timer">
            {formatTime()}
          </div>


          <div className="journey-actions">

            <button
              className="safe-btn"
              onClick={confirmSafe}
            >
              💚 I'm Safe
            </button>


            <Link
              to="/emergency"
              className="sos-btn"
            >
              🚨 SOS
            </Link>


            <button
              className="cancel-btn"
              onClick={cancelJourney}
            >
              Cancel
            </button>

          </div>

        </div>

      )}


      {/* LOCATION */}

      <div className="location-card">

        <div>

          <span>
            LOCATION CHECK
          </span>

          <h2>
            📍 Check My Current Location
          </h2>

          <p>
            Your browser will ask for permission before
            sharing your location.
          </p>


          {location && (

            <div className="coordinates">

              Latitude:
              {" "}
              {location.latitude}

              <br />

              Longitude:
              {" "}
              {location.longitude}

            </div>

          )}


          {locationMessage && (

            <p className="location-message">
              {locationMessage}
            </p>

          )}

        </div>


        <button
          className="location-btn"
          onClick={getLocation}
        >
          📍 Get My Location
        </button>

      </div>

    </div>
  );
}

export default Journey;