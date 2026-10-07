import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports =
      JSON.parse(localStorage.getItem("safeRouteReports")) || [];

    setReports(savedReports);
  }, []);

  const journey =
    JSON.parse(localStorage.getItem("safeRouteJourney"));

  const contacts =
    JSON.parse(localStorage.getItem("safeRouteContacts")) || [];

  return (
    <div className="dashboard-page">

      <section className="dashboard-header">

        <div>
          <span>SAFEROUTE CONTROL CENTER</span>

          <h1>Your Safety Dashboard</h1>

          <p>
            Quickly access your safety tools and monitor your
            SafeRoute activity.
          </p>
        </div>

        <div className="dashboard-status">
          <span></span>
          Safety system active
        </div>

      </section>


      {/* STAT CARDS */}

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon purple">🧭</div>

          <div>
            <span>JOURNEY</span>
            <h2>{journey ? "Active" : "Ready"}</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon green">👥</div>

          <div>
            <span>CONTACTS</span>
            <h2>{contacts.length}</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon orange">📢</div>

          <div>
            <span>REPORTS</span>
            <h2>{reports.length}</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon red">🚨</div>

          <div>
            <span>EMERGENCY</span>
            <h2>Ready</h2>
          </div>
        </div>

      </section>


      {/* QUICK ACTIONS */}

      <section className="dashboard-section">

        <div className="section-heading-left">

          <div>
            <span>QUICK ACTIONS</span>

            <h2>What do you need?</h2>
          </div>

        </div>


        <div className="quick-actions">

          <Link to="/journey" className="quick-card">

            <div className="quick-icon">
              🧭
            </div>

            <h3>Start Journey</h3>

            <p>
              Create a safety check-in plan.
            </p>

            <strong>
              Open →
            </strong>

          </Link>


          <Link to="/safe-places" className="quick-card">

            <div className="quick-icon">
              📍
            </div>

            <h3>Find Safe Places</h3>

            <p>
              Search useful nearby locations.
            </p>

            <strong>
              Explore →
            </strong>

          </Link>


          <Link to="/contacts" className="quick-card">

            <div className="quick-icon">
              👥
            </div>

            <h3>Trusted Contacts</h3>

            <p>
              Manage people you trust.
            </p>

            <strong>
              Manage →
            </strong>

          </Link>


          <Link to="/emergency" className="quick-card emergency-quick">

            <div className="quick-icon">
              🚨
            </div>

            <h3>Emergency</h3>

            <p>
              Get immediate emergency assistance.
            </p>

            <strong>
              SOS →
            </strong>

          </Link>

        </div>

      </section>


      {/* RECENT REPORTS */}

      <section className="dashboard-section">

        <div className="section-heading-left">

          <div>
            <span>SAFETY ACTIVITY</span>

            <h2>Recent Reports</h2>
          </div>

          <Link to="/report">
            + New Report
          </Link>

        </div>


        {reports.length === 0 ? (

          <div className="empty-dashboard">

            <div>📋</div>

            <h3>No reports yet</h3>

            <p>
              Report an unsafe condition to keep track of it.
            </p>

          </div>

        ) : (

          <div className="dashboard-reports">

            {reports.slice(0, 5).map((report) => (

              <div className="mini-report" key={report.id}>

                <div className="mini-report-icon">
                  {report.icon}
                </div>

                <div>
                  <h3>{report.type}</h3>

                  <p>{report.description}</p>
                </div>

                <span>
                  {report.date}
                </span>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* SAFETY TIPS */}

      <section className="safety-tip">

        <div className="tip-icon">
          💡
        </div>

        <div>

          <span>SAFETY TIP</span>

          <h2>
            Keep your trusted contacts updated.
          </h2>

          <p>
            Before travelling, make sure at least one trusted
            person knows where you are going.
          </p>

        </div>

        <Link to="/contacts">
          Check Contacts →
        </Link>

      </section>

    </div>
  );
}

export default Dashboard;