import "reflect-metadata";
import mongoose from "mongoose";
import express from "express";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import config from "config";

const app = express();
const mongoURI: string = process.env.MONGO_URI || config.get("mongoDBURI");

// DBname : testRelia

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));


app.use(
  cors({
    exposedHeaders: ["token"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(helmet());

app.use(bodyParser.json({ limit: "50mb" }));

//Set all routes from routes folder

app.use("/", routes);

const server = app.listen(process.env.PORT || 3009, () => {
  console.log(`Server started on port ${process.env.PORT || 3009}!`);
});

export default server;
