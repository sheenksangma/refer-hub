import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  referralCode: {
    type: String,
    required: true,
    unique: true,
  },
  referredBy: {
    type: String,
    default: null,
  },
  directReferrals: {
    type: [String],
    default: [],
    validate: [val => val.length <= 8, '{PATH} exceeds the limit of 8'],
  },
  level: {
    type: Number,
    default: 1,
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
