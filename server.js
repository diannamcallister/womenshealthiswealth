const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./backend/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Women's Health is Wealth." });
});

// include the endpoints for user CRUD
require("./backend/routes/users.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});