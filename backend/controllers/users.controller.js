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
  
  if (req.body.secure_password) {
      user.secure_password = req.body.secure_password;
  }

  if (req.body.email) {
    user.email = req.body.email;
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

// Check that a user is signing in with the correct login credentials
exports.checkLogin = (req, res) => {
    console.log("checking login information");

    var username = req.params.username;
    var unknown_password = req.params.password;

    Users.findAll({ where : {username : username}})
    .then(data => {
        if (data[0].dataValues.password === unknown_password) {
            // user is trying to sign into general page
            res.send({
                message: "User is accessing the general page"
            });
        }
        else if (data[0].dataValues.secure_password === unknown_password) {
            // user is trying to sign into secure page
            res.send({
                message: "User is accessing the secure page"
            });
        } else {
            // the user is in the database, but is entering the incorrect password
            res.status(400).send({
                message: "User is giving an incorrect password"
            });
        }
    })
    .catch(error => {
        res.status(500).send({
            message:
            error.message || "Some error occurred while getting all Users."
        });
    });
    
}

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