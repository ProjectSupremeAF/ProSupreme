import express from 'express';

import { getPanels, createPanel, updatePanels, deletePanels} from '../controllers/panels.js';

const router = express.Router();
import auth from '../middleware/auth.js';

//http://localhost:5000/panels
router.get('/', getPanels);
router.post('/', auth, createPanel);
router.patch('/:id', auth, updatePanels);
router.delete('/:id', auth, deletePanels);

export default router;