const {
  fetchInternshipApplications,
  internship,
} = require("../Model/Internship");
const { validationResult } = require("express-validator");

const {
  sendInternshipEmail,
  sendInternshipConfirmationEmail,
} = require("./sendMail");

const getInternshipApplications = async (req, res) => {
  try {
    const data = await fetchInternshipApplications();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "internship data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: "internship data fetch successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to fetch internship data",
    });
  }
};

const applyInternship = async (req, res) => {
  // console.log("body: ", req.body);
  // console.log("files: ", req.files);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const fileInfo = {
    resume: req.files.resume[0].filename,
    destination: req.files.resume[0].destination,
  };

  try {
    const data = await internship(req.body, fileInfo);

    if (data.rowsAffected[0] < 1) {
      return res.status(400).json({
        success: false,
        message: "Entry not created",
      });
    }

    Promise.all([
      sendInternshipEmail(req.body, req.files),
      sendInternshipConfirmationEmail(req.body.name, req.body.email),
    ]);

    return res.status(200).json({
      success: true,
      message: "Internship form added successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to add internship form",
    });
  }
};

module.exports = { getInternshipApplications, applyInternship };
