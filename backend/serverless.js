import app from './server.js';
import { connectDB } from './config/db.js';

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (err) {
      return res.status(500).json({ message: 'Database connection failed' });
    }
  }

  app(req, res);
}