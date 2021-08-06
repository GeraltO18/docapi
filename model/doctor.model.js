const mongoose = require("mongoose");
const { v4 } = require("uuid");
const doctorSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4().toString(),
  },
  name: {
    type: String,
    require: true,
  },
  spec: {
    type: Array,
    require: true
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
