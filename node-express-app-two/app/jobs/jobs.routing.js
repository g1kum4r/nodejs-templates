const express = require("express");
const { fetchAllJobs, saveJob, fetchJobById, deleteJobById } =
  require("./jobs.controller").default;
const jobsRouter = express.Router();

jobsRouter
  .route("/")
  .get(fetchAllJobs) // fetch all jobs
  .post(saveJob); // save new job
jobsRouter
  .route("/:id")
  .get(fetchJobById) // fetch job by id
  .delete(deleteJobById); // delete job by id

module.exports = jobsRouter;
