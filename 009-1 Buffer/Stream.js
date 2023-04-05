let fs=require('fs');

// let readstreem=fs.createReadStream("./Stream.text","utf-8")
// readstreem.on("data",(chunk)=>
// {
//     console.log(chunk);
// })

//pass data directly in chunk
// let writestreem=fs.createWriteStream("./Stream.text","utf-8")
// writestreem.write("Hello im ravikumar")

// let readstreem=fs.createReadStream("./Stream.text","utf-8")
// readstreem.on("data",(chunk)=>
// {
//     let writestreem=fs.createWriteStream("./Stream.text","utf-8")
//     writestreem.write(chunk)
//     console.log(chunk);
// })

//stream which is use for read

let readstreem=fs.createReadStream("./Stream.text","utf-8")
let writestreem=fs.createWriteStream("./Stream.text","utf-8")
readstreem.pipe(writestreem)

