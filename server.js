var jsonData = {
    "password": "30000",
    "username": 'Andrew'
            };
            /*data base ends*/

var express =require('express');

var app = express();
var connection = require('./model/index.js')
/*
app.get('/',function(req,res){
res.sendFile(__dirname+"/index.html");
});
*/


app.use(express.static("client"));

app.get('/question/questionID',function(req,res){
res.json(jsonData);
});

app.listen(6000,function(){
    console.log('server on 6000')
});