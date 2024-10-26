import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));
console.log('env', env('PORT', '3000'), typeof env('PORT', '3000'));
console.log('port', PORT);

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.use((err, req, res, next) => {});

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Servernis running on port ${PORT}`);
  });
};
