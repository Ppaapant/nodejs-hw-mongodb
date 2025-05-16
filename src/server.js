import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import contactsRouter from './routes/contactRoutes.js';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
app.use('/contacts', contactsRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Сторінку не знайдено' });
});

// Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Помилка сервера' } = err;
  res.status(status).json({ message });
});

export default app;
