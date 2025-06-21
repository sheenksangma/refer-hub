import User from "../models/user.model.js";
import crypto from "crypto";
import Earning from "../models/earning.model.js"; // <-- ✅ Add this for earnings

// REGISTER USER
export const registerUser = async (req, res) => {
  const { fullName, email, referredBy } = req.body;

  try {
    const referralCode = crypto.randomBytes(3).toString("hex");

    const user = new User({
      fullName,
      email,
      referralCode,
      referredBy: referredBy || null,
    });

    await user.save();

    // Add to parent's referral list
    if (referredBy) {
      const parent = await User.findOne({ referralCode: referredBy });
      if (parent && parent.referrals.length < 8) {
        parent.referrals.push(user._id);
        await parent.save();
      }
    }

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET USER EARNINGS (NEW)
export const getUserEarnings = async (req, res) => {
  const { userId } = req.params;

  try {
    const earnings = await Earning.find({ userId });

    const direct = earnings
      .filter(e => e.level === 1)
      .reduce((sum, e) => sum + e.amount, 0);

    const indirect = earnings
      .filter(e => e.level === 2)
      .reduce((sum, e) => sum + e.amount, 0);

    res.json({ direct, indirect });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
