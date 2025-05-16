import { Contact } from '../models/contact.js';

export const listContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Помилка при отриманні контактів' });
  }
};

export const getContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);
    
    if (!contact) {
      return res.status(404).json({ message: 'Контакт не знайдено' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Помилка при отриманні контакту' });
  }
};

export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: 'Помилка при створенні контакту' });
  }
}; 