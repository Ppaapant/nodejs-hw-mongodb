import app from './server.js';
import { connectMongo } from './db/connectMongo.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectMongo(); // підключення до Mongo
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
