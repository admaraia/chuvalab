const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/* Server Config */
app.use(express.static('./assets/img'));
app.use(express.static('./assets/css'));

//Frontend Config
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index')
})


/*  Server Start */
app.listen(PORT, () => {
  console.log('Server started on ' + PORT);
});