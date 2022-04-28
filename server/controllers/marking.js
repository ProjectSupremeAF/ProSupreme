import mongoose from 'mongoose';
import MarkingMessage from '../models/markingMessage.js';


export const getMarking = async (req, res) =>{
    try{
        const markingMessages = await MarkingMessage.find();

        res.status(200).json(markingMessages);
    }catch(error){
        res.status(404).json({ message: error.message});
    }
}

export const createMarking = async (req, res) =>{
    const marking = req.body;

    const newMarking = new MarkingMessage(marking);

    try{
        await newMarking.save();

        res.status(201).json(newMarking);
    }catch(error){
        res.status(409).json({ message: error.message});
    }

}

export const updateMarking = async(req, res) =>{
    const { id:_id} = req.params;
    const marking = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No marking with that ID');

    const updatedMarking = await MarkingMessage.findByIdAndUpdate(_id, { ...marking, _id }, {new: true});

    res.json(updatedMarking);
}

export const deleteMarking = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No marking with that ID');

    await MarkingMessage.findByIdAndRemove(id);

    

    res.json({ message: 'Post deleted successfully'});

}