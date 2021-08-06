const Schedule = require("../model/schedule.model");
const Doctor = require("../model/doctor.model");
const User = require("../model/user.model");

const checkAndCreate = async (id, date, patient) => {
  const doctor = await Doctor.findById(id);
  console.log(doctor);
  const user = await User.findOne({ name: patient });
  console.log(user);
  const availablilty = await Schedule.findOne({
    date: date,
    doctor: doctor,
    user: user,
  });
  console.log(availablilty);
  if (availablilty === null) {
    const appoinment = await Schedule.create({
      date: date,
      doctor: doctor,
      user: user,
    });
    console.log(appoinment);
    return appoinment;
  } else {
    return false;
  }
};

const createAppoin = async (date, id, patient) => {
  const appointment = await checkAndCreate(id, date, patient);
  if (appointment) {
    return appointment;
  } else {
    return false;
  }
};

module.exports = { createAppoin };
