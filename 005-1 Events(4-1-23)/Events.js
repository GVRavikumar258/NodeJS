let EventEmitter=require("events");
let topper=new EventEmitter();
//parents
// topper.on("PUresults",function(){
//     console.log("Very Happy");
// })

//relatives

// topper.on("PUresults",function(){
//     console.log("only 95%");
// })

// topper.emit("PUresults")

// process.on('exit',(code)=>{
//     console.log('process exit event with code:',code);
// })
// topper.emit("PUresults")

// topper.on("PU",function(result){
//     if(result==="95%")
//     {
//         console.log("Very Happy");
//     }
// })

//relatives

// topper.on("PU",function(result){
//     if(result==="95%")
//     {
//         console.log("only 95%");
//     }
// })

// topper.emit("PU","95%");
// topper.emit("PU","94%");


// process.on('exit',(code)=>{
//     console.log('process exit event with code:',code);
// })
// topper.emit("PUresults")
//!-----assignments 1.new event ------------------------------------------------
let job=new EventEmitter();

job.on("IAS",function(rank){
    if(rank<50)
    {
        console.log("LBSNAA welcomes you");
    }
    else if(rank>50 && rank<70)
    {
        console.log("SSIFS welcomes you");
    }
    else
    {
        console.log("SVPNPA welcomes you");
    }
})

job.on("IAS",function(rank){
    if(rank<50)
    {
        console.log("LBSNAA - IAS - You are the KING");
    }
    else if(rank>50 && rank<70)
    {
        console.log("SSIFS - IFS - You are the Diplomat");
    }
    else
    {
        console.log("SVPNPA - IPS - You are the Law and Order Protector");
    }
})

job.on("IAS",function(rank){
    if(rank<50)
    {
        console.log("LBSNAA - IAS - You are the KING - CS");
    }
    else if(rank>50 && rank<70)
    {
        console.log("SSIFS - IFS - You are the Diplomat - FS (Embassador)");
    }
    else
    {
        console.log("SVPNPA - IPS - You are the Law and Order Protector - DGP");
    }
})

job.emit("IAS",10);

console.log("-------------------------------------");

job.emit("IAS",60);

console.log("--------------------------------------");

job.emit("IAS",80);

console.log("-----------------------------------------");

process.on('exit',(code)=>{
    console.log('process exit event with code:',code);
})

topper.emit("IAS")


//!--------------------------------------------------------------------------------
