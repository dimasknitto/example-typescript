import express, { Express } from 'express';
import { Kendaraan } from './types/interface';
const app: Express = express();
const port: number = 3000;


app.listen(port, () => console.info(`listening on port 3000`));
