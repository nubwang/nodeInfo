const http = require('http');
const path = require('path');
const fs = require('fs');
const {port,hostname} = require('./config/defaultConfig')
const server = http.createServer((req, res) => {
    console.log(req,'req')
    let filePath = path.join(hostname,req.url);
    fs.stat(filePath,(err,stats)=>{
        if(err){
            res.statusCode = 404;
            res.setHeader('Content-Type','text/plain');
            res.end(`${filePath} is not a directory or file`);
            return
        }
        if(stats.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            fs.createReadStream(filePath).pipe(res)
        }else if(stats.isDirectory()){}

    })
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<div>')
    res.write('Hello World');
    res.end('</div>')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
