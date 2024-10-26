import { env } from '../utils/env.js';
import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster1`,
    );
    console.log(`connecting to the database`);
  } catch (error) {
    console.log(`Error connecting to the database ${error.message}`);
    throw error;
  }
};
