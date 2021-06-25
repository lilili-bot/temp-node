const http = require('http');
const server = http.createServer((req,res)=>{
 //req is what coming in, and res is what the website send back.
 console.log(req)
 if(req.url==='/'){
  res.end('Welcome to home page')
 }
 //res.write('Welcome to our home page');
 //res.end()
 if(req.url==='/about'){
  res.end('here is about.')
 }
 res.end(`
  <h2>Opps</h2>
  <a href="/"> back to home page </a>
  `)
})

server.listen(5000)