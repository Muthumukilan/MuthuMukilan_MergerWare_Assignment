import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LonssCollection } from "/imports/api/lons";
import { Lons } from "./Lons";

export const BorrowerView = ({ senduser }) => {
  const lonsa = useTracker(() => {
    return LonssCollection.find({ borrower: senduser }).fetch();
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          {lonsa.map((lons) => (
            <Lons key={lons._id} lons={lons} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
