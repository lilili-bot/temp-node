var http = require('http');
const fs = require('fs');

http.createServer(function (req,res){
 //const text = fs.readFileSync('./content/big-file.txt','utf8')
 //res.end(text)
 const stream = fs.createWriteStream('./content/big-file.txt','utf8');
 stream.on('open', () =>{
 stream.pipe(res)
 })
 stream.on('error',(err) =>{
  res.end(err)
 })
}).listen(5000)