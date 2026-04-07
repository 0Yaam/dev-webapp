'use strict';
const express = require('express');
const app = express();
const port = process.env.port || 9000

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('vaoLop', xuLyVaoLop);
function xuLyVaoLop(tb){
    console.log(tb)
}

setTimeout(() => {
   eventEmitter.emit('vaoLop', "Đã đến giờ học rồi") 
}, 5000);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});