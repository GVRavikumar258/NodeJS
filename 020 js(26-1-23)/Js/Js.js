
//prototype chining
// let a = {
//     name2: "depack",
//     empid: 123
// }
// let b = {
//     sal: 20000,
// }
// let c = {
//     name: "chiranth"
// }
// a.__proto__ = b;
// b.__proto__ = c;
// console.log(a.sal);
// console.log(a.name);

// class Persion {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     getDetails() {
//         console.log(`my name is ${this.name} and empid is ${this.id}`);
//     }
// }

// let manish = new Persion("manish", 123)

// // console.log(manish.getDetails());
// let a = manish.getDetails()
// console.log(a);

//inheritens

// class Persion {
//     constructor(name) {
//         this.name = name
//     }
//     demo() {
//         return `name of the persion : ${this.name}`
//     }
// }
// class Student extends Persion {
//     constructor(name, subject) {

//         super(name)
//         this.subject = subject
//     }
//     demo() {
//         return `${super.demo()},
//         my subject is ${this.subject}`
//     }
// }
// let kalpesh = new Student("kalpesh", "JS")

// console.log(kalpesh.demo());


let names = ["dinesh", "rakshith", "jayashree", "Jyalakshmi", "bharath", "nischal", "deepack", "chirath", "manish", "kalpesh", "siraj"]
let i = Math.floor(Math.random() * 10)
switch (names[i]) {
    case "dinesh":
        console.log(`his asewome hobby is watching web`);

        break;

    case "rakshith":
        console.log(`his asewome hobby is bick riding`);

        break;
    case "jayashree":
        console.log(`her asewome hobby is watching movies`);

        break;
    case "Jyalakshmi":
        console.log(`her asewome hobby is dansing`);

        break;
    case "bharath":
        console.log(`his asewome hobby is watchig movies`);

        break;
    case "nishal":
        console.log(`his asewome hobby is lising music`);

        break;
    case "deepack":
        console.log(`his asewome hobby is lising music`);

        break;
    case "chirath":
        console.log(`his asewome hobby is coocking`);

        break;
    case "manish":
        console.log(`his asewome hobby is reading newse paper`);

        break;
    case "kalpesh":
        console.log(`his asewome hobby is reading singing`);

        break;
    case "siraj":
        console.log(`his asewome hobby is reading singing`);

        break;

    default: console.log(`invali number`);
        break;
}