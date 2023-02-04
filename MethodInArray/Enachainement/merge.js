let users = [
    {name: "ali", active: false, note: 8},
    {name: "mohammed", active: true, note: 14},
    {name: "ibrahim", active: false, note: 15},
    {name: "ahmed", active: true, note: 11},
    {name: "taha", active: false, note: 16},
    {name: "jabrane", active: true, note: 10},
]


let myUsers = users.sort((a,b)=> b.note - a.note).filter(user => user.active).map(user => user.name).sort();

console.log(myUsers);