//csv parse npm (google search) & instal
//it is going to read XL data
const {parse} =require("csv-parse");
const fs=require("fs")

let habitablePlanets=[]
function ishabitable(planet){
    return planet["koi_disposition"]==="CONFIRMED" && planet["koi_insol"]>0.36 &&  planet["koi_insol"]<1.11 &&      
        planet["koi_prad"]<1.6
}
fs.createReadStream("kepler_data.csv","utf-8")
.pipe(parse({
    comment:"#",
    columns:true
}))
.on("data",(chunk)=>{
    if(ishabitable(chunk)){
        habitablePlanets.push(chunk)
    }
})
.on("err",()=>{
    if(err)throw err

})
.on("end",()=>{
    console.log(habitablePlanets.map(planet=>{
        return planet["kepler_name"]
    }));
    console.log( `no of habitable planets ${habitablePlanets.length}`);
})
