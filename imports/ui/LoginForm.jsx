import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const finalpassword = password + roll;

    Meteor.loginWithPassword(username, finalpassword);
    alert(username + " " + finalpassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="#" method="post" onSubmit={submit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            onChange={(e) => setRoll(e.target.value)}
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="lender">Lender</option>
            <option value="borrower">Borrower</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
