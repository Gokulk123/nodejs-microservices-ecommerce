const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

mongoose.connect(
  "mongodb+srv://gokulkrishnanml:gokulkrishnanml@auth-service.tgsur80.mongodb.net/?retryWrites=true&w=majority&appName=auth-service"
);
app.listen(4000, () => console.log("✅ Auth Service on port 4000"));
