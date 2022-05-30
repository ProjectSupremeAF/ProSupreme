import express from 'express';

import {getMarking, createMarking, updateMarking , deleteMarking} from '../controllers/marking.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//http://localhost:5000/marking
router.get('/', getMarking);
router.post('/', auth, createMarking);
router.patch('/:id', auth, updateMarking);
router.delete('/:id', auth, deleteMarking);

export default router;