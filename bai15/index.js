'use strict';
const express = require('express');
const app = express();
const port = process.env.port || 9000;

app.use((req,res,next) =>{
    console.log(`[${new Date().toISOString()}] receive GET request at ${req.url}`)
    next();
});

app.use((req,res,next) => {
    req.timestamp = new Date().toISOString();
    next();
});


app.get('/', (req, res) => {
    const name = req.query.name;
    const message = `Web server, hi ${name}<br>` +
                    `Khách truy cập web lúc ${req.timestamp}`;

    res.send(message);
});

app.get('/profile', (req, res, next) => {
    console.log("check access permission");
    req.user = {name: "Ti"};
    next();
},
(req, res) => {
    res.send(`Hello ${req.user.name}, this is your profile`);
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);        
});

