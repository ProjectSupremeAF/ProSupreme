import mongoose from "mongoose";

const subSchema = mongoose.Schema({
    title: String,
    subType: String,
    deadline: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const SubMessage = mongoose.model('SubMessage', subSchema);

export default SubMessage;