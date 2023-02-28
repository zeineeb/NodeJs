const express = require('express');
const http = require('http');
var path = require('path');
const ChatRouter = require('./routes/chat.js');

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine" , "twig");

const server = http.createServer(app);
const  io = require("socket.io")(server);
io.on("connection" , (socket)=>{

console.log("User connected");
io.emit("msg" , "A new user is connected");

  socket.on('msg', (msg) => {
    console.log('message: ' + msg);
    io.emit('msg', msg);
  });

  socket.on('disconnect', () => {
    io.emit("msg" , " user disconnected");
  });

});

app.use('/chat',ChatRouter);
server.listen(3000 , ()=> console.log("server is run"));