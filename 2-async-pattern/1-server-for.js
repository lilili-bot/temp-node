const http = require('http')

const server = http.createServer((res,req)=>{
 console.log('start first taks')
 for (let i=0; i<1000; i++) {
  for (let j=0; j<1000; j++) {
   console.log(`$(i), $(j)`)
  }
 }
 if (req.url==='/'){
  res.end('Home Page')
 }
 if (req.url==='/about'){

  res.end('about page')
 }
 else{
  res.end('Error Page')
 }
})

server.listen(5000, ()=>{
 console.log('server is listening to res.')
})
