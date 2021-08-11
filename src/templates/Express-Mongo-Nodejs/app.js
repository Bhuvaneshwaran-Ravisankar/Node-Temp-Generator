//... Package imports ...//

const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const https = require("https");
const express = require("express");
const env = require("./environment/environment");
const mongoose = require("mongoose");

const app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//... Port listener ...//
let httpServer = http.createServer(app);
httpServer.listen(env.locPort, () => {
  console.log("Server connected successfully in port " + env.locPort);
});

//... Sample hardcoded get method ...//
app.get("/", (req, res) => {
  res.send({ message: "Hello from API!" });
});

//... Database connection - MongoDb connection ...//
mongoose
  .connect("mongodb://localhost:27017/app-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => handleError(error));

//... Router App.js connections ...//
const appRoute = require("./src/app/app-router");

app.use("/app", appRoute);
