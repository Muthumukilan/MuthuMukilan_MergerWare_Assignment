import React from "react";
import { Meteor } from "meteor/meteor";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";
import { Lender } from "./Lender";
import { LenderView } from "./LenderView";
import { Borrower } from "./Borrower";
import { BorrowerView } from "./BorrowerView";
import { Admin } from "./Admin";
import { useTracker } from "meteor/react-meteor-data";
import { UsersCollection } from "../api/users";

export const App = () => {
  const pickRoll = () => {};
  const logout = () => Meteor.logout();
  const user = useTracker(() => Meteor.user());
  const userFilter = user ? { userId: user._id } : {};
  const lenderfind = () => {
    return UsersCollection.findOne({ uid: user.username, roll: "lender" });
  };
  const borrowerfind = () => {
    return UsersCollection.findOne({ uid: user.username, roll: "borrower" });
  };

  return (
    <div>
      {user ? (
        <>
          {lenderfind ? (
            <>
              <div className="user" onClick={logout}>
                {user.username} 🚪
              </div>

              <Lender userdetails={user.username} />
            </>
          ) : (
            <>
              <Borrower userdetails={user.username} />
            </>
          )}

          {/* <Admin /> */}
        </>
      ) : (
        <>
          <LoginForm />
          <Register />
        </>
      )}
    </div>
  );
};
