import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();

let mongoDB = process.env.MONGODB_URI || process.env.DB_URL;
mongoose.connect(`${mongoDB}`);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

let port = 6000;

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});
