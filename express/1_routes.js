var express = require ('express');
var app = express();

const ROUTE = '/contact';
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

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log('error');
    else
        console.log('server is ready to accept request...');
});