module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve a single User by id
    router.get("/:id", users.findOne);

    // Create a new User
    router.post("/", users.create);
  
    // Update a User by id
    router.put("/:id", users.update);
  
    // Delete a User by id
    router.delete("/:id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };