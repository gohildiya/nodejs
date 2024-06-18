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

app.get('/contactus',function(req,res){
    let contact = {companyname : 'Explore Infotech',
        branch : 'Mern Stack',
        city : 'Ahemdabad',
        pincode : '380001',
        contactno : '8866576821',
        email : 'gohildiya@gmail.com',
        parking : '2 Wheeler parking available'
    }
    res.render('contactus',contact);
});

app.get('/loop1',function(req,res){
    let state = {
        district: ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"
        ]
    };
    res.render('loop1', state);
});

app.listen(5000);
console.log('ready to accept request..');