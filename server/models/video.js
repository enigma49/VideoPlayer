const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoSchema = new Schema({
  name: String,
  trailer: String,
  poster: String,
  year: String
});

module.exports = mongoose.model("video", videoSchema, "videos");
