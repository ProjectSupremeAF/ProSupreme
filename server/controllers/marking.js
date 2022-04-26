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