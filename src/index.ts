import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes/index';
import sampleWorker from './workers/sampleWorker';
import sampleQueueProduce from './producers/sampleQueueProduce';
import bodyParer from 'body-parser';
import router from './config/bullBoardConfig';
const app: Express = express();
app.use(bodyParer.json());
app.use(bodyParer.text());
app.use(bodyParer.urlencoded({ extended: true }));
const PORT = serverConfig.PORT;
//Middlewares
app.use('/queue/ui', router);
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
