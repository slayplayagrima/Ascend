import http from 'http';
import app from './app.js';
import {Server} from 'socket.io';

const PORT=process.env.PORT || 5000;

const server=http.createServer(app);

const io=new Server(server, {
    cors: {
        origin: '*',
        // methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
}); 

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});