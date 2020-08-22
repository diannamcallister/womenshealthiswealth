const db = require("../db-config");
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
    
    // Call the db to get all users
    Users.findAll()
    .then(data => res.send(data))
    .catch(error => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while getting all Users."
          });
    })
};

// Find a single User with an id
exports.findOne = (req, res) => {
    console.log("in find one");
    
    var id = req.params.id;
    Users.findByPk(id)
    .then(data => res.send(data))
    .catch(error => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while getting all Users."
        });
    })
};

// Update a User's secure password
exports.update = (req, res) => {
    console.log("in update");
    
    var id = req.params.id;
    var user = {
        username: req.body.username,
        password: req.body.password,
        secure_password: req.body.password
    }

    Users.findByPk(id)
    .then(data => {
        // check if the request body's username and password is the same as that from the db
        if (req.body.username !== data.username) {
            res.status(400).send({
                message:
                "You cannot change your username once it has been set."
            });
            return;
        }
        if (req.body.password !== data.password) {
            res.status(400).send({
                message:
                "You cannot change your password once it has been set."
            });
            return;
        }
        
        //TODO: check if .then() can be entered even if secure password was not updated
        Users.update(req.body, {where: {id: id}})
        .then(() => {
            res.send({
                message: "User's secure password was updated."
            });
        })
        .catch(error => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating the users secure password."
            });
        })
    })
    .catch(error => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while getting all Users."
        });
    })
};