const express = require("express");
const mongoose = require("mongoose");
const scheduleController = require("./controller/schedule.controller");
const User = require("./model/user.model");
const Doctor = require("./model/doctor.model");
app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost/docapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/make-appoinment", scheduleController.makeAppointment);
app.post("/createUser", async (req, res) => {
  const user = await User.create(req.body);
  console.log(user);
  res.send(user);
});
app.post("/createDoc", async (req, res) => {
  const doc = await Doctor.create(req.body);
  res.send(doc);
});
app.post("/getDoctor", async (req, res) => {
  const specs = req.body.spec;
  const doctors = await Doctor.find({ spec: { $in: specs } });
  res.send(doctors);
});
app.listen(3000);
