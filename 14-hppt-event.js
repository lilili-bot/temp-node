const http  = require('http');

const sever = http.createServer()


server.on('request',(req, res)=>{
 res.end('welcome')
})


server.listen(5000,()=>{console.log(`erver is listening`)})

