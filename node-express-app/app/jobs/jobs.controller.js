const jobs = [];

const fetchAllJobs = (req, res) => {
  res.send({
    title: "fetch all jobs",
    data: jobs,
  });
};

const saveJob = (req, res) => {
  const job = req.body;
  jobs.push(job);
  res.send({
    title: "save job",
    data: job,
  });
};

const fetchJobById = (req, res) => {
  const id = req.params.id;
  const job = jobs.find((job) => job.id === +id);
  res.send({
    title: `fetch job by ${id}`,
    data: job,
  });
};

const deleteJobById = (req, res) => {
  const id = req.params.id;
  const index = jobs.findIndex((job) => job.id === +id);
  jobs.splice(index, 1);
  res.send({
    title: `delete job by ${id}`,
  });
};

module.exports = {
  fetchAllJobs,
  fetchJobById,
  saveJob,
  deleteJobById,
};
