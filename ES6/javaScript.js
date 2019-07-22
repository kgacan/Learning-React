



// const cars = [
//     {brand:"Ford",price:500,available:2,type:"Sport car"},
//     {brand:"Nissan",price:200,available:5,type:"Wagon"},
//     {brand:"Chevy",price:300,available:4,type:"Sport car"},
//     {brand:"Porsche",price:100,available:0,type:"Urban"}
// ]


// const brands = cars.reduce(function(start, car){
//     start.push(car.brand)

//     return start
// },[])


// console.log(brands);



//--------------------------------------


// const computers = [
//     {type:'Laptop',price:124, os:'Windows'},
//     {type:'Desk',price:124, os:'Mac'},
//     {type:'Desk',price:124, os:'Windows'},
//     {type:'Laptop',price:124, os:'Mac'},
//     {type:'Laptop',price:124, os:'Windows'},
//  ];

//  let osTypes = computers.reduce(function(start, item){

//     return item.os === 'Mac'?{mac:start.mac+1, windows:start.windows}:
//     {mac:start.mac, windows:start.windows+1}

//  }, {mac:0,windows:0})

//  console.log(osTypes);

//----------------------------------------

// const value = (name, age)=>{
//     return `I am ${name} and i have ${age}`
// }

// console.log(value("James",45))


//----------------------------------------------------------


// const value = (x,y)=> x+y;

// console.log(value("James",45))

//----------------------------------------------------


// const value = (x,y)=> x+y;

// console.log(value(1,2))


//---------------------------------------------------

// const value = x => x+10;

// console.log(value(10))

//---------------------------------------------------

// const cars ={
//     brands:['Ford','Audi','BMW'],
//     category:'Sport car',
//     message: function(){
//         let $this=this
//         $this.brands.map(function(brand){
//             console.log(`${brand} is a ${$this.category}`)
//         })
//     }
// }
// cars.message();


// const cars ={
//     brands:['Ford','Audi','BMW'],
//     category:'Sport car',
//     message: function(){
//         // let $this=this
//         this.brands.map((brand)=>{
//             console.log(`${brand} is a ${this.category}`)
//         })
//     }
// }
// cars.message();

//---------------------------------------------------


// var names= ["James","Ron","Lisa","Tommy"];

// var randomName = function(items){
//  return items[Math.floor(Math.random()*items.length)]
// }

// var randomNumber = function(maxNumber,minNumber){
//  return Math.floor(Math.random() * maxNumber) + minNumber;
// }

// console.log(randomName(names) + " magic number is " + randomNumber(5,2))

//2

// var names= ["James","Ron","Lisa","Tommy"];

// var randomName = items => items[Math.floor(Math.random() * items.length)]

//  var randomNumber = (maxNumber,minNumber)=> Math.floor(Math.random() * maxNumber) + minNumber;

//  console.log(`${randomName(names)} magic number is ${randomNumber(5,2)}`)


//---------------------------------------------------



//Objects literals

// const request = (url, data) => {
//     $.ajax({method:'post', url:url, data:data});
// }

// request('https://request.com',{car:ford});

//2


// const request = (url, data) => {
//     $.ajax({method:'post', url, data});
// }

// request('https://request.com',{car:ford});



//---------------------------------------------------




// const createCharacter =(name, powers)=>{
//     return{
//         name,
//         powers,
//         getFriends(){
//             return 'Luis lane'
//         }
//     }
// }

// const characterObj = (createCharacter('Superman', 'Fly'));

// console.log(characterObj);

// console.log(characterObj.getFriends());



//---------------------------------------------------



// var name = "Francis";
// var lastname = "Jones"
// var age = 23;
// var obj
// function createObject(name,lastname,age){
//    obj = {
//        name:name,
//        lastname:lastname,
//        age:age,
//    }
//    return obj;
// }
// console.log(createObject(name,lastname,age))


//2


// var obj = (name,lastname,age)=>{
//     return {name,lastname,age}
// }


// console.log(createObject("Francis","Jones",23))


//---------------------------------------------------


// function cars(brand){
//     if(!brand) {
//         brand='Ford';
//     }
//     console.log(`My brand is ${brand}`)
// }

// cars()


//2

// function cars(brand = "Ford"){
//     console.log(`My brand is ${brand}`)
// }

// cars()


//---------------------------------------------------


// function args(arg1,arg2, arg3){
//     const arguments=[arg1,arg2, arg3];

//     console.log(arguments);
// }

// args("Val 1", "Val 2", "Val 3");


//2

// function args(...argumenti){
//     console.log(argumenti[0]);
// }

// args("Val 1", "Val 2", "Val 3");


//3

// function args(...argumenti){
//     console.log(`My name is ${argumenti[0]}, i am ${argumenti[1]}, my eyes are ${argumenti[2]}`);
// }

// args("Kemal", 20, "green");


//---------------------------------------------------



// const brands =["Ford", "Nissan"];
// const otherBrands =["Audi", "BMW"];

// // const newArray = brands.concat(otherBrands);
// // newArray.push("Other brand");

// const newArray =[...brands, ...otherBrands, "Other brand"];

// console.log(newArray);


//----------------------------------------------------

// function totalDistance(distance1,distance2,distance3){
//     var distances = [distance1,distance2,distance3]
//     var total = 0;
//     for(var i = 0; i < distances.length;i++){
//         total += distances[i]
//     }
//     return total;
//  }
//  console.log(totalDistance(200,100,200))




//  function showItems(arg1,arg2,arg3){
//     var arr = [arg2,arg3].concat(arg1)
//     console.log(arr)
//  }
//  showItems(["dogs","cats"],"turtles","sharks");


//  function showItems(arg1,...arg2){

//     let newArray = [...arg1, ...arg2];
//     console.log(newArray);
//  }
//  showItems(["dogs","cats"],"turtles","sharks");





/***********************CLASSES***************************/


// function Car(){}

// var car = new Car();

// Car.prototype.status = 'New';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function(){
//    console.log('available');
// }

// var ford = new Car();

// console.log(ford.__proto__);


//2

// class Car{
//    constructor(options){
//       this.status=options.status,
//       this.wheel=options.wheel,
//       this.avail=options.avail
//    }
// }

// var car = new Car({
//    status:'New',
//    wheel:4,
//    avail: ()=>{console.log('avail')}
// })

// console.log(car);

//3


// class Car{
//    constructor({status,wheel,avail}){
//       this.status=status,
//       this.wheel=wheel,
//       this.avail=avail
//    }
// }

// var car = new Car({
//    status:'New',
//    wheel:4,
//    avail: ()=>{console.log('avail')}
// })

// console.log(car);






//----------------------------------------------------



// class Car{
//    constructor(){
//       this.condition='New',
//       this.wheel=4,
//       this.avail=()=>{console.log('avail')}
//    }
// }

// var car = new Car();
// var ford = new Car();

// ford.color = 'red';

// console.log(ford);


//2


// class Car{
//    constructor(){
//       this.condition='New',
//       this.wheel=4,
//       this.avail=()=>{console.log('avail')}
//    }

//    //function available only for instance of car
//    otherFunction(){
//       console.log('hey');
//    }
// }

// class Ford extends Car{
//    constructor(){
//       super();
//    }
// }

// var car = new Car();
// var ford = new Ford();

// ford.color = 'red';

// console.log(ford);





//64----------------------------------------------------
//Destructuring


//ES5 example

// var user={
//    name:"Kemal",
//    lastname:"Gacan",
//    age:26
// };

// var name = user.name;
// var lastname = user.lastname;
// var age = user.age;

// console.log(name);
// console.log(lastname);
// console.log(age);



//2 ES6 translate


// const user={
//    name:"Kemal",
//    lastname:"Gacan",
//    age:26
// };

// const {name} = user;
// const {lastname} = user;
// const {age} = user;

// console.log(name);
// console.log(lastname);
// console.log(age);



//3 



// const user={
//    name:"Kemal",
//    lastname:"Gacan",
//    age:26
// };

// const {name, lastname, age} = user;

// console.log(name);
// console.log(lastname);
// console.log(age);



//4



// const user={
//    name:"Kemal",
//    lastname:"Gacan",
//    age:26
// };

// const message = ({name, lastname, age}, salute)=>{
//    console.log(`My name is ${name} ${lastname}, age ${age} and ${salute}`);
// }

// message(user, 'hey');



//65----------------------------------------------------





// const cars = [
//    'camaro',
//    'nova',
//    'A4'
// ]

// //const camaro = cars[0];

// const [camaro,...rest] =cars;

// console.log(rest);





//66----------------------------------------------------


// const users = [
//    {name:'Francias', lastname:"Jones", age:26},
//    {name:"Martha", lastname:"Smith", age:20},
//    {name:"Helen", lastname:"Neron", age:16}
// ];

// //const lastname = users[0].lastname;

// const [{lastname}]= users;

// console.log(lastname);



//2


// const users = {
//    names:['Francias',"Martha","Helen"]
// }

// const {names:[name1, name2]} = users;


// console.log(name2);






//67----------------------------------------------------



// function createCar({type, brand, model, color, year}){

// }

// const car ={
//    brand:"ford",
//    model: "focus",
//    color:"red",
//    year:2015,
//    type:"fast"
// };

// createCar(car);




//69----------------------------------------------------


//Unresolved or Pending
//Resolved or Fulfiled
// Rejected

// //1
// let promise = new Promise((Resolved, Rejected)=>{
//    Resolved();
// });

// console.log(promise);



// //2
// let promise = new Promise((Resolved, Rejected)=>{
   
//    setTimeout(()=>{
//       Resolved();
//    },5000)

// });

// console.log(promise);


// //3
// let promise = new Promise((Resolved, Rejected)=>{
   
//    setTimeout(()=>{
//       Resolved();
//    },5000)

// });

// promise.then(()=>{console.log('finished')});



// //4
// let promise = new Promise((Resolved, Rejected)=>{
   
//    setTimeout(()=>{
//       Resolved();
//    },5000)

// });

// promise
//    .then(()=>{console.log('finished')})
//    .then(()=>{console.log('finished 2')});


// //5
// let promise = new Promise((Resolved, Rejected)=>{
   
//    setTimeout(()=>{
//       Rejected();
//    },5000)

// });

// promise
//    .then(()=>{console.log('finished')})
//    .then(()=>{console.log('finished 2')})
//    .catch(()=>{console.log('damn')});





//70----------------------------------------------------


// //1
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(url);



// //2
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// console.log(fetch(url)); 


// //3 
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(url)
//    .then(response=>response.json())
//    .then(data=> console.log(data)); 


// //4
// //PS: url is not correct
// const url = "https://jsonplacehoadsasaxxaxslder.typicode.com/posts/1";

// fetch(url)
//    .then(response=>response.json())
//    .then(data=> console.log(data))
//    .catch(error=>console.log('fucked up', error));



// //5
// //url is correct but post doesnt exist
// const url = "https://jsonplaceholder.typicode.com/posts/32423434234";

// fetch(url)
//    .then(response=>response.json())
//    .then(data=> console.log(data)); 





//71----------------------------------------------------


// const url = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(url, {method:'GET'})
//    .then(response=>response.json())
//    .then(data=> console.log(data))
//    .catch(error=>console.log('fucked up', error));


// //2
// const url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url, {
//    method:'POST',
//    headers: {
//       'Content-type': 'aplication/json'
//    },
//    body: JSON.stringify({title:'some dum title'})
// })
//    .then(response=>response.json())
//    .then(data=> console.log(data))
//    .catch(error=>console.log('fucked up', error));






//72----------------------------------------------------



//1
// console.log('foo'.repeat(3));


//2
// const word = "camera";
// console.log(word.startsWith("cam"));

// const word = "camera";
// console.log(word.startsWith("am",1));

// const word = "camera";
// console.log(word.endsWith("era",6));

// const word = "camera";
// console.log(word.includes("ame"));

// const word = "camera";
// console.log(word.includes("me",2));




//73----------------------------------------------------


// console.log(Number.isSafeInteger(200))
// console.log(Number.isSafeInteger(43))
// console.log(Number.isSafeInteger(0.34231234123412124))
// console.log(Number.isSafeInteger(0,4342))


// //2
// console.log(Number.isInteger(200))
// console.log(Number.isInteger(-10000))
// console.log(Number.isInteger(0.124))



//3
// console.log(Math.trunc(200.2))
// console.log(Math.trunc(-10000.2222))
// console.log(Math.trunc(-0.124))




