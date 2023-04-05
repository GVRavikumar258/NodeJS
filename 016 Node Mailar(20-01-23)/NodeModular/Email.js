const http=require("http")
const fs=require("fs/promises")
const nodemailer=require("nodemailer")
const {parse}=require("querystring")

http.createServer(async(req,res)=>{
    if(req.method==="POST"){
        if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
            //data event to get the data from body
            body=""
            req.on("data",(chunk)=>{
                body+=chunk
            })
            //end event and also send mail
            req.on("end",(err)=>{
                if (err) throw err
                let parsedBody=parse(body)
                let email=parsedBody.email
                console.log(email);
                  //this should be used to send mail
                //nodemailer starts
                let transporter=nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false,
                    auth: {
                      user: "kaycee.brakus@ethereal.email",
                      pass: "hsxsRX46qND5ZQ6yWP",
                    },
                })
                let options={
                    from:"kaycee.brakus@ethereal.email",
                    to:email,
                    subject:"About Courses",
                    html:`<h1>Welcome to courses.com</h1>
                    <p>This is the list of courses we provide</p>`
                }
                transporter.sendMail(options,(err)=>{
                    if(err) throw err
                    console.log("Mail sent");
                    res.end("Mail sent")
                })
            })

        }

    }else{
        if(req.url==="/home"|| req.url==="/"){
            res.writeHead(200,"ok",{"content-type":"text/html"})
            // let html=await fs.readFile("./sampile.js","utf-8")
            let html=await fs.readFile("./sample.html","utf-8")
            res.end(html)
        }else{
            res.writeHead(200,"ok",{"content-type":"text/html"})
            res.end("<h1>Oops!!! this file is missing</h1>")
        }
    }
}).listen(5000,(err)=>{
    if(err)throw err
    console.log("this server is running on port 5000...");
})