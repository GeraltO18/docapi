const mongoose = require("mongoose");
const { v4 } = require("uuid");
const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4().toString(),
  },
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
