const { subscription, contactUs, bookdemo, fetchSubscribeApplications, fetchContactApplications, fetchBookdemoApplications } = require("../Model/Form");
const { validationResult } = require("express-validator");
const {
  sendSubscriptionEmail,
  sendContactusConfirmationEmail,
  sendContactusEmail,
  sendBookdemoConfirmationEmail,
  sendBookdemoEmail,
} = require("./sendMail");

const applySubscription = async (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = await subscription(req.body.email);

    if (data.rowsAffected[0] < 1) {
      return res.status(400).json({
        success: false,
        message: "entry not created",
      });
    }

    sendSubscriptionEmail(req.body.email);

    return res.status(200).json({
      success: true,
      message: "subscribed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "not subscribed",
    });
  }
};

const submitContactUs = async (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = await contactUs(req.body);

    if (data.rowsAffected[0] < 1) {
      return res.status(400).json({
        success: false,
        message: "entry not created",
      });
    }
    
    Promise.all([
      sendContactusConfirmationEmail(req.body),
      sendContactusEmail(req.body)
    ]);

    return res.status(200).json({
      success: true,
      message: "contact us submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "contact us form not submitted",
    });
  }
};

const submitBookdemo = async (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = await bookdemo(req.body);

    if (data.rowsAffected[0] < 1) {
      return res.status(400).json({
        success: false,
        message: "entry not created",
      });
    }
    
    Promise.all([
      sendBookdemoConfirmationEmail(req.body),
      sendBookdemoEmail(req.body)
    ]);

    return res.status(200).json({
      success: true,
      message: "contact us submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "contact us form not submitted",
    });
  }
};

const getSubscribeApplications = async (req, res) => {
  try {
    const data = await fetchSubscribeApplications();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "subscribe data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: "subscribe data fetch successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to fetch subscribe data",
    });
  }
};

const getContactApplications = async (req, res) => {
  try {
    const data = await fetchContactApplications();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Contact data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: "Contact data fetch successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to fetch contact data",
    });
  }
};

const getBookdemoApplications = async (req, res) => {
  try {
    const data = await fetchBookdemoApplications();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Bookdemo data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: "Bookdemo data fetch successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to fetch bookdemo data",
    });
  }
};

module.exports = {
  applySubscription,
  submitContactUs,
  submitBookdemo,
  getBookdemoApplications,
  getContactApplications,
  getSubscribeApplications,
};
