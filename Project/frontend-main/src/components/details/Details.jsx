import React from "react";
import "./Details.css";

function Details() {
  return (
    <div className="details-page">
      <div className="details-card">
        <h2>Personal Details</h2>
        <p>Review and update your account information.</p>
        <div className="details-list">
          <div>
            <strong>Name:</strong>
            <span>Jane Doe</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>jane.doe@example.com</span>
          </div>
          <div>
            <strong>Phone:</strong>
            <span>+1 555 123 4567</span>
          </div>
          <div>
            <strong>Address:</strong>
            <span>123 Main Street, Springfield</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
