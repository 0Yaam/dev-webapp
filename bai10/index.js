'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send('Chao mung den voi TeoShop');
});

app.listen(port, () =>{
    console.log(`Server dang chay tai dia chi http://localhost:${port}`);
});