// src/controllers/getContacts.controller.js

import { getAllContacts } from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getContactsController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy = 'name', sortOrder = 'asc' } = req.query;

    const contacts = await getAllContacts({ page, perPage, sortBy, sortOrder });

    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
