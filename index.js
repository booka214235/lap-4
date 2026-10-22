const express = require("express");
const TripRouter = require("../TripRouter");

const app = express();

app.use(express.json());

app.use("/Trips", TripRouter);

module.exports = {app};
