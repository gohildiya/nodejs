var express = require ('express');
var app = express();
const ROUTE = '/contact';
var mycontacts = [
    {'name':'Diya','mobile':'8866576821'},
    {'name':'Hensi','mobile':'9998647094'},
    {'name':'Dharmi','mobile':'9924544321'}
]
app.get(ROUTE,function(req,res){
    res.json('mycontacts');
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