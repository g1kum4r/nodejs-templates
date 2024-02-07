// configuration of node/express app
const express = require("express");
const jobsRouter = require("./app/jobs/jobs.routing");
const userRouter = require("./app/users/user.routing");
const server = express();
server.use(express.json());

// users routing
server.use("/users", userRouter);

// jobs routing
server.use("/jobs", jobsRouter);

const port = 3000;
server.listen(port, () => {
  console.log(`application started on ${port}`);
});
