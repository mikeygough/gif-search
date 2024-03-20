// require libraries
const express = require('express');
const Tenor = require('tenorjs').client({
  Key: 'AIzaSyARncFF4Qr_MdvpFZ2ilzgdVvNnEjahhck',
  Filter: 'high',
  Locale: 'en_US',
});

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
  term = '';
  if (req.query.term) {
    term = req.query.term;
  }
  Tenor.Search.Query(term, '10')
    .then((response) => {
      const gifs = response;
      res.render('home', { gifs });
    })
    .catch(console.error);
});

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.render('greetings', { name });
});

// start server
app.listen(3005, () => {
  console.log('Gif Search listening on port localhost:3005!');
});
