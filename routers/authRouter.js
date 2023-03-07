import { Router } from "express";
import * as controller from "../controllers/authController.js";

import { postSchema } from "./authRouter.schema.js";
import validate from "../middlewares/validate.js";

const router = Router();

router
  .post("/register", validate(postSchema), controller.register)
  .post("/login", controller.login)
  .get("/logout", controller.logout);

export default router;
