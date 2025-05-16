import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

export const connectMongo = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    
    console.log('Перевірка змінних оточення:');
    console.log('MONGODB_USER:', MONGODB_USER);
    console.log('MONGODB_PASSWORD:', MONGODB_PASSWORD);
    console.log('MONGODB_URL:', MONGODB_URL);
    console.log('MONGODB_DB:', MONGODB_DB);
    
    if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
      throw new Error('Відсутні необхідні змінні оточення для підключення до MongoDB');
    }

    // Видаляємо порт з URL, якщо він є
    const cleanUrl = MONGODB_URL.split(':')[0];
    const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${cleanUrl}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;
    
    console.log('URI для підключення:', uri.replace(/\/\/.*@/, '//<credentials>@'));
    console.log('Спроба підключення до MongoDB...');
    await mongoose.connect(uri);
    console.log('Підключення до бази даних успішне');
  } catch (error) {
    console.error('Помилка підключення до бази даних:', error.message);
    process.exit(1);
  }
};
