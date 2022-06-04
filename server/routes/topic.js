import express from "express";

import { create_res_topic, get_res_topics } from "../controllers/topicRegistration.js";


const router = express.Router();

// http://localhost:5000/res_topics

router.post("/create_res_topic", create_res_topic);
router.get("/", get_res_topics);

export default router;