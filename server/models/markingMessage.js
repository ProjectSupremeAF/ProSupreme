import mongoose from 'mongoose';

const markingSchema = mongoose.Schema({
    moduleName: {type: String, required:true},
    moduleID: [String],
    lecinCharge: {type: String, required:true},
    attribute1: {type: String, required:true},
    attribute2: {type: String, required:true},
    attribute3: {type: String, required:true},
    selectedFile: {type: String, required:true},
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const MarkingMessage = mongoose.model('MarkingMessage', markingSchema);

export default MarkingMessage;