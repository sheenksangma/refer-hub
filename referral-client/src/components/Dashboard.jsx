import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { io } from "socket.io-client";

// Replace this with the actual userId you want to test
const testUserId = "68551e16b42c1667dbd57cd8";

const socket = io("http://localhost:5001");

export default function Dashboard() {
  const [earnings, setEarnings] = useState({ direct: 0, indirect: 0 });

  const fetchEarnings = async () => {
    try {
      const res = await axiosInstance.get(`/users/${testUserId}/earnings`);
      setEarnings(res.data);
    } catch (err) {
      console.error("Error fetching earnings:", err.message);
    }
  };

  useEffect(() => {
    fetchEarnings();

    socket.on(`earning:${testUserId}`, () => {
      fetchEarnings(); // refresh earnings on live event
    });

    return () => {
      socket.off(`earning:${testUserId}`);
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={fetchEarnings}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load Earnings
      </button>
      <div className="mt-4">
        <p className="text-lg">Direct Earnings: ₹{earnings.direct}</p>
        <p className="text-lg">Indirect Earnings: ₹{earnings.indirect}</p>
      </div>
    </div>
  );
}
