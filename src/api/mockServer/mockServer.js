import { Server } from 'socket.io';
//8080 временно
const io = new Server(8080, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('message', (data) => {
        console.log('Received message:', data);
        const response = JSON.stringify({ name: 'serverMessage', value: 'Message received', type: 'updateStorage' });
        socket.emit('message', response);
    });

    socket.on('action', (data) => {
        console.log('Received action:', data);
        const actionResponse = JSON.stringify({ name: 'serverAction', type: 'action' });
        socket.emit('message', actionResponse);
    });

    socket.on('disconnect', (reason) => {
        console.log(`Client disconnected: ${reason}`);
    });
});