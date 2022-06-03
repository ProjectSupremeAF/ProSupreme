import express from 'express';
import mongoose from 'mongoose';

import TempMessage from '../models/tempMessage.js';

const router = express.Router();

export const getTemps = async (req, res) => {
    try {
        const tempMessage = await TempMessage.find();

        res.status(200).json(tempMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTemp = async (req, res) =>{
    const temp = req.body;

    const newTemp = new TempMessage(temp);

    try {
        await newTemp.save();

        res.status(201).json(newTemp);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateTemps = async(req, res) =>{
    const { id:_id} = req.params;
    const temps = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No template with that ID');

    const updateTemps = await TempMessage.findByIdAndUpdate(_id, { ...temps, _id }, {new: true});

    res.json(updateTemps);
}

export const deleteTemps = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No template with that ID');

    await TempMessage.findByIdAndRemove(id);

    

    res.json({ message: 'Post deleted successfully'});

}


export default router;