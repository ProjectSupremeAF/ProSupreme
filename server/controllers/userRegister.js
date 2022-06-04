import newUser from "../models/user.js";

// Create user
export const CreateUser = async (req, res) => {
    const reg_user = req.body;

    const newuser = new newUser(reg_user)
  
    try{
        await newuser.save()
        res.status(201).json({
            status: 'Success',
            success:"New Student saved successfully! ",
            data : {
                newuser
            }
        })
    } catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
  };

  export const loginUser = async (req, res) => {
  
    
    const user = await newUser.findOne({email: req.body.email,
         password: req.body.password})

        if (user) {
            const token = jwt.sign({
                name: user.name,
                email: user.email
            },
            'secret123'
            )

            return res.json({status: 'Success',user:true })
        }else{
            return res.json({status: 'Failed', user:false})
        }

 
  };