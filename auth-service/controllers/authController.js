const jwt = require("jsonwebtoken");
const User = require("../models/User");
const SECRET = "auth_secret_key";

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const existing = await User.findOne({ username });
  if (existing) return res.status(409).send("User Exists");
  await User.create({ username, password });
  res.status(201).send("User Created");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const existing = await User.findOne({ username, password });
  if (!existing) return res.status(401).send("Invalid credentials");
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};

exports.verify = async (req, res) => {
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) return res.status(401).send("Token Missing");

  try {
    const token = tokenHeader.split(" ")[1]; // Gets the actual JWT
    const decoded = jwt.verify(token, SECRET);
    res.json({ user: decoded });
  } catch (err) {
    console.log("JWT Error:", err.message); // ✅ Add this
    res.status(403).send("Invalid Token");
  }
};
