import React from "react";

function Emergency() {

  const callNumber = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="page">

      <section className="emergency-page">

        <div className="emergency-header">

          <div className="danger-icon">
            🚨
          </div>

          <h1>Emergency Help</h1>

          <p>
            If you are in immediate danger, contact the appropriate
            emergency service.
          </p>

        </div>


        <div className="emergency-grid">

          <div className="emergency-card police">

            <div className="service-icon">👮</div>

            <h2>Police</h2>

            <p>
              For immediate safety threats or emergencies.
            </p>

            <button onClick={() => callNumber("112")}>
              📞 Call 112
            </button>

          </div>


          <div className="emergency-card medical">

            <div className="service-icon">🚑</div>

            <h2>Medical Emergency</h2>

            <p>
              Contact emergency medical assistance.
            </p>

            <button onClick={() => callNumber("108")}>
              📞 Call 108
            </button>

          </div>


          <div className="emergency-card general">

            <div className="service-icon">🆘</div>

            <h2>General Emergency</h2>

            <p>
              Use India's unified emergency number.
            </p>

            <button onClick={() => callNumber("112")}>
              📞 Call 112
            </button>

          </div>

        </div>


        <div className="emergency-note">

          <h3>⚠️ Important</h3>

          <p>
            If you are facing immediate danger, move to a safe
            public location and contact emergency services.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Emergency;