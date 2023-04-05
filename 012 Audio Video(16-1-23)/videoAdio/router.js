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
        let data=await fs.readFile("./index.html","utf-8")
        res.end(data)
    }
    else if(req.url==='/style')
    {
        res.writeHead(200,"okay",{"content-type":"text/css"})
        let css=await fs.readFile("./router.css","utf-8")
        res.end(css)
    }
    else if(req.url==='/video')
    {
        res.writeHead(200,"okay",{"content-type":"video/mp4"})
        let video=await fs.readFile("./Videos/Akhanda Trailer Roar Nandamuri Balakrishna Boyapati Srinu Thaman S Dwaraka Creations [TubeRipper.com].mp4")
        res.end(video)
    }
    else if(req.url==='/audio')
    {
        res.writeHead(200,"okay",{"content-type":"audio/mp3"})
        let audio=await fs.readFile("./Adios/yt1s.com - Akhanda Title Song  Lyrical  Nandamuri Balakrishna  Boyapati Sreenu  Thaman S.mp3")
        res.end(audio)
    }
    else if(req.url==='/image')
    {
        res.writeHead(200,"okay",{"content-type":"image/webp"})
        let image=await fs.readFile("./images/swan-7708580_640.webp")
        res.end(image)
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

