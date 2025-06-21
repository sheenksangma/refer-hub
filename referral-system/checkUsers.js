import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/referral-system';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const users = await User.find();
    console.log("Users in DB:");
    users.forEach(user => console.log(`Name: ${user.fullName}, ID: ${user._id}`));

    mongoose.disconnect();
  })
  .catch(err => {
    console.error("DB Error:", err);
  });
