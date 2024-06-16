var express = require ('express');
var now = require('./mydatetime');
var app = express();
const ROUTE = '/contact';

//create middleware
app.use(function(req,res,next){
    console.log('time checking middleware');
    let hour = now.getHour();
    if(hour>=0 && hour<=9)
        res.send('you can not access between 12 am to 11 am');
    else 
        next();
});

app.use(function (req, res, next) {
    console.log('second middleware');
    let method = req.method;
    let url = req.url;
    let currentdatetime = now.getDateTime();
    let ip = req.ip;
    console.log(method,url,currentdatetime,ip);
    
    next();
});

app.get(ROUTE,function(req,res){
    res.send('get method recieved for contact route');
});
app.post(ROUTE,function(req,res){
    res.send('post method recieved for contact route');
});
app.put(ROUTE,function(req,res){
    res.send('put method recieved for contact route');
});
app.delete(ROUTE,function(req,res){
    res.send('delete method recieved for contact route');
});


app.listen(5000);
console.log('request accepted..');