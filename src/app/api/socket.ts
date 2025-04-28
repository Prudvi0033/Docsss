import { Server as IOServer } from 'socket.io';
import type { NextApiRequest, NextApiResponse } from 'next';

interface NextResponseWithSocket extends NextApiResponse {
  socket: NextApiResponse['socket'] & {
    server: {
      io?: IOServer;
    };
  };
}

const socketHandler = (req: NextApiRequest, res: NextResponseWithSocket) => {
  if (!res.socket.server.io) {
    console.log("Starting Socket.IO server...");

    const io = new IOServer(res.socket.server as any, {
      path: "/api/socket", 
      addTrailingSlash: false,
    });

    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log("New socket connected:", socket.id);

      socket.on('message', (msg) => {
        console.log(`Received message: ${msg}`);
        io.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${socket.id}`);
      });
    });
  } else {
    console.log("Socket.IO server already running.");
  }

  res.end();
};

export default socketHandler;
