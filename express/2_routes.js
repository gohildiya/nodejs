var express = require ('express');
var parser = require('body-parser');
var app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const ROUTE = '/contact';
var mycontacts = [
    {'name':'Diya','mobile':'8866576821'},
    {'name':'Hensi','mobile':'9998647094'},
    {'name':'Dharmi','mobile':'9924544321'}
]
//get method is used to fetch data
app.get(ROUTE,function(req,res){
    res.json('mycontacts');
});

//post method is used to insert new data
//localhost:5000/contact?name=ghanshyam&mobile=9998887771
app.post(ROUTE,function(req,res){
    let name = req.body.name;
    let mobile = req.body.mobile;
    let newcontact = {'name':name,'mobile':mobile};
    newcontact.push(mycontacts);
    res.send('new contact added successfully');
});

//put method is used to update existing data
app.put(ROUTE,function(req,res){
    let name = req.body.name;
    let newname = req.body.newname;
    let newmobile = req.body.newmobile;
    let size = mycontacts.length;
    let index=0;
    for(index=0;index<size;index++)
    {
        //console.log(mycontacts[index].name, mycontacts[index].mobile);
        if (mycontacts[index].name === name)
        {
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

//delete method is used to delete data
app.delete(ROUTE, function (request, response) {
    let name = request.body.name;
    
    response.send('delete request received for contact route');
});

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log('error');
    else
        console.log('server is ready to accept request...');
});