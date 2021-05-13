import express from "express";
import './db';
import bodyParser from "body-parser";
import setup from './middleware/setup';
import { errors, status404 } from './middleware/catch';

import apiRouter  from './modules/api'

const app = express();

setup(app)

app.use('/api', apiRouter)
status404(app);
errors(app);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am using babel in NodeJS",
    status: "success",
  });
});

export default app;