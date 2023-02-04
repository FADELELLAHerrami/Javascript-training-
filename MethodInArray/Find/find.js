

let users = [
    {name: "ali", active: false},
    {name: "mohammed", active: true},
    {name: "ibrahim", active: false},
    {name: "ahmed", active: true},
    {name: "taha", active: false},
    {name: "moad", active: true},
    {name: "jabrane", active: true},
]
const newUser = users.find(user=> user.name.includes("moh"))// { name: 'mohammed', active: true }
console.log(newUser);


