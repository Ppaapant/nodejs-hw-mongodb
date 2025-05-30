  // src/controllers/getContact.controller.js
  import createHttpError from 'http-errors';
  import { getContactById } from '../services/contacts.js';

  export const getContactController = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contact = await getContactById(contactId);

      if (!contact) {
        throw createHttpError(404, 'Contact not found');
      }

      res.status(200).json({
        status: 200,
        message: 'Contact retrieved successfully',
        data: contact,
      });
    } catch (error) {
      next(error);
    }
  };
