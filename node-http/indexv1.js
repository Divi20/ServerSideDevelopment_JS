//node and http server making

const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{console.log(req.header);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>Heelo</h1></body></html')
})

server.listen(port,hostname,()=>{
    console.log(`server is up and running at http://${hostname}/${port}`)
})