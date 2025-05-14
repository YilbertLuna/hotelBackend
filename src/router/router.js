import { Router } from "express";
import { registerController } from "../controller/user/register.controller.js";
import { logoutController } from "../controller/user/logout.controller.js";
import { loginController } from "../controller/user/login.controller.js";

const router = Router();

router.post("/auth/register", registerController)
router.post("/auth/login", loginController)
router.post("/auth/logout", logoutController)

export default router;