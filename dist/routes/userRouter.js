import { Router } from "express";
import getUser from "../apis/user.js";
const router = Router();
router.get("/state", getUser);
export default router;
//# sourceMappingURL=userRouter.js.map