import { useState } from "react";
import axios from "../api/axiosInstance";

const testUserId = "68551e16b42c1667dbd57cd8"; // Replace with dynamic user ID later if needed

export default function PurchaseForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/transactions", {
        userId: testUserId,
        amount: Number(amount),
      });
      alert("Purchase successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow mt-6">
      <h2 className="text-xl font-bold">Make Purchase</h2>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
