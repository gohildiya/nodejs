var http = require('http');
var url = require('url');

//http://localhost:5000/add?num1=10&num2=20;
//http://localhost:5000/sub?num1=10&num2=20;


var server = http.createServer(function(req,res){
    var req_url = url.parse(req.url , true);
    var operation = req_url.pathname;
    var data = req_url.query;
    var output = 'invalid Operation'; 



    if(data.num1 === undefined || data.num2 === undefined)
        {
            output = 'Input is missing';
        }
        else{
            var num1 = parseInt(data.num1);
            var num2 = parseInt(data.num2);

            if(operation === '/add')
                {
                    output = 'addition =' + (num1 + num2);
                }
                else if(operation === '/sub')
                    {
                        output = 'subtraction =' + (num1 - num2);
                    }
                    else if(operation === '/mul')
                        {
                            output = 'multiplication =' + (num1 * num2);
                        }
                        else if(operation === '/div')
                            {
                                output = 'division =' + (num1 / num2).toFixed(2);
                            }
        }
        res.write(output);
        res.end();
});
server.listen(5000);
console.log("Ready to accept request...");