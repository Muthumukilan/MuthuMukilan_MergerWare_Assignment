import React, { useState } from "react";
import { LenderView } from "./LenderView";
import { LonssCollection } from "/imports/api/lons";
import { useTracker } from "meteor/react-meteor-data";
import { BorrowerView } from "./BorrowerView";

export const Borrower = ({ userdetails }) => {
  const [amount, setAmount] = useState("");

  const request = (e) => {
    const amount1 = parseInt(amount);
    e.preventDefault();
    if (amount1 <= 0) {
      alert("Enter proper value");
    } else {
      LonssCollection.insert({
        borrower: userdetails,
        date: new Date(),
        amount: amount,
        lender: "",
        bol: 0,
      });
      alert(userdetails + " Ask " + amount);
    }
  };
  return (
    <div>
      <h1>Welcome</h1>
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

      <BorrowerView senduser={userdetails} />
    </div>
  );
};
