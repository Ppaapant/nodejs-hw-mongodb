import { connectMongo } from './connectMongo.js';
import Contact from '../models/contact.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importContacts = async () => {
  try {
    await connectMongo();
    
    // Read contacts from JSON file
    const contactsPath = path.join(__dirname, '../../contacts.json');
    const contactsData = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(contactsData);
    
    // Insert contacts into MongoDB
    const result = await Contact.insertMany(contacts);
    console.log(`Successfully imported ${result.length} contacts`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error importing contacts:', error);
    process.exit(1);
  }
};

importContacts(); 