import express from 'express';
import { listContacts, getContact } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', listContacts);
router.get('/:contactId', getContact);

export default router;
