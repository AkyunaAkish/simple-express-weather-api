require("dotenv").config();
const asyncRoute = require("../../asyncRoute");
const axios = require("axios");

const route = async (req, res) => {
  if (!req.query.city || !req.query.city.trim().length) {
    res.status(404).json("Invalid City");
  } else {
    let city = req.query.city;

    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
      );

      console.log("Weather Data: ", data);

      res.status(200).json(data);
    } catch (error) {
      console.log("error fetching weather", error);
      res.status(500).json(error);
    }
  }
};

module.exports = asyncRoute(route);
