import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes/index';
import sampleWorker from './workers/sampleWorker';
import sampleQueue from './queues/sampleQueue';
import sampleQueueProduce from './producers/sampleQueueProduce';
//Bull Board
import { createBullBoard } from 'bull-board';
import { BullMQAdapter } from 'bull-board/bullMQAdapter';

const app: Express = express();
const PORT = serverConfig.PORT;

// Bull Board setup with BullMQAdapter
try {
  const { router } = createBullBoard([new BullMQAdapter(sampleQueue)]);
  app.use('/admin/queues', router);
} catch (error) {
  console.error('Error setting up Bull Board:', error);
}
//Middlewares

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Bull Board is running on http://localhost:${PORT}/admin/queues`);
  sampleQueueProduce(
    'sampleJob',
    {
      name: 'John Doe',
      age: 25,
      address: '123 Main St',
    },
    2
  );
  sampleQueueProduce(
    'sampleJob',
    {
      name: 'Suhaib',
      age: 29,
      address: '123 Maindknfejrognertjognerjo St',
    },
    1
  );
  sampleWorker('sampleQueue');
});
