require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
            socketTimeoutMS: 45000,   
        });
        
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
