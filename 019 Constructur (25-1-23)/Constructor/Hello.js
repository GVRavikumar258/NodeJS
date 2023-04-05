//spred operator
// function demo(fn, ln, ...otherDetails) {
//     return arguments
//     return otherDetails

// }
// console.log(demo("uma", "Hello", "hiiii", 15, 27, 388, 49847))


// let a = [1, 2, 3, 4, 5, 6]
// let b = [3, 4, 5, 6, 7, 8, 9, 0]
// c = [a, b]
// d = [...a, ...b]
// console.log(c);
// console.log(d);

//Destructuring object and prototype

// const { name, city, address } = {
//     name: "uma",
//     city: "bangalore",
//     address: "mars"

// }
// console.log(city);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 0]
// console.log(a);
// console.log(...a);


//object
//obj.prototype


// const obj = {
//     name: "dinesh",
//     age: 20,
//     address: "tamilnadu"
// }
// // console.log(obj.valueOf());
// let a = obj.valueOf()
// console.log(obj.valueOf());


//Constructore


// function persion(name, address) {
//     this.name = name
//     this.address = address
// }

// let ravi = new persion("Ravi", "Nelamangala")
// persion.prototype.age = 18;
// console.log(ravi);

//inheritance
//

//object is mutsble
// let a = {
//     name: "hello",
//     age: "",
//     set demo(value) {
//         this.age = value;
//     }
// }
// a.demo = 10;
// for (const x in a) {
//     console.log(a[x]);
// }
// let x = a
// x.name = "haiii"
// console.log(a);
// console.log(x);

// console.log(a.name);
// console.log(a["name"]);
// console.log(a.details());


// console.log(a);


let a = [1, 2, 3, 4, 5, 6, 39, 8, 9, 0]
for (const b in a) {
    console.log(a[b]);
}
