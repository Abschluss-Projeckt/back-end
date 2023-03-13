import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import recipeRouter from "./routers/recipeRouter.js";
import userRouter from "./routers/userRouter.js";
import authRouter from "./routers/authRouter.js";
// import courseRouter from "./routers/courseRouter.js";
import logMiddleware from "./middlewares/log.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
// import checkToken from "./middlewares/checkToken.js";

import { dirname } from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";
import "./lib/auth_google.js";

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `${process.env.MONGODB_URI}/${process.env.DATABASE}`,
    }),
    // cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

app.use(express.json());

app.use(cookieParser());

app.use(logMiddleware);

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.get("/login", (req, res) => res.sendFile(__dirname + "/views/login.html"));
app.get("/register", (req, res) =>
  res.sendFile(__dirname + "/views/register.html")
);

app.use("/api/recipes", recipeRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/courses", courseRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(port, () => console.log("listening on port: " + port));
