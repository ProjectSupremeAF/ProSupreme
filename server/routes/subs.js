import express from 'express';

import { getSubs , createSub, updateSubs, deleteSubs} from '../controllers/subs.js';
const router = express.Router();
import auth from '../middleware/auth.js';




//http://localhost:5000/subs
router.get('/', getSubs);
router.post('/', auth, createSub);
router.patch('/:id', auth, updateSubs);
router.delete('/:id', auth, deleteSubs);

export default router;