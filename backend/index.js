import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://clumpcode.netlify.app"],
    credentials: true,
  })
);

// Allow preflight requests
app.options("*", cors());


app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
