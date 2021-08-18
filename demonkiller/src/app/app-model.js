const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var appSchema = new Schema({
  app_name: { type: String, required: true },
  created_date: { type: Date, required: true },
});

module.exports = mongoose.model("appSchema", appSchema);
