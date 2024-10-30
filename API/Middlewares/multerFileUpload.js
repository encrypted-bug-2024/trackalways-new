const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const endpoint = req.path;

    if (endpoint === "/job") {
      cb(null, path.join(__dirname, "../uploads/job"));
    } else if (endpoint === "/internship") {
      // const currentDate = new Date().toISOString().slice(0, 10);
      // const directoryPath = path.join(__dirname, "../uploads/internship", currentDate);
      // if (!fs.existsSync(directoryPath)) {
      //   fs.mkdirSync(directoryPath, { recursive: true });
      // }
      // cb(null, directoryPath);
      cb(null, path.join(__dirname, "../uploads/internship"));
    }
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const fileFilter = (req, file, cb) => {
    if (file.fieldname === 'resume') {
        (file.mimetype === 'application/pdf') ? cb(null, true) : cb(null, false);
    }
}

exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter,
}).fields([
    {name: 'resume', maxCount: 1, maxFileSize: 5 * 1024 * 1024},
])