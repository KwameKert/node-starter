import express from "express";
import './db';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am using babel in NodeJS",
    status: "success",
  });
});

export default app;