require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("Order Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
