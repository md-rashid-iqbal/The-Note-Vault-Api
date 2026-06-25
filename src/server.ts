import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
  res.json({ message: "Secure Note Vault API is running smoothly!" });
});

// Routing Setup
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// MongoDB connection mapping
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/noteVault';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Database connection stable.');
    app.listen(PORT, () => console.log(`Server blasting on port ${PORT}`));
  })
  .catch(err => console.error('Database connection failed:', err));
