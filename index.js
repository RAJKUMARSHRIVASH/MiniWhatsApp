const express = require('express');
const connection = require('./config/db');
const path = require('path');
const userRouter = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
require('dotenv').config();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter);

app.get("/", (req, res) => {
    app.use(path.join(__dirname, "client"));
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

io.on('connection', () => { /* … */ });

server.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`Server is running on the port ${process.env.port}`);
    } catch (error) {
        console.log("Something went wrong " + error);
    }
});