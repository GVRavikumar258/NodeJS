// var a=10;
// var b=20;
// function first()
// {
//     second();
// }
// function second()
// {
//     console.log(a+b);
//     third();
// }
// function third()
// {
//     var c=30;
//     console.log(a+b+c);
// }
// first();

// var a=10;
// let b=30;
// function demo()
// {
//     console.log(this.a);
//     console.log(this.b);
// }
// demo();


// var a="hi";
// function parent()
// {
//     var b="Hello";
//     return function child()
//     {
//         var c=30;
//         console.log(a+" "+b+" "+c);
//     }
// }
// parent()();

// /
// let a=Number(prompt(("enter a")));
// let b=Number(prompt(("enter b")));
// function hof(a,b,task)
// {
//   task(a,b);
// }
// hof(a,b,function(a,b){console.log(a+b);})
// hof(a,b,function(a,b){console.log(a-b);})
// hof(a,b,function(a,b){console.log(a/b);})
// hof(a,b,function(a,b){console.log(a%b);})
// hof(a,b,function(a,b){console.log(a*b);})


// function(a,b)
// {
//     console.log(a+b);
// }

// setTimeout(function()
// {
//     console.log("this is setTimeout");
// },2000)

// let c=setInterval(()=>{
//     console.log("this is setInterval");
// },1000)

// setTimeout(function(){
//     clearInterval(c)
// }, 5000);

// let myProperties =new Properties((resolve, reject) =>{
//     let error=true;
//     if (!error) {resolve("this promise is resolved");} else {reject("this promise is rejected");}
        
//     }
// );
// myProperties.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// }
// )


// let reject=(error )=>{
//     console.log(error);
// }
// reject("this promise is rejected")

// console.log("start");
// function add(a,b)
// {
//     let c=a+b;
//     console.log(c);
// }
// add(3,4);
// console.log("end");

// console.log("start");
// async function add(a,b)
// {
//     let c= await a+b;
//     let d= await a-b;
//     console.log(c,d);
// }
// add(3,4);
// console.log("end");

// fetch("https://swapi.dev/api/films/1/").then(res=>res.json()).then(data=>console.log(data))

async function starWar()
{
    let res = await fetch("https://swapi.dev/api/films/1/")
    let data =await res.json();
    console.log(data);
}
starWar();

http://vpaste.net./yawy5