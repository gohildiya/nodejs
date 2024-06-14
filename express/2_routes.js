var express = require('express');
var parser = require('body-parser');
var app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ROUTE = '/contact';
var mycontacts = [
    {'name': 'Diya', 'mobile': '8866576821'},
    {'name': 'Hensi', 'mobile': '9998647094'},
    {'name': 'Dharmi', 'mobile': '9924544321'}
];

// GET method to fetch data
app.get(ROUTE, function(req, res){
    res.json(mycontacts);
});

// POST method to insert new data
app.post(ROUTE, function(req, res){
    let name = req.body.name;
    let mobile = req.body.mobile;
    let newcontact = {'name': name, 'mobile': mobile};
    mycontacts.push(newcontact);
    res.send('new contact added successfully');
});

// PUT method to update existing data
app.put(ROUTE, function(req, res){
    let name = req.body.name;
    let newname = req.body.newname;
    let newmobile = req.body.newmobile;
    let size = mycontacts.length;
    let index = 0;

    for(index = 0; index < size; index++) {
        if (mycontacts[index].name === name) {
            mycontacts[index].name = newname;
            mycontacts[index].mobile = newmobile;
            break;
        }
    }

    if (index < size)
        res.send('contact updated');
    else
        res.send('contact not found'); 
});

// DELETE method to delete data
app.delete(ROUTE, function (req, res) {
    let name = req.body.name;
    let index = mycontacts.findIndex(contact => contact.name === name);
    
    if (index !== -1) {
        mycontacts.splice(index, 1);
        res.send('contact deleted successfully');
    } else {
        res.send('contact not found');
    }
});

const PORTNO = 5000;
app.listen(PORTNO, function(error){
    if (error)
        console.log('error');
    else
        console.log('server is ready to accept request...');
});
