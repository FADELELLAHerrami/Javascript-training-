let ages = [15,12,47,58,4,2,55,7];


const newAges = ages.reduce((accumulateur,age)=>{
    return accumulateur + age;
},0)

console.log(newAges); // ==> 200