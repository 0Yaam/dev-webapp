'use strict';
const express = require("express");
const app = express();
const port = process.env.port || 9000;

const events = require('events');
const eventEmmitter = new events.EventEmitter();

eventEmmitter.on('vaoLop', vaoLop => {
    console.log(vaoLop);
});

setTimeout(()=>{
    eventEmmitter.emit('vaoLop', "đã đến giờ học rồi")
},5000);

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});

