import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
})
export class UserLogsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  async handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (userId) {
      await client.join(`user:${userId}`);
    } else {
      console.warn(`Client ${client.id} connected without userId`);
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  notifyNewLog(userId: string, log: any) {
    this.server.to(`user:${userId}`).emit(`new_log:${userId}`, log);
  }
}
