const mongoose = require("mongoose");
const { v4 } = require("uuid");
const scheduleSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4().toString(),
  },
  date: {
    type: String,
    require: true,
  },
  doctor: {
    type: String,
    ref: "Doctor",
  },
  user: {
    type: String,
    ref: "User",
  },
});

module.exports = mongoose.model("Schedule", scheduleSchema);
