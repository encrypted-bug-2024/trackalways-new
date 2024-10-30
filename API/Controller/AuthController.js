const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUser, createUser, fetchUsers, updateUser, fetchUserIdResetToken, changePassword, createResetToken } = require("../Model/Auth");
const { createHashed } = require("../Utils/crypto");
const crypto = require("crypto");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

    const user = await findUser(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    if (!user.is_active) {
      return res.status(401).json({
        success: false,
        message: `User is dea-ctivated`,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "password incorrect",
      });
    }

    if (user.isFirstLogin) {
      const token = crypto.randomBytes(20).toString("hex");
      const resetPasswordExpires = Date.now() + 60000;
      // console.log("resetPasswordExpires: ", resetPasswordExpires);

      const response = await createResetToken(user.id, token, resetPasswordExpires)

      if(response.rowsAffected[0] < 1){
        return res.status(500).json({
          success: false,
          message: "Something went wrong while creating token",
        });
      }

      return res.status(200).json({
        success: true,
        token: token,
        message: "force change password",
        isFirstLogin: true
      });
    }
    else{
      const payload = {
        email: user.email,
        id: user.id,
      };

      let token = jwt.sign(payload, 'jwt_secret');

      console.log('generated_token: ', token);

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      delete user.password;
      // console.log("user after remove password: ", user[0]);

      res.cookie("token", token, options);
      res.cookie("id", user.id);

      return res.status(200).json({
        success: true,
        token: token,
        user: user,
        message: "Login Successful",
        isFirstLogin: false
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: `Login Failure Please Try Again`,
    });
  }
};

const createPassHash = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill Up All the Required Fields`,
      });
    }

    const hashPass = await createHashed(password);
    console.log(hashPass);

    return res.status(200).json({
      success: true,
      message: `Password Hashed Successfully`,
      password: hashPass,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: `Failed to create hash, Please Try Again!`,
    });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, username } = req.body;

    if (!name || !email || !username) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

    const user = await findUser(email);

    if (user) {
      return res.status(409).json({
        success: false,
        message: `User already registered with us. Please login to continue.`,
      });
    }

    // if (password !== confirmPassword) {
    //   return res.status(401).json({
    //     success: false,
    //     message: `password not match`,
    //   });
    // }

    const defaultPassword = 'Jain@1234'

    const hashPass = await createHashed(defaultPassword);
    console.log(hashPass);

    const reponse = createUser(name, email, hashPass, username);

    if(reponse.rowsAffected < 1){
      return res.status(500).json({
        success: false,
        message: `something went wrong, try again!`,
      });
    }

    return res.status(201).json({
      success: true,
      message: `User created`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: `Login Failure Please Try Again`,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await fetchUsers();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: `Users data not found`,
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
      message: `users data fetched successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: `Failed to fetch users data`,
    });
  }
};

const updateUserStatus = async (req, res) => {
  const { id, is_active } = req.body;
  try {
    const response = await updateUser(id, is_active);

    if (response.rowsAffected < 1) {
      return res.status(400).json({
        success: false,
        message: `User status not updated`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `User status updated successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: `Failed to update user status`,
    });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const token = req.params.token;

    const { password, confirmPassword } = req.body;

    if (!password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password not match",
      });
    }

    const user = await fetchUserIdResetToken(token);

    if(!user){
      return res.status(404).json({
        success: false,
        message: "token not found",
      });
    }

    // console.log('ResetPasswordExpires: ', user[0].ResetPasswordExpires);
    const currentTime = Date.now() + 1;
    // console.log('currentTime: ', currentTime);

    if (user[0].expire < currentTime) {
      return res.status(400).json({
        success: false,
        message: "token expires",
      });
    }

    console.log("user: ", user);

    const hashedPassword = await createHashed(password);
    const response = await changePassword(user[0].user_id, hashedPassword);

    if(response.rowsAffected[0] < 1){
      return res.status(400).json({
        success: false,
        message: "Password not changed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "password reset successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { login, createPassHash, signup, getUsers, updateUserStatus, resetPassword };
