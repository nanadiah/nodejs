//Create Server

const express = require('express'); //import module express
const app = express(); //eksekusi module express
const bodyParser = require('body-parser');  //import body-parser

app.use(bodyParser.urlencoded({extended: false})) //harus berada di atas semua endpoint//eksekusi express dengan memanggil variabel app
app.get('/nana', function(request, respone){ //simbol / yang berarti "root" atau halaman utama, function req(request) dan res(respone)
    respone.send("abcdefghij") //mengirimkan respone dari http dan dikembalikan
})

app.listen('12345'); //definisi halaman port