// 
//npm i nodemon --save-dev, command to install dev dependencies. the ones we use to creating the app, but not when we use the app.
// config the package.json   "start":"node app.js" ,
//   "dev" : "nodemon app.js"
// under script. 

// nodemon automatically restart the app. 
// we can remove the "dev" in script if we do not want app to restart everytime updating the app.js. 
/* const _ = require('lodash');

const items = [1,[2,3],[4,[7,8]]]

const newItems = _.flattenDeep(items);
console.log(newItems)

console.log('hello world') */

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