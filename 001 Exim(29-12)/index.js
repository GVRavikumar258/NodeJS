// export let a=10;    //named module (ES module)
// export let b=function()
// {
//     return 35;
// }
// export{a,b};


// export let a=10;    //default module (ES Module)
//  let b=function()
// {
//     return 35;
// }

// export default b; 

//note   1-we can export only one default module  2-we can not export two default modules modules



// Assignment

let add=function(a,b,c)
{
    return a+b+c;
}

export let sub=function(a,b,c)
{
    return a-b-c;
}
export let mul=function(a,b,c)
{
    return a*b*c;
}
export let div=function(a,b,c)
{
    return a/b/c;
}

export default add;
