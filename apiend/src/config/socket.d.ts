import { Server as HttpServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

declare module './config/sockets' {
  function connectSocket(server: HttpServer): SocketIOServer;
  export default connectSocket;
}
