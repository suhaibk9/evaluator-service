import { Request, Response } from 'express';
export const pingCheck = (req: Request, res: Response) => {
  console.log(req.url);
  return res.status(200).json({ message: 'pong' });
};
