let score = "Ansh";

console.log(typeof score); // string
console.log(typeof score); // string

// conversion into number from any datatype
let valueInNumber = Number(score);
console.log(valueInNumber); // value -> NaN
console.log(typeof valueInNumber); // number

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0

let isLoggedIn = "Ansh";

let isBooleanLoggedIn = Boolean(isLoggedIn);
console.log(isBooleanLoggedIn);

// "Ansh" -> true
// "" -> false
// 1 -> true , 0 -> false

let number = 33;

let someNumber = String(number);
console.log(someNumber);
console.log(typeof someNumber);
