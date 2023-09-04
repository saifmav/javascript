const express = require('express');
const path = require("path");
const http = require('http');
const socketio = require('socket.io');


const app = express()
const server= http.createServer(app)
const io = socketio(server)

//set static path
app.use(express.static(path.join(__dirname,'public')))

//run when client connected
io.on('connection',socket=>{
    // console.log("new connection......");
    socket.emit('message','welcome to chat app')
    //brodcast ever user
    socket.broadcast.emit('message',"user has joint chat")
    //on discoonect
    socket.on('message',()=>{
        io.emit('message',"user has left")

    })
    
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})
