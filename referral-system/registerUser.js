import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import crypto from "crypto";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/referral-system";

mongoose.connect(MONGO_URI)
  .then(async () => {
    const referralCode = crypto.randomBytes(3).toString("hex");
    const user = new User({
      fullName: "Test User",
      email: "test@example.com",
      referralCode,
    });
    await user.save();
    console.log("User registered successfully:");
    console.log(`Full Name: ${user.fullName}`);
    console.log(`Email: ${user.email}`);
    console.log(`Referral Code: ${user.referralCode}`);
    console.log(`_id: ${user._id}`);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Registration error:", err);
  });
