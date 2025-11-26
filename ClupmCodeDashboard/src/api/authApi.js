// src/api/authApi.js
import API from "./axiosInstance";

// Signup API
export const signupUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// Login API
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// Get logged-in user details (protected route)
export const getMyProfile = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};
