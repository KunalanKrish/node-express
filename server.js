const express = require("express");
const server = express();
var bodyParser = require('body-parser');

const morgan = require("morgan");
const cors = require("cors");

const portalAccountRouter = require("./routes/portalAccount-router.js");

// Middleware
server.use(cors());
server.use(morgan("dev"));
// server.use(express.json());
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());

// Routers
server.use("/api/portal_account", portalAccountRouter);

//Routes
server.get("/health-check", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
