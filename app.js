// require libraries
const express = require('express');

// app setup
const app = express();

// middleware
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
  helpers: {
    foo() {
      return 'FOO!';
    },
    bar() {
      return 'BAR!';
    },
  },
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// routes
app.get('/', (req, res) => {
  console.log(req.query);
  res.render('home');
});

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.render('greetings', { name });
});

// start server
app.listen(3005, () => {
  console.log('Gif Search listening on port localhost:3005!');
});
