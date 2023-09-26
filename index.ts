import express from "express";
import cors from 'cors';
import 'express-async-errors' ;
import {handleError} from "./utils/errors";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";
import './utils/db';
import {config} from "./config/config";

const app = express();

app.use(cors({
    origin: config.corsOrigin, //adres url na którym jest frontend
}));

app.use(express.json()); // Content-type: application/json


app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});
