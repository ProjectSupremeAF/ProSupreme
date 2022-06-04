import express from 'express';

import {  getCustomers, createCustomer, updateCustomers, deleteCustomers} from '../controllers/customers.js';


const router = express.Router();
import auth from '../middleware/auth.js';


//http://localhost:5000/customers
router.get('/', getCustomers);
router.post('/', auth, createCustomer);
router.patch('/:id', auth, updateCustomers);
router.delete('/:id', auth, deleteCustomers);

export default router;