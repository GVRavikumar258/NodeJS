//Functions
//named Functions
// function Function()
// {
//     console.log("Hello World");
// }
// Function();

//anonymous functions functional expressions


//Arrow functions

// let a=()=>{
//     console.log("This is arrow function");
// }
// console.log(a());
// a();

//iif
// (function(){
//     console.log("Hello World");
// })



//hof and callback functions

// function haf(task)
// {
// task();
// }
// haf(function()
// {
//     console.log("This is callback function");
// })
//nested functions

// var m=10;
// function Parent() {
//     var b=14;
//     console.log(m+b);
//     return function child( ) {
//         var c=30;
//         console.log(m+b+c); //lexicographic
//     }
// }
// Parent()();


// function Hello(){
//     var a=10;
//     var b=14;
//     var c=30;
//     var d=a+b+c;
//     console.log(d);
// }
// Hello();

//  let e=()=>
//  {
//     let f=this.Hello();
//  }
//  e();

//  function first(fun)
//  {
//     let a=1;
//     let b=2;
//     let c=a+b+fun();
//     console.log(c);
//  }
// function second(){
//     let a=1;
//     console.log(a);
// }
// function first(second)



setTimeout(()=>{console.log("rabbit finishes the race");},3000)
console.log("rabbit finishes the race");