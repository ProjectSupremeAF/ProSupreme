import mongoose from 'mongoose';

const markingSchema = mongoose.Schema({
    moduleName: String,
    moduleID: [String],
    lecinCharge: String,
    attribute1: String,
    attribute2: String,
    attribute3: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const MarkingMessage = mongoose.model('MarkingMessage', markingSchema);

export default MarkingMessage;