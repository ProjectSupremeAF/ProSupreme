import mongoose from "mongoose";

const User = mongoose.Schema({
    id: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required:true,
      unique:true
    },
    password: {
        type: String,
        required:true
      }
});

const Usermodel = mongoose.model("UserData", User);

export default Usermodel;