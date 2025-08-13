const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

app.locals.pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "user_service",
  password: "newpassword",
  port: 5432,
});

app.listen(4001, () => console.log("✅ User Service on port 4001"));
