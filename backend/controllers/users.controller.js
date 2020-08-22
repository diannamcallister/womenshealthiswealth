const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  console.log("in create");

  // Checks to make sure that all information to create a user has been entered.
  if (!req.body.username) {
    res.status(400).send({
        message: "You must create a username."
      });
      return;
  }
  if (!req.body.password) {
    res.status(400).send({
        message: "You must create a password."
      });
      return;
  }

  // Create the User
  const user = {
      username: req.body.username,
      password: req.body.password
  }  

  // Save the user to the db
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });

  return;
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    console.log("in find all");
    res.send({
        message: "User was found successfully!"
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    console.log("in find one");
    return;
};

// Update a User by the id in the request
exports.update = (req, res) => {
    console.log("in update");
    return;
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    console.log("in delete");
    return;
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    console.log("in delete all");
    return;
};