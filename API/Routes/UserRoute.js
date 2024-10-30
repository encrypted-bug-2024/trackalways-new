const express = require("express")
const router = express.Router()

const {
  login,
  createPassHash,
  signup,
  getUsers,
  updateUserStatus,
  resetPassword,
} = require("../Controller/AuthController")

const { auth } = require("../Middlewares/auth");

router.post("/login", login);
router.put("/changePassword/:token", resetPassword);
router.post("/createPassHash", auth, createPassHash);
router.post("/signup", auth, signup);
router.get("/getUsers", auth, getUsers);
router.post("/updateUserStatus", auth, updateUserStatus);

module.exports = router