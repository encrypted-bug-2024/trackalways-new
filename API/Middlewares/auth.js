// Importing required modules
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // console.log("token: ", token);

    if (!token || !token.startsWith("JWT ")) {
      console.error("Forbidden: No token provided");
      return res.status(403).json({ error: "Forbidden: No token provided" });
    }

    const jwtToken = token.split(" ")[1];
    // Ensure the token does not have quotes
    // jwtToken = jwtToken.replace(/^"|"$/g, "");
    // console.log("Extracted Token: ", jwtToken);

    jwt.verify(jwtToken, "jwt_secret", (err, decoded) => {
      if (err) {
        console.error("Token invalid: ", err);
        return res.status(403).json({ error: "Forbidden: Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      error: error.message,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};
