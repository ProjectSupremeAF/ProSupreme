import mongoose from "mongoose";

const studentGroupSchema = mongoose.Schema({
    member_01_name: {
      type: String,
      required:true
    },
    member_01_id: {
      type: String,
      required:true
    },
    member_02_name: {
      type: String,
      required:true
    },
    member_02_id: {
      type: String,
      required:true
    },
    member_03_name: {
      type: String,
      required:true
    },
    member_03_id: {
      type: String,
      required:true
    },
    member_04_name: {
      type: String,
      required:true
    },
    member_04_id: {
      type: String,
      required:true
    },
});

const StudentGroup = mongoose.model("student_Group", studentGroupSchema);

export default StudentGroup;
