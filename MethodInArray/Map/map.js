let ages = [15,12,47,58,4,2,55,7];

let result = ages.map(age => age+10);

console.log(result);//[ 25 , 22 , 57 , 68 , 14 , 12 , 65 , 17 ]


let users = [
    {name: "ali", active: false},
    {name: "mohammed", active: true},
    {name: "ibrahim", active: false},
    {name: "ahmed", active: true},
    {name: "taha", active: false},
    {name: "jabrane", active: true},
]

let newUsers = users.map(user=>{
    if(user.active == false){
        return{
            name: user.name.toUpperCase(),
            active: user.active,
        }
    }else return user;
})

console.log(newUsers);
// ==>
/*
        [
        { name: 'ALI', active: false },
        { name: 'mohammed', active: true },
        { name: 'IBRAHIM', active: false },
        { name: 'ahmed', active: true },
        { name: 'TAHA', active: false },
        { name: 'jabrane', active: true }
        ]
*/