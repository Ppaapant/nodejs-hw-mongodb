import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactsRouter from './routes/contactRoutes.js';

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res) => {
  res.status(500).json({ message: err.message });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connection successful'))
  .catch((error) => {
    console.error('Database connection failed');
    process.exit(1);
  });

export default app;
