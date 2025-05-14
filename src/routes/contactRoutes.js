import express from 'express';

import { listContacts, getContact } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', listContacts);
router.get('/:contactId', getContact);

import {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);


export default router;
