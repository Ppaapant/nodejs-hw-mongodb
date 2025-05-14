import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectMongo = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log('Trying to connect with URI:', uri.replace(/:\/\/.*@/, '://<user>:***@'));
    await mongoose.connect(uri);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};
