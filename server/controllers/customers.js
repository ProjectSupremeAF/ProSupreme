import express from 'express';
import mongoose from 'mongoose';

import CustomerMessage from '../models/customerMessage.js';

const router = express.Router();

export const getCustomers = async (req, res) => {
    try {
        const customerMessage = await CustomerMessage.find();

        res.status(200).json(customerMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCustomer = async (req, res) =>{
    const customer = req.body;

    const newCustomer = new CustomerMessage(customer);

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateCustomers = async(req, res) =>{
    const { id:_id} = req.params;
    const customers = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No customer with that ID');

    const updateCustomers = await CustomerMessage.findByIdAndUpdate(_id, { ...customers, _id }, {new: true});

    res.json(updateCustomers);
}

export const deleteCustomers = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No customer with that ID');

    await CustomerMessage.findByIdAndRemove(id);

    

    res.json({ message: 'Post deleted successfully'});

}


export default router;