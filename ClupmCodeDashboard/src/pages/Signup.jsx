import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import login1 from "../assets/login1.png";
import login2 from "../assets/login2.svg";

// API
import { signupUser } from "../api/authApi";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("yadavjayup72@gmail.com");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [apiError, setApiError] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    username: false,
    password: false,
  });

  const handleRegister = async () => {
    setApiError("");

    const newErrors = {
      email: !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      username: !username.trim(),
      password: !password.trim(),
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.username || newErrors.password) return;

    try {
      // Call API
      const res = await signupUser({
        email: email,
        username,
        password,
      });

      alert("Registration Successful!");

      // Redirect to login page
      navigate("/");
    } catch (err) {
      console.log(err);
      setApiError(err.response?.data?.message || "Registration failed");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    setErrors({ ...errors, email: !isValid });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim()) {
      setErrors({ ...errors, username: false });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim()) {
      setErrors({ ...errors, password: false });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Card */}
        <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#34406B] p-2 relative rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#556EE6] text-2xl font-semibold mb-2 ml-3">
                  Free Register
                </h1>
                <p className="text-[#556EE6] text-md ml-3">
                  Get your free Skate account now.
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src={login1}
                  alt="Welcome illustration"
                  className="w-48 h-auto object-contain translate-y-2"
                />
              </div>
            </div>

            <div className="absolute left-8 bottom-[-40px] bg-slate-700 w-18 h-18 rounded-full flex items-center justify-center shadow-lg">
              <img src={login2} alt="logo" className="w-12 h-12 p-1" />
            </div>
          </div>

          {/* Form */}
          <div className="p-8 pt-12">
            {apiError && (
              <p className="text-red-400 text-center mb-4">{apiError}</p>
            )}

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                className={`w-full px-4 py-2.5 bg-slate-700 border rounded-md text-white 
                placeholder-gray-400 focus:outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-600 focus:ring-indigo-500"
                }`}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
              )}
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  className={`w-full px-4 py-2.5 bg-slate-700 border rounded-md text-white 
                  placeholder-gray-400 focus:outline-none focus:ring-2
                  ${
                    errors.username
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-600 focus:ring-indigo-500"
                  }`}
                  placeholder="Enter username"
                />
                {errors.username && (
                  <AlertCircle
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
                  />
                )}
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your username
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                className={`w-full px-4 py-2.5 bg-slate-700 border rounded-md text-white 
                placeholder-gray-400 focus:outline-none focus:ring-2
                ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-600 focus:ring-indigo-500"
                }`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your password
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition duration-200 shadow-lg"
            >
              Register
            </button>

            {/* Terms */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                By registering you agree to the Skate{" "}
                <span className="text-indigo-400 hover:text-indigo-300">
                  Terms of Use
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <NavLink
              to="/"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Login
            </NavLink>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            © 2025 Skate. Crafted with ❤️ by Themesbrand
          </p>
        </div>
      </div>
    </div>
  );
}
