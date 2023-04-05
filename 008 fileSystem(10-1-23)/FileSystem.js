const fs=require('fs');

// fs.mkdirSync("Sample002");
//to use data from readfile and writefile is being put inside the callback  of readfile
// fs.readFile("../Sample002/index.html","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })



// fs.mkdir("public3",(err)=>{
//     if(err)throw err
//     console.log("folder created");
//     fs.writeFile("./public3/index.html","this is html","utf-8",(err)=>{
//         if(err)throw err
//         console.log("file write");
//         fs.appendFile("./public3/index.html","\n this is string from append",(err)=>
//         {
//             if(err) throw err
//             console.log("file append");
//             fs.readFile("./public3/index.html","utf8",(err,data)=>
//             {
//                 if(err) throw err
//                 console.log(data);
//                 // fs.unlinkSync("./public2/index.html")
//                 fs.unlink("./public3/index.html",(err)=>
//                 {
//                     if(err)throw err
//                     console.log("file unlink");
//                     fs.rmdir("./public3",(err)=>
//                     {
//                         if(err)throw err
//                         console.log("file deleted");
//                     })
//                 })
//             })
//         })
//     })
// })


//console.log will execute first  since fs.readfile is taking a callback will execute later
// fs.readFile("./public1/index.html","utf-8",(err,data)=>
// {
//     if(err)throw err
//     console.log(data);
// })
// console.log(" is try to before readfile");

//Assignment

fs.mkdir("public4",(err)=>{
    if(err)throw err
    console.log("folder created");
    fs.writeFile("./public4/index.html","this is html","utf-8",(err)=>{
        if(err)throw err
        console.log("file write");
        fs.appendFile("./public4/index.html","\n this is string from append",(err)=>
        {
            if(err) throw err
            console.log("file append");
            fs.readFile("./public4/index.html","utf8",(err,data)=>
            {
                if(err) throw err
                console.log(data);
                // fs.unlinkSync("./public2/index.html")
                fs.unlink("./public4/index.html",(err)=>
                {
                    if(err)throw err
                    console.log("file unlink");
                    fs.rmdir("./public4",(err)=>
                    {
                        if(err)throw err
                        console.log("file deleted");
                    })
                })
            })
        })
    })
})