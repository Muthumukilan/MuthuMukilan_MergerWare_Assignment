import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LonssCollection } from "/imports/api/lons";
import { Lends } from "./Lends";

export const LenderView = ({ senduser }) => {
  const lends = useTracker(() => {
    return LonssCollection.find({ lender: senduser }).fetch();
  });
  return (
    <div>
      <h1>Welcome</h1>
      <table>
        <thead>
          <tr>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          {lends.map((lends) => (
            <Lends key={lends._id} lends={lends} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
