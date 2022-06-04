import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
    res_category: {
      type: String,
      required:true
    },
    res_topic: {
      type: String,
      required:true
    }
});

const researchTopic = mongoose.model("research_topic", topicSchema);

export default researchTopic;