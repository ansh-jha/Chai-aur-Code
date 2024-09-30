let str = "Ansh";
console.log(str);

// string creation using new keyword. We pass our argument in parameter
const gameName = new String("Ansh-Jha");
console.log(gameName[0]);
console.log(gameName.__proto__);

// string methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(2, 4);
// console.log(anotherString);

const newStringOne = "     ansh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Trims the whitespaces in a string

const url = "https://www.google.com/user%20name";

console.log(url.replace("%20", "-"));
console.log(url.includes("user"));

console.log(gameName.split("-"));

/* 
There are many more string methods.
For more details about string methods
go to -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
