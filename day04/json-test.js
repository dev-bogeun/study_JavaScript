let user = {id: "hds", pw: "1234", name: "한동석"};
let userJSON = JSON.stringify(user);

console.log(userJSON);
user = JSON.parse(userJSON);
console.log(user);