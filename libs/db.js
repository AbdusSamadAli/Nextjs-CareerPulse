const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const uri = process.env.MONGO_URI; 
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

module.exports = connectdb;
