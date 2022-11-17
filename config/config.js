const mongoose = require("mongoose");
require("dotenv").config()

const dbConnection = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("base de datos conectada")
  } catch (error) {
    console.error(error);
    throw new Error("Not possible to connect to the database");
  }
};
module.exports = {
  dbConnection
};
