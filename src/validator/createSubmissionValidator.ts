import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';
export const validateCreateSubmissionDto =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ ...req.body });
      next();
    } catch (error) {
      return res.status(400).json({ message: 'Bad Request' });
    }
  };
