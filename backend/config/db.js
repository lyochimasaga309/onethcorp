require('dotenv').config(); // ✅ Load .env variables
const mongoose = require('mongoose');


const connectDB = async () => {
  console.log("ENV:", process.env.MONGO_URI);
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message); // show actual error
    process.exit(1);

    console.log("Mongo URI is:", process.env.MONGO_URI);

  }
};

module.exports = connectDB;
