/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';
export const validate =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

    (schema: ZodSchema<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({ ...req.body });
        next();
      } catch (error) {
        return res
          .status(400)
          .json({
            success: false,
            message: 'Invalid request params received',
            data: {},
            error: error,
          });
      }
    };
