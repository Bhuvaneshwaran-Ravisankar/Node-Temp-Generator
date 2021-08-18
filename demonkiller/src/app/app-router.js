const express = require("express");
const appController = require("./app-controller");

const router = express.Router();

router.post("/createApp", appController.createApp);

module.exports = router;
