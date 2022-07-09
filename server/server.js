require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

// API Route Files
const weather = require("./routes/weather");

const app = express();

app.use(cors());

// setup logs
app.use(logger("dev"));

app.use(logger("common"));

// compress all requests
app.use(compression());

// parse request to json
app.use(
  bodyParser.json({
    limit: "100mb",
    type: "application/json",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100mb",
  })
);

// allows for setting/reading/editing/deleting cookies
app.use(cookieParser(process.env.COOKIE_SECRET || "default_cookie_secret"));

// API endpoints:
app.use("/api/weather", weather);

module.exports = app;
