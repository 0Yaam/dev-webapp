'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) =>{
    res.send('welcome to teoshop');
});


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});