'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    const mssv = req.query.mssv;
    const hoten = req.query.hoten;
    const dtb = req.query.dtb;
    res.send(`Chào bạn ${hoten} <br /> MSSV: ${mssv}<br /> Điểm trung bình: ${dtb}<br /> Chúc bạn học chăm `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});