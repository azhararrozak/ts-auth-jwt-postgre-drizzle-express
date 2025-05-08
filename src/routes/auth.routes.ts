import { Router } from "express";
import { signUp } from "../controllers/auth.controller";
import { signIn } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/signup", signUp);
router.post("/signin", signIn);

// Protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Protected route accessed successfully" });
});

export default router;