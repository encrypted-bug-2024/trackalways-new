const { job, fetchJobApplications } = require("../Model/Job");
const { validationResult } = require("express-validator");

const {
  sendJobEmail,
  sendJobConfirmationEmail,
} = require("./sendMail");

const applyJob = async (req, res) => {
  console.log(req.body);
  console.log(req.files.resume[0]);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = await job(
      req.body,
      req.files.resume[0].filename,
      req.files.resume[0].destination
    );

    if (data.rowsAffected[0] < 1) {
      return res.status(400).json({
        success: false,
        message: "entry not created",
      });
    }

    Promise.all([
      sendJobEmail(req.body, req.files.resume[0]),
      sendJobConfirmationEmail(req.body.name, req.body.email, req.body.job_profile),
    ]);

    return res.status(200).json({
      success: true,
      message: "job form add successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to add job form",
    });
  }
};

const getJobApplications = async (req, res) => {
  try {
    const data = await fetchJobApplications();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "job data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: "job data fetch successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to fetch job data",
    });
  }
};

module.exports = {
  applyJob,
  getJobApplications
};
