const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

app.get("/", (req, res) => {
    app.use(path.join(__dirname, "client"));
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

io.on('connection', () => { /* … */ });
server.listen(process.env.port, () => {
    console.log(`Server is running on the port ${process.env.port}`);
});