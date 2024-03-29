const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();

const port = 4000;
const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan("combined"));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
