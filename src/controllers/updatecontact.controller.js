import createHttpError from 'http-errors';
import { updateContactDetails } from '../services/contacts.js';

export const updateContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await updateContactDetails(contactId, req.body);

    if (!result) {
      return next(createHttpError(404, 'Contact not found'));
    }

    res.json({
      status: 200,
      message: 'Successfully updated a contact!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
