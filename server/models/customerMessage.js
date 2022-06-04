import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    cusName: String,
    cusRole: String,
    cusEmail: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CustomerMessage = mongoose.model('CustomerMessage', customerSchema);

export default CustomerMessage;