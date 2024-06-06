var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'applicaton/json'});
    var url = req.url;
    var output = null;
    if (url === '/reactjs')
        {
            output = {
                success: 'yes',
                libraryName: "React",
                version: "18.0.0",
                primaryFeature: "Component-based architecture",
                coreConcepts: ["JSX", "Virtual DOM", "State", "Props", "Hooks"],
                popularLibraries: ["Redux", "React Router", "Next.js"]
            }
        }
        else if (url === '/nodejs')
            {
                output = {
                    success: 'yes',
                    runtimeName: "Node.js",
                    version: "20.0.0",
                    primaryFeature: "Event-driven, non-blocking I/O",
                    coreModules: ["http", "fs", "path", "events", "crypto"],
                    popularFrameworks: ["Express", "Koa", "NestJS", "Sails"]
                }
            }
            else {
                output = {
                    success : 'no',
                    message : 'no such subject exists'
                }
            }

            //convert object into subject

            var output_as_json = JSON.stringify(output);
            res.write(output_as_json);
            res.end();
});
server.listen(5000);
console.log("ready to accept request..");