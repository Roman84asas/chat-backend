const express = require('express');
const app = express();

app.get('/', function ( _: any, res: any) {
  res.send('Hello World!');
});

app.listen(3030, function () {
  console.log('Example app listening on port 3000!');
});
