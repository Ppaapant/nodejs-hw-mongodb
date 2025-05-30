// src/services/contacts.js
import { ContactsCollection } from '../models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

// Отримання всіх контактів з пагінацією
export const getAllContacts = async ({ page, perPage, sortBy = 'name', sortOrder = 'asc' }) => {
  const skip = (page - 1) * perPage;
  const sortDirection = sortOrder === 'desc' ? -1 : 1;

  const totalItems = await ContactsCollection.countDocuments();
  const contacts = await ContactsCollection.find()
    .sort({ [sortBy]: sortDirection })
    .skip(skip)
    .limit(perPage);

  const pagination = calculatePaginationData(totalItems, perPage, page);

  return {
    data: contacts,
    ...pagination,
  };
};

// Отримання одного контакту за ID
export const getContactById = async (id) => {
  return await ContactsCollection.findById(id);
};

// Створення нового контакту
export const createContact = async (data) => {
  return await ContactsCollection.create(data);
};

// Оновлення даних контакту
export const updateContactDetails = async (id, data) => {
  return await ContactsCollection.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// Видалення контакту
export const deleteContact = async (id) => {
  return await ContactsCollection.findByIdAndDelete(id);
};
