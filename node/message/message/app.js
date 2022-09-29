const express = require('express');
const app = express();

app.get('/', (req, res)=>
    res.send('hello world'));

app.listen(8000, '0.0.0.0', () => {
    console.log("app is listening to port 80....")
});