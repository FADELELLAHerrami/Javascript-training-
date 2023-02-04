let ages = [15,12,47,58,4,2,55,7];

const newages = ages.filter( age => age >= 47 )
console.log(newages);// ==> [ 47, 58, 55 ]


let users = [
    {name: "ali", active: false},
    {name: "mohammed", active: true},
    {name: "ibrahim", active: false},
    {name: "ahmed", active: true},
    {name: "taha", active: false},
    {name: "jabrane", active: true},
]

let newUsers = users.filter(user=>{
    return user.active == false;
})
console.log(newUsers);
// ==>
/*
[
  { name: 'ali', active: false },
  { name: 'ibrahim', active: false },
  { name: 'taha', active: false }
]
*/
newUsers.forEach(user=>console.log(user.name));
// ==>
/*
    ali
    ibrahim
    taha
*/
