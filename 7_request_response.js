var http = require ('http');
var server = http.createServer(function(request,response)
{
    response.writeHead(200,{'content-type': 'text/html'});
    var url = request.url;
    console.log(url);
    var output;
    if(url == "/")
        {
            output = "<h1> Home </h1>";
        }
    else if(url == "/fruits")
        {
            output = "<ol><li>Mango</li><li>Watermalon</li><li>Banana</li><li>Lemon</li><li>Cherry</li></ol>";
        }
    else if(url == "/vegetables")
        {
            output = "<ol><li>Patato</li><li>onion</li><li>Bringle</li><li>Tomato</li><li>Spinch</li></ol>";
        }
    else if(url == "/grains")
        {
            output = "<ol><li>Rice</li><li>Wheat</li><li>Oats</li><li>Barley</li><li>Ragi</li></ol>";
        }
    output = "<html>" + output + "</html>";
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('ready to accept request');
