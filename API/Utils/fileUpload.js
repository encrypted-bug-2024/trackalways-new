const fs = require("fs");

exports.localFileUpload = async (file) => {
  try {
    if (!file) {
      throw new Error("No file provided");
    }

    // Validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".");
    const len = fileType.length;

    if (!isFileTypeSupported(fileType[len - 1], supportedTypes)) {
      throw new Error("Image format not supported");
    }

    // Server path -> inside controller folder
    // const path =
    //   __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    const rootPath = __dirname.split("Utils")[0];
    console.log('rootPath: ', rootPath);
    const path = rootPath + "uploads/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log('path: ', path);

    // Move the file
    await new Promise((resolve, reject) => {
      file.mv(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const fileName = path.split("/");

    return {
      success: true,
      path: path,
      fileName: fileName[fileName.length - 1],
      message: "Local file uploaded successfully",
    };
  } catch (error) {
    console.error("Error occurred while uploading local file:", error);
    throw error;
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type.toLowerCase()); // Ensure case insensitivity
}

exports.getLocalImage = async (fileName) => {
  try {
    // Server path -> inside controller folder
    const path = __dirname + "/files/";
    const fullPath = __dirname + "/files/" + fileName;

    // Check if file exists
    if (!fs.existsSync(path)) {
      return {
        success: false,
        message: 'File not found'
      };
    }

    return {
      success: true,
      path: path,
      fullPath: fullPath,
      fileName: fileName,
      message: "Local file content read successfully",
    };
  } catch (error) {
    console.error("Error occurred while reading local file content:", error);
    throw error;
  }
};
