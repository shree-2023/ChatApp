
import { NextFunction, Request,Response } from "express";
import { CLIENT_AUTH_URL, JWT_SECRET_KEY } from "../constants.js";
import jwt from "jsonwebtoken";
export default async function authMiddleware(
  req: any,
  res: Response,
  next: NextFunction
) {
  const token = req?.cookies?.token ?? null;
  let verifiedToken;
  try {
    if (token) {
      verifiedToken = await jwt.verify(token, JWT_SECRET_KEY);

      if (!verifiedToken) {
        res.json({ message: "No token/token expired" })
        .redirect(CLIENT_AUTH_URL as string);
      }
     req.user=verifiedToken;
      next();
    } else {
      res.json({ message: "No token/token expired" })
      .redirect(CLIENT_AUTH_URL as string);
    }
  } catch (error) {
    res.json({ message: "No token/token expired" });
    next(error);
  }
}
