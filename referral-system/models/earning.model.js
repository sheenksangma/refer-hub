import mongoose from "mongoose";

const earningSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sourceUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  level: Number,
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Earning", earningSchema);
