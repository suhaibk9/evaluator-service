import { z } from 'zod';

// export interface CreateSubmissionDto {
//   userId: string;
//   problemId: string;
//   code: string;
//   language: string;
// }
//Create Interface from Zod Schema
export type CreateSubmissionDto = z.infer<typeof createSubmissionZodSchema>;
export const createSubmissionZodSchema = z.object({
  userId: z.string(),
  problemId: z.string(),
  code: z.string(),
  language: z.string(),
});
