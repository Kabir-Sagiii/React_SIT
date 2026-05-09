import React from "react";
import "./ChangePassword.css";

function ChangePassword() {
  return (
    <div className="change-password-page">
      <div className="card">
        <h2>Change Password</h2>
        <p>Update your password in a few simple steps.</p>
        <form className="password-form">
          <label>
            Current password
            <input type="password" placeholder="Current password" />
          </label>
          <label>
            New password
            <input type="password" placeholder="New password" />
          </label>
          <label>
            Confirm password
            <input type="password" placeholder="Confirm new password" />
          </label>
          <button type="submit">Save changes</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
