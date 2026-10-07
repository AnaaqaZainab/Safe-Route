import React, { useState } from "react";

function SafePlaces() {

  const [search, setSearch] = useState("");

  const places = [
    {
      icon: "🏥",
      name: "Government Hospital",
      type: "Hospital",
      distance: "Nearby",
      description: "Medical assistance and emergency care."
    },
    {
      icon: "👮",
      name: "Police Station",
      type: "Police",
      distance: "Nearby",
      description: "Police assistance and emergency support."
    },
    {
      icon: "🏪",
      name: "24/7 Pharmacy",
      type: "Pharmacy",
      distance: "Nearby",
      description: "Medicine and basic healthcare support."
    },
    {
      icon: "🏢",
      name: "Public Help Centre",
      type: "Help Centre",
      distance: "Nearby",
      description: "A public place where you can seek assistance."
    },
    {
      icon: "⛽",
      name: "Fuel Station",
      type: "Public Place",
      distance: "Nearby",
      description: "Well-lit public location with regular activity."
    },
    {
      icon: "🏨",
      name: "Hotel",
      type: "Public Place",
      distance: "Nearby",
      description: "A place where you can seek temporary assistance."
    }
  ];

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()) ||
    place.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <section className="safe-page">

        <div className="page-heading">

          <span>📍 SAFETY LOCATOR</span>

          <h1>Find Safe Places</h1>

          <p>
            Find useful public locations where you can seek help
            or assistance.
          </p>

        </div>


        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search hospitals, police stations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="places-grid">

          {filteredPlaces.map((place, index) => (

            <div className="place-card" key={index}>

              <div className="place-top">

                <div className="place-icon">
                  {place.icon}
                </div>

                <span className="distance">
                  {place.distance}
                </span>

              </div>

              <h3>{place.name}</h3>

              <span className="place-type">
                {place.type}
              </span>

              <p>
                {place.description}
              </p>

              <button
                className="direction-btn"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/${encodeURIComponent(place.name)}`,
                    "_blank"
                  )
                }
              >
                🗺️ Open in Maps
              </button>

            </div>

          ))}

        </div>


        {filteredPlaces.length === 0 && (

          <div className="no-results">
            <div>🔎</div>

            <h3>No places found</h3>

            <p>
              Try searching with another keyword.
            </p>
          </div>

        )}

      </section>

    </div>
  );
}

export default SafePlaces;