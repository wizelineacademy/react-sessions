const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const SECRET_KEY = 'de34dd014e55386c25ca2896e166c876';
const LOCATION = '43.7695,11.2558';

const API_HOST = 'https://api.darksky.net/forecast/';
const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);


const data = {"currently": {
  "time": 1509993277,
  "summary": "Drizzle",
  "icon": "rain",
  "nearestStormDistance": 0,
  "precipIntensity": 0.0089,
  "precipIntensityError": 0.0046,
  "precipProbability": 0.9,
  "precipType": "rain",
  "temperature": 66.1,
  "apparentTemperature": 66.31,
  "dewPoint": 60.77,
  "humidity": 0.83,
  "pressure": 1010.34,
  "windSpeed": 5.59,
  "windGust": 12.03,
  "windBearing": 246,
  "cloudCover": 0.7,
  "uvIndex": 1,
  "visibility": 9.84,
  "ozone": 267.44
}};

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
  try {
    // const res = await axios.get(`${API_HOST}${SECRET_KEY}/${LOCATION}`);
    // socket.emit("FromAPI", { data: res.data.currently });
    socket.emit("FromAPI", { data: data.currently });
  } catch (error) {
    socket.emit("FromAPI", { data: {} });
    console.error(`Error: ${error}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
