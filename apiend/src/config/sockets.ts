import * as dotenv from 'dotenv';
dotenv.config();

import { Server as HttpServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

function connectSocket(server: HttpServer): SocketIOServer {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.URLFRONT || '',
    },
  });
  return io;
}

export default connectSocket;
