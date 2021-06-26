const {readFile, writeFile} = require('fs')

console.log('started a first task')

readFile('../content/first.txt','utf-8',(err,result) =>{
 if(err){console.log(`error no file first.txt exsist.`)
return } else{
 console.log(result)
 console.log(`the first task is finished`)
}
})

console.log('start the next taks')