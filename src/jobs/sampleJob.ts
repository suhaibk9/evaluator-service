import { Job } from 'bullmq';
import { IJob } from '../types/bullMQJobDefinition';
class sampleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle(job?: Job): void {
    console.log(`Job ${job?.id} completed`);
    console.log('name: ', job?.name);
    console.log('data: ', job?.data);
  }
  failed(job?: Job): void {
    console.log(`Job ${job?.id} failed`);
  }
}
export default sampleJob;
