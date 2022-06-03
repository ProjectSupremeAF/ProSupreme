import express from 'express';
import mongoose from 'mongoose';

import PanelMessage from '../models/panelMessage.js';

const router = express.Router();

export const getPanels = async (req, res) => {
    try {
        const panelMessage = await PanelMessage.find();

        res.status(200).json(panelMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPanel = async (req, res) =>{
    const panel = req.body;

    const newPanel = new PanelMessage(panel);

    try {
        await newPanel.save();

        res.status(201).json(newPanel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePanels = async(req, res) =>{
    const { id:_id} = req.params;
    const panels = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No group with that ID');

    const updatePanels = await PanelMessage.findByIdAndUpdate(_id, { ...panels, _id }, {new: true});

    res.json(updatePanels);
}

export const deletePanels = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No group with that ID');

    await PanelMessage.findByIdAndRemove(id);

    

    res.json({ message: 'Post deleted successfully'});

}


export default router;