//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  //import body-parser

app.use(bodyParser.urlencoded({extended: false})) //harus berada di atas semua endpoint
//method get
app.get('/nana', (req, res)=>{
    res.end("ini get XI RPL 6");
});

//method post
app.post('/nana', (req, res)=>{
    res.end("ini post XI RPL 6");
});

app.listen('8080');