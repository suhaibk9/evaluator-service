import { Request, Response } from 'express';
import { CreateSubmissionDto } from '../dtos/CreateSubmissionDto';
function addSubmission(req: Request, res: Response) {
  const submissionDto = req.body as CreateSubmissionDto;
  return res.status(200).json({
    success: true,
    error: {},
    message: 'Successfully collected the submission data.',
    data: submissionDto,
  });
}
export { addSubmission };
