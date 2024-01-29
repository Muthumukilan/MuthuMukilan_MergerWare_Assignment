import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LonssCollection } from "/imports/api/lons";
import { Lons } from "./Lons";

export const LenderView = ({ senduser }) => {
  const lonsa = useTracker(() => {
    return LonssCollection.find({ lender: senduser.username }).fetch();
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {lonsa.map((lons) => (
              <Lons key={lons._id} lons={lons} />
            ))}
          </tr>
          <tr>
            <td>John Doe</td>
            <td>$5000</td>
            <td>Jane Smith</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
