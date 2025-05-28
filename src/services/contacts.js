import { ContactsCollection } from '../models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

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
