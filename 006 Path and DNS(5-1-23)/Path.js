const path =require("path");
// let base= path.basename("C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js")//use /
let  base1=path.basename("Path(5-1-23)/Path.js")
console.log(base1);

let basename=path.basename("C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js",)
console.log(basename);

console.log( path.dirname("Path(5-1-23)\Path.js"));

console.log(path.dirname("C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js"));

console.log(path.extname("C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js"));

console.log(path.normalize("public //////Navicular"));

console.log(path.join(__dirname,"index.js"));

console.log(path.join(__dirname,"index.js","jspiders"));

console.log(path.parse(__dirname,"C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js"));

console.log(path.parse(__filename,"C:\Users\DINESH KUMAR\OneDrive\Desktop\NodeJS\Path(5-1-23)\Path.js"));

