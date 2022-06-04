import express from 'express';

import { getTemps , createTemp, updateTemps, deleteTemps} from '../controllers/temps.js';
const router = express.Router();
import auth from '../middleware/auth.js';




//http://localhost:5000/temps
router.get('/', getTemps);
router.post('/', auth, createTemp);
router.patch('/:id', auth, updateTemps);
router.delete('/:id', auth, deleteTemps);

export default router;