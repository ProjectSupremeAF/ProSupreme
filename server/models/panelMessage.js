import mongoose from "mongoose";

const panelSchema = mongoose.Schema({
    groupID: String,
    panelID: String,
    moduleID: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PanelMessage = mongoose.model('PanelMessage', panelSchema);

export default PanelMessage;