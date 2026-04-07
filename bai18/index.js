const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));

app.engine(
  'hbs',
  expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: '.hbs',
    defaultLayout: 'main',
  })
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'TeoShop',
    year: new Date().getFullYear(),
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
