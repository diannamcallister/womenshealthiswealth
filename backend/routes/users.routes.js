module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve a single User by id
    router.get("/:id", users.findOne);

    // Check a User signing in
    router.get("/:username/:password", users.checkLogin)

    // Create a new User
    router.post("/", users.create);
  
    // Update a User by id
    router.put("/:id", users.update);
  
    // beginning of the endpoint
    app.use('/api/users', router);
  };