const http=require('http');
const fs=require('fs/promises');
const { url } = require('inspector');
const port =5000
//!-------------------------------------------
// http.createServer((req, res)=>
// {
// let path=req.url
// if(path==='/' ||path==='/home')
// {
//     console.log('this is home');
// }else{
//     console.log('you have entered wrong port');
// }
// })
// .listen(5000,(err)=>
// {
//     if(err)throw err;
//     console.log('this server is running on port 5000... ');
// })
//!---------------------------------------------------------
// http.createServer((req,res)=>
// {
//     fs.createReadStream('./routrt.html').pipe(res)
// })
// .listen(5000,(err)=>
// {
//     if(err)throw err;
//     console.log('this server is running on port 5000... ');
// })
//!-----------------------------------------------------------


// http.createServer(async(req,res)=>
// {
//     if(req.url==='/'||req.url==='/home')
//     {
//         res.statusCode=200
//         res.statusMessage="all ok"
//         res.setHeader("content-type","text/html")
//         let data=await fs.readFile("./routrt.html","utf-8")
//         res.end(data)
//     }
//     else if(req.url==='/style')
//     {
//         res.writeHead(200,"okay",{"content-type":"text/css"})
//         let css=await fs.readFile("./router.css","utf-8")
//         res.end(css)
//     }
//     else
//     {
//         res.writeHead(404,"something gone wrong",{"content-type":"text/html"})
//         let pnf=await fs.readFile("./pagenotfound.html","utf-8")
//         res.end(pnf)
//     }
// })
// .listen(5000,(err)=>
// {
//     if(err)throw err;
//     console.log('this server is running on port 5000... ',port);
// })


//!--Assignment----------------------------------------------------------


http.createServer(async(req,res)=>
{
    if(req.url==='/'||req.url==='/home')
    {
        res.statusCode=200
        res.statusMessage="all ok"
        res.setHeader("content-type","text/html")
        let data=await fs.readFile("./routrt.html","utf-8")
        res.end(data)
    }
    else if(req.url==='/style')
    {
        res.writeHead(200,"okay",{"content-type":"text/css"})
        let css=await fs.readFile("./router.css","utf-8")
        res.end(css)
    }
    else
    {
        res.writeHead(404,"something gone wrong",{"content-type":"text/html"})
        let pnf=await fs.readFile("./pagenotfound.html","utf-8")
        res.end(pnf)
    }
})
.listen(5000,(err)=>
{
    if(err)throw err;
    console.log('this server is running on port 5000... ',port);
})