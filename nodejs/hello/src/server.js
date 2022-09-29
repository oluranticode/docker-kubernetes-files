'use strict';

const express = require('express');

const PORT = 4001;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Buga World!!! \n');
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);