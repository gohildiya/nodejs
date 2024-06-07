var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    let requested_url = request.url;
    let filename = requested_url.substring(1);
    fs.readFile(filename,function(error,content){
        if(error != null)
            {
                response.writeHead(200,{'content-type':'text/html'});
                response.write('<h1>File not found</h1>');
                return response.end();
            }
            else{
                response.writeHead(200,{'content-type':'text/html'});
                response.write(content);
                return response.end();
            }
        
    }); //asynochrous function
});

server.listen(5000);