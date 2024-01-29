import React from "react";
import { LonssCollection } from "/imports/api/lons";
import { useTracker } from "meteor/react-meteor-data";
import { AdminView } from "./AdminView";

export const Admin = (senduser) => {
  const lonsa = useTracker(() => {
    return LonssCollection.find({}).fetch();
  });
  return (
    <div>
      <h1>Welcome Admin!!</h1>
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
            <AdminView key={lons._id} lons={lons} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
