var http = require('http');
var event = require('events');
var mail = require ('./MyMailer');
var em = new event.EventEmitter();
var mailer = new mail.MyMail();
em.on('register',function(reciever_email){
    mailer.send(reciever_email,'welcome email','it is welcome message');
});
em.addListener('register',function(reciever_email){
    mailer.send(reciever_email,'Product catelog','it is Product catelog');
});
em.on('register',function(reciever_email){
    mailer.send(reciever_email,'Terms & Condition','it is terms & condition');
});
 var server = http.createServer(function(request,response){
    var url = request.url;
    if(url === '/register'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('registration successfully');
        response.end();
        emm.emit('register', 'gohildiyas@gmail.com');
    }
 });
 server.listen(5000);
 console.log('ready to accept request...');