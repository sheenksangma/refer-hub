import Transaction from "../models/transaction.model.js";
import Earning from "../models/earning.model.js";
import User from "../models/user.model.js";

export const addTransaction = async (req, res) => {
  const { userId, amount } = req.body;

  if (amount < 1000) return res.status(400).json({ message: "Amount must exceed 1000" });

  try {
    const transaction = await Transaction.create({ userId, amount });

    const user = await User.findById(userId);
    const level1 = await User.findOne({ referralCode: user.referredBy });
    if (level1) {
      const earning1 = await Earning.create({
        userId: level1._id,
        sourceUserId: userId,
        amount: amount * 0.05,
        level: 1,
        transactionId: transaction._id,
      });

      global.io.emit(`earning:${level1._id}`, earning1);
    }

    // LEVEL 2
    if (level1 && level1.referredBy) {
      const level2 = await User.findOne({ referralCode: level1.referredBy });
      if (level2) {
        const earning2 = await Earning.create({
          userId: level2._id,
          sourceUserId: userId,
          amount: amount * 0.01,
          level: 2,
          transactionId: transaction._id,
        });

        global.io.emit(`earning:${level2._id}`, earning2);
      }
    }

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
