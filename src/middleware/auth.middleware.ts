import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers["x-access-token"] as string;

  if (!token) {
    res
      .status(401)
      .json({ message: "No token provided in x-access-token header" });
    return;
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    req.user = decoded; // Attach the decoded token to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
};
