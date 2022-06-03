import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/marking.js';
import userRoutes from './routes/users.js';
import subRoutes from './routes/subs.js';
import tempRoutes from './routes/temps.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/marking', postRoutes);
app.use('/user', userRoutes);
app.use('/subs', subRoutes);
app.use('/temps', tempRoutes);

//const CONNECTION_URL = 'mongodb+srv://vibhujay99:codelyoko99@cluster0.zibrl.mongodb.net/Cluster0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));


