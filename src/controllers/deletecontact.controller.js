import createHttpError from 'http-errors';
import { deleteContact } from '../services/contacts.js';

export const deleteContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await deleteContact(contactId);

    if (!contact) {
      return next(createHttpError(404, 'Contact not found'));
    }

    res.status(204).send(); // 204 означає "успішно, без контенту"
  } catch (error) {
    next(error);
  }
};
