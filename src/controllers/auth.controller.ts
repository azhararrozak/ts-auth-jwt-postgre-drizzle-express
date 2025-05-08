import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { db } from "../config/db";
import { users } from "../models/user.model";
import { eq } from "drizzle-orm";
import { signToken } from "../utils/jwt";

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await db
    .insert(users)
    .values({ name: "Default Name", email, password: hashed });
  res.status(201).json({ message: "User created" });
};

export const signIn = async (req: Request , res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  const token = signToken({ id: user.id, email: user.email });
  res.status(200).json({ token });
}
