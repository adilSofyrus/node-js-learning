import { createServer } from "http";

const server = createServer(function (req, res){
if(req.url === "/getdata"){
    res.end("no data");
    res.end("hello http server");
}
res.end("hello http server");
}); // instance of a server

server.listen(7777); // given port and server is created to handle the request 


