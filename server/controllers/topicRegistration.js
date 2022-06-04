import RegisterTopic from "../models/topicRegistration.js";

// Create research topic
export const create_res_topic = async (req, res) => {
    const res_topic = req.body;

    const registerTopic = new RegisterTopic(res_topic)
  
    try{
        await registerTopic.save()
        res.status(201).json({
            status: 'Success',
            success:"Research topic saved successfully! ",
            data : {
                registerTopic
            }
        })
    } catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
  };


  //get all research topics
export const get_res_topics = async (req,res) => {
    const registerTopics = await RegisterTopic.find({})
    try{
        res.status(200).json({
            success:true,
            data : {
                registerTopics
              }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}