import express from "express";

import { CreateUser,loginUser } from "../controllers/userRegister.js";

const router = express.Router();

// http://localhost:5000/api/

router.post("/register", CreateUser);
router.post("/login", loginUser);


export default router;