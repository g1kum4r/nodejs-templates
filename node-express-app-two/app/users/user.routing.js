const express = require("express");
const {
  fetchAllUsers,
  saveUser,
  fetchUserById,
  deleteUserById,
} = require("./user.controller");
const userRouter = express.Router();

// users routing
userRouter
  .route("/")
  .get(fetchAllUsers) // fetch all users
  .post(saveUser); // save new user

userRouter
  .route("/:id")
  .get(fetchUserById) // fetch user by id
  .delete(deleteUserById); // delete user by id

module.exports = userRouter;
