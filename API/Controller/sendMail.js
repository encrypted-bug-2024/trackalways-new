const mailSender = require("../Utils/mailSender");
const {
  internshipApplicationConfirmation,
} = require("../templates/internshipConfirmationTemplate");
const {
  jobApplicationConfirmation,
} = require("../templates/jobConfirmationTemplate");
const {
  subscriptionConfirmation,
} = require("../templates/subscriptionTemplate");
const {
  candidateJobApplicationDetails,
} = require("../templates/jobApplicationTemplate");
const {
  candidateInternApplicationDetails,
} = require("../templates/internApplicationTemplate");
const {
  contactUsConfirmation,
} = require("../templates/contactusConfirmationTemplate");
const {
  contactusApplicationDetails,
} = require("../templates/contactusApplicationTemplate");
const {
  bookdemoConfirmation,
} = require("../templates/bookdemoConfirmationTemplate");
const {
  bookdemoApplicationDetails,
} = require("../templates/bookdemoApplicationTemplate");

const CARE_MAIL = process.env.CARE_MAIL;

const sendInternshipEmail = async (formData, files) => {
  // console.log("sendInternshipEmail before formData: ", formData);
  // const formDataString = JSON.stringify(formData);
  // console.log("sendInternshipEmail after formData: ", formDataString);
try{
  const title = `Internship Application Details - ${formData.name}`;
  const body = candidateInternApplicationDetails(formData);
  const attachments = [
    files.resume[0],
    files.collegeId[0],
    files.identityProof[0],
  ];

  await mailSender(CARE_MAIL, title, body, attachments);
}
catch(err){
  console.log(err);
}
};

const sendJobEmail = async (formData, file) => {
  const title = `Job Application Details - ${formData.name}`;
  const body = candidateJobApplicationDetails(formData);

  await mailSender(CARE_MAIL, title, body, file);
};

const sendInternshipConfirmationEmail = async (name, email) => {
  console.log("sendCandidateGreetingEmail candidateEmail: ", email);

  const title = "Internship Application Confirmation";
  const body = internshipApplicationConfirmation(
    name,
    email
  );

  await mailSender(email, title, body);
};

const sendJobConfirmationEmail = async (name, email, job_profile) => {
  console.log("sendCandidateGreetingEmail candidateEmail: ", email);

  const title = "Job Application Confirmation";
  const body = jobApplicationConfirmation(
    name,
    email,
    job_profile
  );

  await mailSender(email, title, body);
};

const sendSubscriptionEmail = async (email) => {
  const title = "Subscription Email";
  const body = subscriptionConfirmation(email);

  await mailSender(email, title, body);
};

const sendContactusConfirmationEmail = async (formData) => {
  console.log("sendUserGreetingEmail candidateEmail: ", formData.email);

  const title = "Contact-Us Application Confirmation";
  const body = contactUsConfirmation(
    formData.name,
    formData.email,
    formData.mobile,
    formData.subject,
    formData.message,
  );

  await mailSender(formData.email, title, body);
};

const sendBookdemoConfirmationEmail = async (formData) => {
  console.log("sendUserGreetingEmail candidateEmail: ", formData.email);

  const title = "Book A Demo Application Confirmation";
  const body = bookdemoConfirmation(
    formData.name,
    formData.email,
    formData.mobile,
    formData.company,
    formData.message,
  );

  await mailSender(formData.email, title, body);
};

const sendBookdemoEmail = async (formData) => {
  const title = `Book A Demo Application Details - ${formData.name}`;
  const body = bookdemoApplicationDetails(formData);

  await mailSender(CARE_MAIL, title, body);
};

const sendContactusEmail = async (formData) => {
  const title = `Job Application Details - ${formData.name}`;
  const body = contactusApplicationDetails(formData);

  await mailSender(CARE_MAIL, title, body);
};

module.exports = {
  sendInternshipEmail,
  sendJobEmail,
  sendInternshipConfirmationEmail,
  sendJobConfirmationEmail,
  sendSubscriptionEmail,
  sendContactusConfirmationEmail,
  sendContactusEmail,
  sendBookdemoEmail,
  sendBookdemoConfirmationEmail,
};
