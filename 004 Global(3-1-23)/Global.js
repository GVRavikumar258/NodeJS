// const { info } = require("console");
// const { dirname } = require("path");
// let url=require("url");
// console.log(url);

// let myUrl=url.parse("https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL")
// console.log(myUrl);

//assignment
// 1.developer tools  2.console methods



// console.log(global.require());

// console.log(__dirname);  // time oyt
// console.log(__filename);  //time interval

// console.log(console);

// console.log(module);

// console.log(require);

// console.log(global);

// console.log(setImmediate);

// console.log(setInterval);

// console.log(setTimeout);

//!-------assignment-----------------------------------------------------------
// 1.developer tools
//!----------2.console methods-----------------------------

//Window Console Object

// console.log("Hello");
// console.info("Hello");
// console.warn("Hello");
// console.error("Hello");

// let a=
// {
//     name:"ram",
//     roleNo:1001,
// }
// console.table(a);
// console.clear()

// console.assert(10<5,"Hello");

// console.count("Hello");
// console.count("Hello");
// console.countReset();

// console.time();
// for(let a=0;a<=20;a++)
// {
//     console.log(a);
// }
// console.timeEnd();


console.group("Groups")
for(let a=0;a<=5;a++)
{
    console.group("Group", a)
for(let a=0;a<=20;a++)
{
    console.log(a);
}
console.groupEnd()
    // console.log(a);
}
console.groupEnd()




