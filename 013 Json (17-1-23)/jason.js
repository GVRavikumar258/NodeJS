const http=require('http')

http.createServer((req,res)=>
{
    let employes=[
        {
        "name":"shankar",
        "esal":30000,
        "exp":10
        },
    {
        "name":"uma shankar",
        "esal":40000,
        "exp":15
    },
    {
        "name":"kiran",
        "esal":35000,
        "exp":12
    }
    ]
        res.statusCode=200
        res.statusMessage="all ok"
        res.writeHead(200,"okay",{"content-type":"application/json","Access-Control-Allow-Origin":"*"})
        res.end(JSON.stringify(employes))

})
.listen(5000,(err)=>
{
    if(err)throw err;
    console.log('this server is running on port 5000... ');
})