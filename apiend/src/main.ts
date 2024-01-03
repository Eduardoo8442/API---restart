import * as dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIO } from 'socket.io';
import connectSocket from  './config/sockets'

const app: Application = express();
const server = createServer(app);
const io: SocketIO = connectSocket(server);

const corsOptions: cors.CorsOptions = {
  origin: process.env.URLFRONT || '',
};

app.use(cors(corsOptions));

io.emit('restart');

const port: number = Number(process.env.PORT) || 3000;
server.listen(port, () => console.log(`servidor rodando na porta ${port}`));
