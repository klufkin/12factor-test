const path = require('path');
const express = require('express');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// add static file server middleware
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  next();
});

// request handler
app.get('/', (req, res) => {
  res.render('index.pug', {
    title: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.send('about page');
});

const port = 3001;
// bind app to port on machine
app.listen(port, () => {
  console.log(`server is up on port:${port}`);
});
