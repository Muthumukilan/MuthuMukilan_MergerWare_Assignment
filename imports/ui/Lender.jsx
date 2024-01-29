import React, { useState } from "react";
import { LenderView } from "./LenderView";
import { LonssCollection } from "/imports/api/lons";
import { useTracker } from "meteor/react-meteor-data";

export const Lender = ({ userdetails }) => {
  const [amount, setAmount] = useState("");
  const send = userdetails;
  const request = (e) => {
    const amount1 = parseInt(amount);
    e.preventDefault();
    if (amount1 <= 0) {
      alert("Enter proper value");
    } else {
      LonssCollection.insert({
        lender: userdetails.username,
        date: new Date(),
        amount: amount,
        lId: userdetails._id,
      });
    }
  };
  return (
    <div>
      <form method="post" onSubmit={request}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="Amount"
          name="Amount"
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <br></br>
        <input type="submit" value="Ask lend"></input>
      </form>

      <LenderView senduser={send} />
    </div>
  );
};
