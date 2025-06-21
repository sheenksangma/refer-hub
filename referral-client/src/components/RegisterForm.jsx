import { useState } from "react";
import axios from "../api/axiosInstance";

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { fullName, email, referralCode } = form;
      const res = await axios.post("/users/register", {
        fullName,
        email,
        referredBy: referralCode || null,
      });
      alert("User registered! Your referral code is: " + res.data.referralCode);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="referralCode"
        placeholder="Referral Code (optional)"
        value={form.referralCode}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}
