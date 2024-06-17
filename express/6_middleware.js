var express = require('express');
var now = require('./mydatetime');
var fs = require('fs'); // Require the filesystem module
var app = express();
const ROUTE = '/contact';

// Middleware to log time restrictions
app.use(function(req, res, next) {
    console.log('time checking middleware');
    let hour = now.getHour();
    if (hour >= 0 && hour <= 8)
        res.send('you can not access between 12 am to 8 am');
    else
        next();
});

// Middleware to log requests and append to success.log file
app.use(function(req, res, next) {
    console.log('second middleware');
    let method = req.method;
    let url = req.url;
    let currentdatetime = now.getDateTime();
    let ip = req.ip;
    let logMessage = `${method} \n ${url} \n ${currentdatetime} \n ${ip}\n`; // Create log message

    // Append log message to access.log file asynchronously
    fs.appendFile('access.log', logMessage, function(err) {
        if (err) 
            console.error('Error writing to access.log:', err);
    });

    next();
});

// Route handlers
app.get(ROUTE, function(req, res) {
    res.send('get method received for contact route');
});
app.post(ROUTE, function(req, res) {
    res.send('post method received for contact route');
});
app.put(ROUTE, function(req, res) {
    res.send('put method received for contact route');
});
app.delete(ROUTE, function(req, res) {
    res.send('delete method received for contact route');
});

// Start the server
app.listen(5000);
console.log('request accepted..');
