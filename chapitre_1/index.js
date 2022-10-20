//afficher un message normale dans la console
console.log("errami Fadel Ellah");
//afficher une erreur dans la console
console.error("errami Fadel Ellah");
console.warn("errami Fadel Ellah");
/*commentaire dans plusieur lignes
commentaire dans plusieur lignes
commentaire dans plusieur lignes
commentaire dans plusieur lignes
commentaire dans plusieur lignes
*/
//string 
let email="fadelellaherrami@gmail.com"
//string concatenation
let firstName="ERRAMI";
let lastName="Fadel Ellah";
// la 1ière méthode
let name=firstName + " " + lastName ; 
console.log(name);
//la 2iéme méthode 
let name1=`${firstName} ${lastName}`;
console.log(name1);

//Getting characters
console.log(firstName[0]);//==>la console doit afficher le premier charactère dans la chaine de charactère firstName alors output est 'E'

//string lenght
console.log(firstName.length);//==>output est 6 qui est le nombre de charactère dans la chaine firstName

//string method
console.log(firstName.toLowerCase());//==>errami
console.log(lastName.toUpperCase());//==>FADEL ELLAH
console.log(email.indexOf('@'))//==> 16
console.log(email.lastIndexOf('l'));//==> 21
console.log(email.slice(0, 10));//==>fadelellah
console.log(email.substr(0,16));//==> fadelellaherrami
console.log(email.replace('errami','drissi'));//==>fadelellahdrissi@gmail.com
/* Remplacer tout les occurences par un charavtère */console.log(email.replace(/l/g,'z'));//==> fadezezzaherrami@gmaiz.com







const PI=3.14;
let radius= 10;

// operation + , - , / , * , ** , % 

console.log(radius / 4);// ==> 2.5
console.log(radius + 4);// ==> 14
console.log(radius - 4);// ==> 6
console.log(radius % 3);// ==> 1
console.log(radius ** 4);// ==> 10000

let like = 100;
console.log(100/'hhhhhh');// ==> NaN // Nan is an abbreviation of Not a Number 


//templates strings
let course = "learn javascript from scratch";
let insctrctor="Mohamed IDBRAHIM";
let students = 200;

//concaténation strings
console.log("course : " + course + "insctrctor : " + insctrctor + " students: " + students)

//templates strings
console.log(`course ${course} instructor ${insctrctor} ${students}`)

//HTML templates
    
console.log(`<h1>${course}</h1><h2>${insctrctor}</h2><h3>${students}</h3>`)


//Arrays
let courses = ['angular','react'];
courses[1]="reactJS";
console.log(courses);//==> ['angular', 'reactJS']
let random = ['angular',10,true];
console.log(random);// ==> ['angular', 10, true]
let result = random.join('-');
console.log(result);//==>angular-10-true
console.log(typeof(result));// ==> string
console.log(courses.indexOf('reactJS'));// ==> 1
console.log(courses.indexOf('laravel'));// ==> -1
courses.push('laravel');
console.log(courses);// ==> ['angular', 'reactJS', 'laravel']
courses.pop();
console.log(courses);// ['angular', 'reactJS']
courses.unshift('sveleteJS');
console.log(courses);// ==> ['sveleteJS', 'angular', 'reactJS']
courses.shift();
console.log(courses);// ==> ['angular', 'reactJS']


//undefined $ null

let variable;
console.log(variable , variable+1);// ==> undefined NaN

let variable1;
console.log(variable1 , variable+1);// ==> undefined 1

// Les opérateurs de comparaison 
// comparaison operators
// == , < , < , <= , >= , != , === , !==  
 

//conversion des types
let age ='22';
console.log(age + 21);//==> 2221
console.log(Number(age) + 21);//==> 43
let age1 = 22;
console.log(typeof(String(age1)));// ==> string
let age2=22;
console.log(Boolean(age2));// ==> true
console.log(Boolean(0));// ==> false
console.log(Boolean(-1));// ==> true
console.log(Boolean('0'));// ==> true
console.log(Boolean(''));// ==> false
console.log(Boolean(' '));// ==> true



// La comparaison strict
/* 
    == et != fait la comapraison juste par la valeur
    === et !== fait la comapraison juste par la valeur et le type
*/
let var1=21;
let var2='21';

console.log(var1==var2);// ==>true
console.log(var1===var2);// ==>false

// Structure de controle
//la boucle for 
for(let i=0;i<5;i++){
    console.log(i);//==> 0 1 2 3 4 
}

//la boucle while 
/*let i=0
while(i<5){
    console.log(i);
    i++;
}*///==> 0 1 2 3 4 

//la boucle while 
let i=0;
do{
    console.log(i);
    i++;
}while(i<5)//==> 0 1 2 3 4 

//le controle if & if else & if
let note=15;
if(note>=15){
    console.log("trés bien");
} 

//checker si un password contient 8 charactères
let password="hhhh";
if(password.length>8){
    console.error("password should be great than 8 charactères");
}
else if(password.length==8){
    console.log("password valid");
}
else console.error("password should be great than 8 charactères");


//les opérateurs logique and && et or || et l'opérateur de la négation


if(password.length<8  || !password.includes('@')){
    console.log("password invalid");
}
else if(password.length==8){
    console.log("password valid");
}
else console.error("password should be great than 8 charactères");



//break et continue dans les boucles 

let numbers = [10,82,45,65,78,11,32,564];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]==65){
        break;
    }
    console.log(numbers[i]);
}

// le controle switch case 

let typeSang = 'O';
switch(typeSang){
    case 'O':
        console.log('Le type de sang est O');
    case 'A':
        console.log('Le type de sang est A');
    case 'B':
        console.log('Le type de sang est B');
    case 'AB':
        console.log('Le type de sang est AB');
    default:
        console.log("Type de sang es invalid");
}


// La condition ternaire


age>=18?console.log("majeur"):console.log("Mineur");
// if(age>=18){
//     console.log("majeur");
// }else console.log("mineur");




// Les fonctions et les méthodes 

//c'est qui une fonction

//Déclaration d'une fonction

//Function déclaration
function errami(){
    console.log("slm ssi errami");
}
errami();
errami();
errami();
//dans les fonctions declaration on peut déclarer une fonction après son utilisation mais ce n'ai même pour les fonctions expressions



// function Expression
const fadel=function(){
    console.log("slm fadel ellah");
}


//les fonctions de type fléche ( arrow function ) 


// const surfaceCercle = function(rayon){
//     return 3.14*rayon**2;
// }

 const surfaceCercle = rayon=>{
     return 3.14*rayon**2;
 }
 const surfaceCercle2 = (rayon,hhh)=>{
    return hh*3.14*rayon**2;
}
const surfaceCercle3 = ()=>{
    return hh*3.14*rayon**2;
}
const surfaceCercle4 = (rayon,hhh)=>  hh*3.14*rayon**2;


//Closure CallBacks - foreach


let names2=['ahmed','ali','jamal','mohamed','brahim','taha','abdelah'];
names2.forEach((name,index)=>{
        console.log(index,name);
})

//exemple 

let names3=['ahmed','ali','jamal','mohamed','brahim','taha','abdelah'];
let html=``;
const persons= function(name,index){
    html+=`<li>${name}</li>`
}
names3.forEach(persons)
let myElement = document.querySelector(".persons");



myElement.innerHTML = html;


//Les objet littéraux


//Création d'un objet javascript
let user ={
    firstName: "Fadel Ellah",
    lastName: "ERRAMI",
    age: 21,
    email: "erramifadelellah@gmail.com",
    active: true,
    courses: ["javascript","php","python","django"],
    //Déclarer des méthodes dans un objet(anonymous function) 
    login:function(){
        console.log(" hello user . ")
    },
    logout:function(){
        console.log(" goodBye user . ");
    },
    //une autre manière pour déclarer des méthodes dans un objet
    login1(){
        console.log(" hello user . ")
    },
    logout1(){
        console.log(" goodBye user . ");
    },
    //arrow function 
    login2:()=>{
        console.log(" hello user . ")
    },
    logout2:()=>{
        console.log(" goodBye user . ");
    },
    //Le mot réservé this
    showCourses:function(){
        console.log(this.courses);
    },
    showActive(){
        console.log(this.active);
    },
    showFirstName:()=>console.log(this.firstName),
}



//Récupérer les attributs d'un objet (get)
console.log(user.age);
console.log(user["age"]);
//Modification des attributs d'un objet (set)
user.email="fadelellaherrami@gamil.com";
user["email"]="fadelellahdrissi@gmail.com";
//ajouter des méthodes dans un objet
//Accéder à une méthode d'un objet
user.login();
user.logout();
user.login1();
user.logout1();
user.showCourses();// ==> ['javascript', 'php', 'python', 'django']
user.showActive();// ==> true
user.showFirstName// ==> undefined //==> car on ne peut pas écrire le mot this dans une méthode à fléche .




//Créer des objets dans un tableau

let user1 ={
    firstName: "Fadel Ellah",
    lastName: "ERRAMI",
    age: 21,
    email: "erramifadelellah@gmail.com",
    active: true,
    courses: [
        {title:"javascript",price:39},
        {title:"php",price:39},
        {title:"python",price:49},
        {title:"django",price:49},
    ],
    showCourses:function(){
        this.courses.forEach(course=>console.log(course.title,course.price));
    }
}

user1.showCourses();//==> output :: javascript 39 php 39 python 49 django 49






//Intéragir avec le DOM html
//Comprendre le DOM (document object model)
//the querySelector

const header=document.querySelector('h1');
const header1=document.querySelector('.primary');
const header2=document.querySelectorAll('.success');
console.log(header);//  ==>  <h1>DOM- document object modeld</h1>
console.log(header1);//  ==>  <p class="primary">para3</p>
console.log(header2);
//  ==>  NodeList(2) [p.success, p.success]
// 0
// : 
// p.success
// 1
// : 
// p.success
// length
// : 
// 2
// [[Prototype]]
// : 
// NodeList
header2.forEach(header=>console.log(header));

//Autre technique pour intéragir avec DOM


//get Element by id
const Header=document.getElementById("title");
console.log(Header);// ==> 

//get Elements by class
const division=document.getElementsByClassName("content");
console.log(division);//  ==>  HTMLCollection(2) [div.content, div.content]

//get Elements by tag name

const para = document.getElementsByTagName('p');
console.log(para);// ==>  HTMLCollection(3) [p.success, p.success, p.primary]


// Remarque :: on remarque que le résultat de getElementsByTagName et getElementByClassName est une collection , ce n'est pas un tableau
//alors on ne peut pas utiliser le fonction forEach avec ce résultat




//Changer et ajouter de contenu à la page 


const Header1=document.querySelector('#title');
console.log(Header1);// ==> h1#title
console.log(Header1.innerText);// ==> DOM- document object modeld // ==> Récupérer le contenu texte d'un tag html
console.log(Header1.innerHTML);// ==> DOM- document object modeld<p></p> // ==> Récupérer le contenu html de tag
Header1.innerHTML+="Javascript in bright coding"; 

const h2=document.querySelectorAll("h2");
h2.forEach(h2=>h2.innerHTML="errami");


//Récupérer et modifier l’attribue d’un DOM :

const anchor =document.querySelector("a");
console.log(anchor.getAttribute("href"));
anchor.setAttribute("href","https://web.facebook.com/");
anchor.innerText="Facebook";


let Para = document.querySelector("p");
Para.setAttribute("class","para");
Para.innerText="Fadel Ellah";
Para.setAttribute("style","color:yellow");
console.log(Para.getAttribute("class"));// ==> para
console.log(Para.getAttribute('style'));


//Changer les styles css : 

//Header.setAttribute("style","background:red");//==> le background est appliqué mais color ne sera pas éxisté
//==> la solution
Header.style.background="red";
Header.style.margin="15px";

// Ajouter et supprimer une classe depuis DOM :


const paragraphe = document.querySelector('span');
console.log(paragraphe.classList);//==> DOMTokenList [value: '']
paragraphe.classList.add('success');
console.log(paragraphe.classList);//==> DOMTokenList ['success', value: 'success']

paragraphe.classList.remove('success');
console.log(paragraphe.classList);//==> DOMTokenList [value: '']

paragraphe.classList.add('para');
console.log(paragraphe.classList);//==> DOMTokenList ['para', value: 'para']

const paragraphes=document.querySelectorAll('p');

paragraphes.forEach(paragraphe=>{
    if(paragraphe.innerText.includes("para")){
        paragraphe.classList.add('para');
    }
    
    else if(paragraphe.innerText.includes("success")){
        paragraphe.classList.add('success');
    }
})


//Handling parent & children DOM with js : 



let myDivision = document.querySelector('article>div');
console.log(myDivision);  
console.log(myDivision.children);//==> HTMLCollection(3) [h1, p, ul]
// convertir cette collection à un tableau
Array.from(myDivision.children).forEach(element=>console.log(element));

//Accéeder au parent de l'élément
console.log(myDivision.parentElement);//<article>…</article>
console.log(myDivision.parentElement.parentElement);//<body></body>
// Accéder au prochaine frère d'un élément
console.log(myDivision.nextElementSibling); // ==>  <div>Options</div>
// Accéder au dernirer frère d'un élément
console.log(myDivision.previousElementSibling); // ==>  <div>Options</div>



//AddEventListener – Event click :
let btn1=document.querySelector('button');
btn1.addEventListener("click",()=>console.log("clicked"));

let items=document.querySelectorAll('li');

// items.forEach(item=>item.addEventListener("click",e=>{e.target.style.textDecoration='line-through';}));




//Ajouter et supprimer un élément en js : 
const ul=document.querySelector('ul');
// ul.remove();
items.forEach(item=>item.addEventListener("click",(e)=>{console.log('je suis li');e.stopPropagation()}/*e.target.remove();*/));
btn1.addEventListener(
    "click",
    ()=>{
        // ul.innerHTML +="<li> java ee </li>"
        const liAajouter=document.createElement('li');
        liAajouter.textContent = "Laravel";
        ul.append(liAajouter);//à la fin de la liste
        ul.prepend(liAajouter);//l'ajout à la tête de la liste
    })




//Event propagation & délégation : 


//ul.addEventListener('click',()=>console.log('je suis ul'));

//si on clique sur li voici output ==> je suis li je suis ul
//pour éviter ce probléme


ul.addEventListener('click',(e)=>{console.log('je suis ul');});










