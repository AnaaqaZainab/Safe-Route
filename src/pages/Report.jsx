import React, { useState } from "react";

function Report() {

  const [type, setType] = useState("Poor Lighting");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reportTypes = [
    {
      name: "Poor Lighting",
      icon: "💡"
    },
    {
      name: "Isolated Area",
      icon: "🏚️"
    },
    {
      name: "Suspicious Activity",
      icon: "⚠️"
    },
    {
      name: "Road Problem",
      icon: "🛣️"
    },
    {
      name: "Harassment Concern",
      icon: "🚨"
    },
    {
      name: "Other",
      icon: "📌"
    }
  ];

  const submitReport = (e) => {

    e.preventDefault();

    if (!description.trim()) {
      alert("Please describe the issue.");
      return;
    }

    const selectedType = reportTypes.find(
      (item) => item.name === type
    );

    const newReport = {
      id: Date.now(),
      type,
      icon: selectedType.icon,
      description,
      date: new Date().toLocaleDateString()
    };

    const oldReports =
      JSON.parse(localStorage.getItem("safeRouteReports")) || [];

    localStorage.setItem(
      "safeRouteReports",
      JSON.stringify([newReport, ...oldReports])
    );

    setDescription("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="report-page">

      <div className="page-heading">

        <span>COMMUNITY SAFETY</span>

        <h1>Report an Unsafe Spot</h1>

        <p>
          Help identify safety concerns by recording an issue
          you noticed.
        </p>

      </div>


      <div className="report-layout">

        <div className="report-info">

          <div className="report-big-icon">
            📢
          </div>

          <h2>
            Your awareness can help.
          </h2>

          <p>
            Use this feature to record safety concerns such as
            poor lighting, isolated areas or road problems.
          </p>

          <div className="report-warning">
            ⚠️
            <span>
              This demo records reports locally in your browser.
              It does not automatically send reports to authorities.
            </span>
          </div>

        </div>


        <form
          className="report-form"
          onSubmit={submitReport}
        >

          <h2>Create Report</h2>

          <label>What did you notice?</label>

          <div className="report-types">

            {reportTypes.map((item) => (

              <button
                type="button"
                key={item.name}
                className={
                  type === item.name
                    ? "report-type selected"
                    : "report-type"
                }
                onClick={() => setType(item.name)}
              >

                <span>{item.icon}</span>

                {item.name}

              </button>

            ))}

          </div>


          <label>
            Description
          </label>

          <textarea
            rows="5"
            placeholder="Describe what you noticed..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />


          <button
            type="submit"
            className="submit-report"
          >
            📢 Submit Safety Report
          </button>


          {submitted && (

            <div className="success-message">
              ✓ Report saved successfully.
            </div>

          )}

        </form>

      </div>

    </div>
  );
}

export default Report;