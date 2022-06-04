import express from 'express';

import {getMarking, createMarking, updateMarking , deleteMarking, getMarksBySearch} from '../controllers/marking.js';
const router = express.Router();
import auth from '../middleware/auth.js';



//http://localhost:5000/marking
router.get('/search', getMarksBySearch );
router.get('/', getMarking);

router.post('/', auth, createMarking);
router.patch('/:id', auth, updateMarking);
router.delete('/:id', auth, deleteMarking);

export default router;