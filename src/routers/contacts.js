import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { getContactController } from '../controllers/contact.controller.js';
import { createContactController } from '../controllers/newcontact.controller.js';
import { updateContactController } from '../controllers/updatecontact.controller.js';
import { deleteContactController } from '../controllers/deletecontact.controller.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactController));
router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactController));
router.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(updateContactController));
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
