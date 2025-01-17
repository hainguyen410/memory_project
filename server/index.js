import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://iminlove:iminlove@cluster0.fk85x0i.mongodb.net/';
const PORT = process.env.PORT || 5002;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

