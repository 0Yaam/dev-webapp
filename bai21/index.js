'use strict'
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const expressHandlebars = require('express-handlebars');

app.engine('hbs', expressHandlebars.engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: 'hbs',
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('Tables created successfully!');
    });
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:page', (req, res) => {
    res.render(req.params.page);
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
