const users = [];

const fetchAllUsers = (req, res) => {
  res.send({
    title: "fetch all users",
    data: users,
  });
};

const saveUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send({
    title: "save user",
    data: user,
  });
};

const fetchUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === +id);
  res.send({
    title: `fetch user by ${id}`,
    data: user,
  });
};

const deleteUserById = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === +id);
  users.splice(index, 1);
  res.send({
    title: `delete user by ${id}`,
  });
};

module.exports = {
  fetchAllUsers,
  fetchUserById,
  saveUser,
  deleteUserById,
};
