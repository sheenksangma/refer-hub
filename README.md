# Refer-Hub 🎯

**Refer-Hub** is a full-stack Multi-Level Referral and Earning System built with **MERN Stack (MongoDB, Express, React, Node.js)** and **Socket.IO** for real-time updates. Users can register with a referral code, make purchases, and earn commissions based on referral levels.

---

## 🚀 Features

- 🔗 Register with or without a referral code  
- 🧬 Multi-level referral tracking (up to 2 levels)
- 💸 Earn 5% from direct referrals (Level 1)  
- 💰 Earn 1% from indirect referrals (Level 2)  
- 📊 Real-time earnings update using Socket.IO
- 🧾 Dashboard showing earnings breakdown
- ✍️ Validations and duplicate handling
- 🌐 RESTful API integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- Dotenv

---

## 🧪 How It Works

1. **Register** a user (optionally using a referral code).
2. **Make a purchase** of ₹1000 or more.
3. If referred, their referrer earns:
   - 5% (Level 1)
   - 1% (Level 2 – the referrer's referrer)
4. View **live earnings** on the dashboard.

---

### 📸 Sample Screenshots

**🔐 Registration Page**
<img width="1074" alt="Screenshot 2025-06-20 at 2 27 31 PM" src="https://github.com/user-attachments/assets/139fb2a2-fdf0-4580-a46a-42a2ee4ac6d6" />


**💸 Purchase & Earnings**
<img width="1074" alt="Screenshot 2025-06-20 at 2 00 56 PM" src="https://github.com/user-attachments/assets/77ff2316-a2f9-49af-ac3e-e20879825edb" />

---

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/sheenksangma/refer-hub.git


2. Install dependencies:
   Backend: cd referral-system && npm install
   Frontend: cd referral-client && npm install
   

4. Create a .env file in the backend:
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/referralSystem


5. Start the servers:
  # Backend
  cd referral-system
  npm run dev

  # Frontend (in another terminal)
  cd referral-client
  npm run dev


6. Access frontend at http://localhost:5173

---

🙋‍♂️ Author

Sheen K Sangma
❤

