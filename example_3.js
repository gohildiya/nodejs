var http = require('http');
var url = require('url');
var fs = require('fs');

//http://localhost:5000/data.txt?method=get&url=data.txt&datetime=17-06-202408:06AM&ip=127.0.0.1:24;
var server = http.createServer(function(req,res)
{
    var requested_url = url.parse(req.url,true);
    var filename = requested_url.pathname.substring(1); // /data.txt
    console.log(filename);
    var data = requested_url.query; //{'method':'get','url':'data.txt','datetime':'17-06-2024 08:06AM','ip':'127.0.0.1:24'}
    var output = '';

    // console.log(operation);
    // console.log(data);
    if(!data.method || !data.url || !data.datetime || !data.ip)
    {
        output = 'input is missing';
    }    
    else 
    {
        var output = `Method: ${data.method}\n`;
        output += `URL: ${data.url}\n`;
        output += `Datetime: ${data.datetime}\n`;
        output += `IP: ${data.ip}\n\n`;
            fs.appendFile(filename,output,function(error){
            if(error!=null)
            {
                output = 'error in writing data into file.';
                console.log(error);
            }
            res.write(output);
            res.end();
        });
    }
});
server.listen(5000);
console.log('ready to accept request...');