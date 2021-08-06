const scheduleService = require("../services/schedule.services");

const makeAppointment = async (req, res) => {
  const { date, id, patient } = req.body;
  const appoinment = await scheduleService.createAppoin(date, id, patient);
  if (appoinment) {
    res.send(appoinment);
  } else {
    res.send("not available");
  }
};

module.exports = { makeAppointment };
