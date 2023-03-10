import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import recipeRouter from "./routers/recipeRouter.js";
import userRouter from "./routers/userRouter.js";
import authRouter from "./routers/authRouter.js";
// import courseRouter from "./routers/courseRouter.js";
import logMiddleware from "./middlewares/log.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
// import checkToken from "./middlewares/checkToken.js";

import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(logMiddleware);

app.use("/api/recipes", recipeRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/courses", courseRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(port, () => console.log("listening on port: " + port));
