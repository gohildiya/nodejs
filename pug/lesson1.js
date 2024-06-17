var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','views');

//define route
app.get('/one',function(req,res){
    res.render('one');
});

app.get('/two',function(req,res){
    res.render('two');
});

app.listen(5000);
console.log('ready to accept request..');