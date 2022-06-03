import express from 'express';
import mongoose from 'mongoose';

import SubMessage from '../models/subMessage.js';

const router = express.Router();

;export const getSubs = async (req, res) => {
    try {
        const subMessage = await SubMessage.find();

        res.status(200).json(subMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createSub = async (req, res) =>{
    const sub = req.body;

    const newSub = new SubMessage(sub);

    try {
        await newSub.save();

        res.status(201).json(newSub);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateSubs = async(req, res) =>{
    const { id:_id} = req.params;
    const subs = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No submission type with that ID');

    const updateSubs = await SubMessage.findByIdAndUpdate(_id, { ...subs, _id }, {new: true});

    res.json(updateSubs);
}

export const deleteSubs = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No submission type with that ID');

    await SubMessage.findByIdAndRemove(id);

    

    res.json({ message: 'Post deleted successfully'});

}


export default router