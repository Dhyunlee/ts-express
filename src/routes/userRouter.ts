import { Router } from "express";
import getUser from "../apis/user.js";

const router: Router = Router();

router.get("/state", getUser);

export default router;
