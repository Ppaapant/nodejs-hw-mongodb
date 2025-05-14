import express from 'express';
import morgan from 'morgan';
import contactsRouter from './routes/contactRoutes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/contacts', contactsRouter);

export default app;
