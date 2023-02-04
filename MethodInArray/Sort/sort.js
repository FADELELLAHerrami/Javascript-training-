let ages = [15,12,47,58,4,2,55,7];
 ages.sort();

 console.log(ages);// ==> [ 12 , 15 ,  2 , 4 , 47 , 55 , 58 , 7 ]

 ages.sort((a,b)=>{
    if(a<b){
        return 1
    }else if(a>b){
        return -1;
    }else{
        return 0;
    }
 })

 console.log(ages);// ==> [ 58 , 55 , 47 , 15 , 12 ,  7,  4,  2 ]


 ages.sort((a,b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return 1;
    }else{
        return 0;
    }
 })
 console.log(ages);// ==> [ 2 ,  4 , 7 , 12 , 15 , 47 , 55 , 58 ]