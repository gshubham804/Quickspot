import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Hooks

userSchema.pre("save", async function (next) {
    // only run this function if password is updated or modified
    if (!this.isModified("password") || !this.password) return next();
  
    // encrypt password >> hash the password with the cost of 12 [8,16]
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

  userSchema.methods.correctPassword = async function (
    candidatePassword, // 1234
    userPassword // first decrypt the password then compare with entered password
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

const User = new mongoose.model("User", userSchema);
export default User;
