import React, { useState } from "react";
import API from "../api";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", { name, email, password });
      alert("User registered! Please login.");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="border p-2 w-full mb-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegister}>Register</button>
    </div>
  );
}
