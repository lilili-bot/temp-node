const { readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
 if (err){
  console.log(err)
  return
 }
 const first = result;
 readFile('./content/second.txt','utf8',(err,result)=>{
  if (err){
   console.log(err)
   return
  }
  const second = result
  writeFile(
   './content/result-async.txt',
   `'here is the result' : ${first} , ${second}`
   ,(err,result)=>{
    if(err){console.log(err)
    return} console.log(result)
   })
 })
})



// new ways to read and write file. We will use this one. 
// const {readFile, writeFile} = require('fs').promises
/* const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
 */

readFile('./content/first.txt','utf-8',(err, result)=>{
 if(err){return;}else{return}
})

const start = async ()=>{
  try{
   const first = await readFile('./content/first.txt','utf-8');
   const second = await readFile('./content/second.txt','utf-8');
   await writeFile('./content/result-mind-grenade.txt',`this is awesome ${first} ${second} ${second}`)


   console.log(first)
   console.log(second)
   console.log()
  } catch (error){
   console.log(error)
  }
}


start()

//getText('./content/first.txt').then((result)=>console.log(result)).catch((err)=>consol.log(err))

/* const getText = (path) => {
 return new Promise((resolve, reject) =>{
  readFile(path,'utf-8',(err,data) => {
   if(err){reject(err);}else{resolve(data)}
  })
 })
} */