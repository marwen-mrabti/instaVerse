import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import storiesRouter from './routes/stories.routes.js';
//create express instance
const app = express();
//middleware
dotenv.config();
//data parser
app.use(bodyParser.json({ limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }));

// Cross-Origin Resource Sharing==>Enable All CORS Requests
app.use(cors());

//routes
app.use('/api/stories', storiesRouter);

//connect to database && start server
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

const ConnectDB = async () => {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error('connection to db failed', error.message);
  }
};

ConnectDB();
mongoose.connection.on('open', () => console.log('db connected'));
mongoose.connection.on('error', (err) => console.log(err.message));
