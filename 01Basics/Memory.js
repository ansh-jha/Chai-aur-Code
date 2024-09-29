// There are basically 2 types of memory in JS
// stack (primitive) , Heap (non primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "ansh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
