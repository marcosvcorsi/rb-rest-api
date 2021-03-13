import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import routes from './routes/index.js';

import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandler);

export default app;