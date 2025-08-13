const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/product", productRoutes);

mongoose.connect("mongodb://localhost:27017/product-service");
app.listen(4002, () => console.log("✅ Product Service on port 4002"));
