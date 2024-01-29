import { Meteor } from "meteor/meteor";
import { LonssCollection } from "/imports/api/lons";
import { UsersCollection } from "/imports/api/users";
import { Accounts } from "meteor/accounts-base";
const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(async () => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  if (UsersCollection.find().count() === 0) {
    UsersCollection.insert({
      uid: "Admin",
      password: "Password",
      roll: "Admin",
    });
  }
});
