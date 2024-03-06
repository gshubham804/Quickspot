import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/user.models.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET);

// Register 

export const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if a verified user with the given email exists
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Email is already in use, please login.",
      });
    } else {
      // If user record is not available in the database, create a new user
      const newUser = await User.create({
        fullName,
        email,
        password, // Make sure to hash the password before saving it to the database
      });

      return res.status(201).json({
        status: "success",
        message: "User registered successfully.",
        data: newUser,
      });
    }
  } catch (error) {
    // Handle any errors that occurred during the registration process
    console.error("Error during user registration:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};


//   Login

  export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "error",
        message: "Both email and password are required",
      });
      return;
    }
  
    const userDoc = await User.findOne({ email: email }).select("+password");
  
    if (!userDoc || !userDoc.password) {
      res.status(400).json({
        status: "error",
        message: "Incorrect password",
      });
      return;
    }
  
    if (
      !userDoc ||
      !(await userDoc.correctPassword(password, userDoc.password))
    ) {
      res.status(400).json({
        status: "error",
        message: "Email or password is incorrect",
      });
      return;
    }
  
    const token = signToken(userDoc._id);
    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user_id: userDoc._id,
    });
  };