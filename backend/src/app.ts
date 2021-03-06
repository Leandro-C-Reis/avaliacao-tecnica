import express from 'express';
import route from './route';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

export default app;