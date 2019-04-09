const express = require('express');
const app = express();

app.engine('html', require('express-art-template'));
app.use('/public', express.static('./public'));

app.listen('3000', () => {
  console.log('server is running');
});

require('./router')(app);