import { Response, Request,NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  res.status(500).json({ error: err.message });
}
