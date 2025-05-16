import express from 'express';
import { listContacts, getContact, createContact } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', listContacts);
router.get('/:contactId', getContact);
router.post('/', createContact);

export default router;
