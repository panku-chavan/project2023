const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log(
      "Database Connection Successfull with host :",
      connect.connection.host
    );
  } catch (error) {
    console.log("Database Connection error :", error);
  }
};

module.exports = connectDB;
