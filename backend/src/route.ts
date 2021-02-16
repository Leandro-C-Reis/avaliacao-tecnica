import express from 'express';
import TimerController from './controller/TimerController';

const route = express();

route.post('/api/worked_hours', new TimerController().Parse);

export default route;