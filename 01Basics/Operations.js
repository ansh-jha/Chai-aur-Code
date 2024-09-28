// concept of Coercion
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log("1" - 1); // 0
console.log(1 - "1"); // 0
console.log(2 - "11" + 11); // 2

/*
-> case for addition:
Note : pehle string aaya to baki sab number, string me convert ho jayega or addition operation hokar result string me milega.

Agar pehle number aaya to addition hoga as number but jaise hi koi string aayega, pichla added sara number string ho jayega aur string concat operation hokar result string me milega.
*/
