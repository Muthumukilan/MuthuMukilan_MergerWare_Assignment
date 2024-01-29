import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LonssCollection } from "/imports/api/lons";
import { GiveLend } from "./GiveLend";

export const NeedLenders = ({ senduser }) => {
  const deleteTask = ({ _id }) =>
    LonssCollection.update(
      { _id: _id },
      { $set: { lender: senduser, bol: 1 } }
    );
  const lends = useTracker(() => {
    return LonssCollection.find({ bol: 0 }).fetch();
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
          {lends.map((lends) => (
            <GiveLend
              key={lends._id}
              lends={lends}
              onDeleteClick={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
