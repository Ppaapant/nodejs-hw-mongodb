import setupServer from './server.js';
import connectMongo from './db/initMongoConnection.js';

const startApp = async () => {
  await connectMongo();
  setupServer();
};

startApp();
