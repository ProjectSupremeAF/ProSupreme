import express from 'express';

import {getMarking, createMarking, updateMarking , deleteMarking} from '../controllers/marking.js';


const router = express.Router();

//http://localhost:5000/marking
router.get('/', getMarking);
router.post('/', createMarking);
router.patch('/:id', updateMarking);
router.delete('/:id', deleteMarking);

export default router;