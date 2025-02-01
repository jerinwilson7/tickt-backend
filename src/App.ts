import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import morgan from "morgan";
import { connectDatabase } from "./db/connection/connection";
import router from "./routes";

const port = process.env.PORT;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", router());

app.use(() => {
  throw createHttpError(404, "Route Not Found");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.message, err.statusCode);
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "An unknown Error" });
};

app.use(errorHandler);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
