const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to DB");
  } catch (err) {
    console.error("Error in connecting to MongoDb:", err);
  }
}


module.exports = connectDB
