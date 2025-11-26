import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import login1 from "../assets/login1.png";
import login2 from "../assets/login2.svg";

// Import login API
import { loginUser } from "../api/authApi";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@themesbrand.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async () => {
    setApiError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    // Password validation
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    try {
      // 🔥 Call login API
      const res = await loginUser({ gmail: email, password });

      // Save token
      localStorage.setItem("token", res.token);

      alert("Login Successful!");

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);

      // Show backend message
      setApiError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#34406B] p-2 relative rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#556EE6] text-2xl font-semibold mb-2 ml-3">
                  Welcome Back !
                </h1>
                <p className="text-[#556EE6] text-md ml-3">
                  Sign in to continue to Skote.
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  setEmailError(!emailRegex.test(e.target.value));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                className={`w-full px-4 py-2.5 bg-slate-700 border rounded-md text-white ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-600 focus:ring-indigo-500"
                }`}
                placeholder="Enter email"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                  }}
                  className={`w-full px-4 py-2.5 bg-slate-700 border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 pr-12 ${
                    passwordError
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-600 focus:ring-indigo-500"
                  }`}
                  placeholder="Enter Password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 bg-slate-600 hover:bg-slate-500 text-gray-300 rounded-r-md transition duration-200 flex items-center justify-center"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  Please Enter Your Password
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-indigo-600 focus:ring-indigo-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition duration-200 shadow-lg"
            >
              Log In
            </button>

            {/* Social Login (unchanged) */}
            {/* ... your full UI continues here ... */}
          </div>
        </div>

        {/* Signup footer (unchanged) */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Signup now
            </a>
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            © 2025 Skote. Crafted with ❤️ by Themesbrand
          </p>
        </div>
      </div>
    </div>
  );
}
