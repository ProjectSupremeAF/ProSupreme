import RegisterGroup from "../models/studentGroup.js";

//get all student group
export const get_student_groups = async (req,res) => {
    const studentGroups = await RegisterGroup.find({})
    try{
        res.status(200).json({
            success:true,
            data : {
                studentGroups
              }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}


// Create student group 
export const create_std_group = async (req, res) => {
    const student_group = req.body;

    const studentGroup = new RegisterGroup(student_group)
  
    try{
        await studentGroup.save()
        res.status(201).json({
            status: 'Success',
            success:"Student group saved successfully! ",
            data : {
                studentGroup
            }
        })
    } catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
  };