// Primitive (7 types)

const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// Non Primitive (Reference)
// array, objects, functions

const heroes = ["shaktiman", "nagraj", "doga"];

let obj = {
  name: "Ansh",
  rollNo: 34,
};

console.log(obj.name);
console.log(obj.rollNo);

function myFunction() {
  console.log("Hello Javascript");
}

myFunction();
