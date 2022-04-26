import express from 'express';

import {getMarking, createMarking} from '../controllers/marking.js';


const router = express.Router();

//http://localhost:5000/marking
router.get('/', getMarking);
router.post('/', createMarking);


export default router;