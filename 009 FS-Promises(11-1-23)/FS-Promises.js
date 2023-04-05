const fs=require("fs/promises");

// fs.writeFile("./fs/index1.text","hello im promises")
// .then(_=>
//     {
//         console.log("file written");
//     })
//     .catch((err)=>
//     {
//         if(err)throw err;
//     })

// async function fsusingp()
// {
//     await fs.writeFile("./fs/index3.text","Hello from async and await")
//     let read=await fs.readFile("./fs/index3.text","utf-8")
//     console.log(read);
// }
// fsusingp();

async function hello()
{
    await fs.mkdir("hello1/hello1.text")
    await fs.writeFile("./hello1/hello1.text","Hello iam Ravikumar")
    await fs.appendFile("./hello1/hello1.text","hello this is append")
    await fs.readFile("./hello1/hello1.text","utf-8",(err)=>
    {
        if(err)throw err;
    })
    await fs.rename("./hello1/hello1.text","./hello1/hello2.text")
    await fs.unlink("./hello1/hello2.text")
    await fs.rmdir("./hello1")
}