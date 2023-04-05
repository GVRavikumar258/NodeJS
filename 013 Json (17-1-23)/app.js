// const res = require("express/lib/response");

// const { response } = require("express");

window.fetch("http://localhost:5000/")
.then(response=>response.json())
.then(
    result=>{
            // console.log(result),
            let div=document.querySelector("div")
            let out=""
            for(let emp of result)
            {
                out +=`<h1>${emp.name},   ${emp.esal},   ${emp.exp}</h1>`
            }
            div.innerHTML=out
            })

//SOP
//CORS
//CSRF
