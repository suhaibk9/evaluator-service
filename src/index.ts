import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
const app: Express = express();
const PORT = serverConfig.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Hello World');
});
