let fs=require("fs");

// fs.mkdirSync("Private")

let ReadText=fs.readFileSync("./Private/HTML.text","utf-8")
console.log(ReadText);

fs.writeFileSync("./Private/CSS.text",`
Work something about CSS
body{about
    color:red;
}
h1{
    font-size:10px
}
`)

fs.writeFileSync("./Private/JS.text",`
let a=10;
let b=20;
let c=30;
lrt d=a+b+c;
console.log(d);
`)