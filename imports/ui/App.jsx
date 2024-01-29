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

export const App = () => {
  const logout = () => Meteor.logout();
  const user = useTracker(() => Meteor.user());
  const userFilter = user ? { userId: user._id } : {};

  return (
    <div>
      {user ? (
        <>
          <div className="user" onClick={logout}>
            {user.username} 🚪
          </div>
          <h1>Welcome to Meteor!</h1>

          <Lender userdetails={user} />
          {/* <Borrower />
    <BorrowerView />
    <Admin /> */}
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
