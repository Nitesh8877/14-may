
//inporting http core module
const http=require('http');

//listens to any http request
const listener=function(req,res){
    console.log("server processing request");
    res.writeHead(200);
    res.end('our first http server');
}

//createServer (function(function,function));

const simpleServer=http.createServer(listener);
simpleServer.listen(8448);