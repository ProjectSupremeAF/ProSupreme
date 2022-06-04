import express from "express";

import { create_std_group, get_student_groups } from "../controllers/studentGroup.js";

const router = express.Router();

// http://localhost:5000/students

 router.get("/", get_student_groups);
router.post("/create_std_groups", create_std_group);

export default router;
