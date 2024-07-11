import express from 'express';
import { addSubmission } from '../../controllers/submissionController';
import { createSubmissionZodSchema } from '../../dtos/CreateSubmissionDto';
import { validateCreateSubmissionDto } from '../../validator/createSubmissionValidator';
const submissionRouter = express.Router();
submissionRouter.post(
  '/',
  validateCreateSubmissionDto(createSubmissionZodSchema),
  addSubmission
);
export default submissionRouter;