const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/");

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Base de Datos conectada exitosamente a MongoDB");
});
