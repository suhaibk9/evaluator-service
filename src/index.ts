import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes/index';
const app: Express = express();
const PORT = serverConfig.PORT;
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
