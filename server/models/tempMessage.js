import mongoose from "mongoose";

const tempSchema = mongoose.Schema({
    title1: String,
    tags1: [String],
    selectedFile1: String,
    createdAt1: {
        type: Date,
        default: new Date()
    }
});

const TempMessage = mongoose.model('TempMessage', tempSchema);

export default TempMessage;