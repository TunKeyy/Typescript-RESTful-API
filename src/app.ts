import express, { application } from "express";
import route from './routes';
import bodyParser from 'body-parser'
export const app = express();
app.use(bodyParser.json())
route(app);