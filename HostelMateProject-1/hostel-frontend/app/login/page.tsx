"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaUserShield, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in as:", role, formData);

    // Simulating authentication check
    const isAuthenticated = formData.email && formData.password;
    if (!isAuthenticated) {
      alert("No account found! Redirecting to Register...");
      router.push("/register");
      return;
    }

    if (role === "user") {
      router.push("/dashboard");
    } else {
      router.push("/warden");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6">
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-900 mb-6">🔑 Login</h1>
        <p className="text-green-800 mb-4">Access your account</p>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              role === "user"
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setRole("user")}
          >
            <FaUser size={18} /> User
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              role === "warden"
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setRole("warden")}
          >
            <FaUserShield size={18} /> Warden
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white px-3 py-2 rounded-md shadow-md">
            <FaEnvelope className="text-green-700" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent focus:outline-none px-2"
            />
          </div>

          <div className="flex items-center bg-white px-3 py-2 rounded-md shadow-md">
            <FaLock className="text-green-700" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full bg-transparent focus:outline-none px-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-2 rounded-md shadow-md transition"
          >
            Login as {role === "user" ? "User" : "Warden"}
          </button>
        </form>

        <p className="text-green-900 mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-900 font-semibold hover:underline"
          >
            Register Here
          </a>
        </p>
      </div>
    </div>
  );
}
