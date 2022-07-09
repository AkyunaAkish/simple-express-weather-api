const express = require("express");
const router = express.Router();

const fetchWeather = require("./handlers/fetchWeather");

// GET
router.get("/", fetchWeather);

module.exports = router;
