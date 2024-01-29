import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { UsersCollection } from "../api/users";
import { Meteor } from "meteor/meteor";

export const Register = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [roll, setRoll] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finduid = UsersCollection.find({ uid: userId, roll: roll }).count();
    if (!userId || !password || !cpassword || !roll) {
      alert("Enter all details");
    } else if (password != cpassword) {
      alert("Password missmatch");
    } else if (finduid === 0) {
      const finalpassword = password + roll;
      Accounts.createUser({
        username: userId,
        password: finalpassword,
      });
      UsersCollection.insert({
        uid: userId,
        password: finalpassword,
        roll: roll,
      });
      alert("registerd");
    } else {
      alert("finduid");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setUserId(e.target.value)}
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
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            onChange={(e) => setCPassword(e.target.value)}
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
