import React, { useState } from "react";
import { LenderView } from "./LenderView";
import { LonssCollection } from "/imports/api/lons";
import { useTracker } from "meteor/react-meteor-data";
import { NeedLenders } from "./NeedLenders";

export const Lender = ({ userdetails }) => {
  const [amount, setAmount] = useState("");

  //   const request = (e) => {
  //     const amount1 = parseInt(amount);
  //     e.preventDefault();
  //     if (amount1 <= 0) {
  //       alert("Enter proper value");
  //     } else {
  //       LonssCollection.insert({
  //         lender: userdetails.username,
  //         date: new Date(),
  //         amount: amount,
  //         lId: userdetails._id,
  //       });
  //     }
  //   };

  return (
    <div>
      <LenderView senduser={userdetails} />
      <h2>Lender Need!!</h2>
      <NeedLenders senduser={userdetails} />
    </div>
  );
};
