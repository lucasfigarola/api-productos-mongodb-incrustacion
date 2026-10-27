const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const router = require("./routes/productRoutes");

app.use(express.json());

app.use("/productos", router);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conexión establecida con MongoDB");
    console.log(`API corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error al conectarse con MongoDB", error.message);
  }
});
