import express, { Express } from 'express';
const app: Express = express();
const port: number = 3000;
app.listen(port, () => console.info(`listening on port 3000`));
