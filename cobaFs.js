const fs = require('fs');

console.log('start reading a file.....')

fs.readFile('catatan.txt' , 'utf-8',(err, content)=>{
    if (err){
        console.log('error happened during reading the file')
        return console.log(err)
    }
    console.log('yeay, BERHASILL!!! DATANYA ' + content);
})

console.log('end of the file')