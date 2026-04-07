'use stricct';

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('hetgio', (thongBao) => {
    console.log(thongBao);
});
setTimeout(() => {
    eventEmitter.emit('hetgio', 'Hết giờ học rồi, về thoi');
}, 2000);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

