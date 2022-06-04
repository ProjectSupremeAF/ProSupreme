import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";


import studentRoutes from "./routes/student.js";
import topicRoutes from "./routes/topic.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/res_topics", topicRoutes);
app.use("/students", studentRoutes);
app.use("/api", userRoutes);

//const CONNECTION_URL = 'mongodb+srv://vibhujay99:codelyoko99@cluster0.zibrl.mongodb.net/Cluster0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
