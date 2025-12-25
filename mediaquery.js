
const name = "MIKEY";

var city="Bengaluru";
let a = true ;
let age =19;
console.log(name,age,city);

console.info(name,age,city); // for informational message
console.warn(name,age,city); // for warning message
// console.debug();


console.log("%cMIKEY","background-color:white;color:red;font-size:40px;");
let place="India";
if(age&&place){
    console.log("Both exists"); // for "and logical"
}

if(age||place){
    console.log("One exists"); //  for "or logical "
}
if(age&&place||name){
    console.log("All exists"); // for "and logical" and "or logical"
}

function hello() {
    console.log("hello world");

}
hello()
function greet(){
  console.log("Hello, Mikey !");
}
greet();

function add(x,y){
    // function with parameters
    let result;
    result = x + y;   
    console.log(result);             
    
}
add(5,10); // function call with arguments

function add(x,y){
    // function with parameters and return type
    let result;
    result = x + y;   
    // console.log(result);   
    return result
    
}
// let addresult = add(5,10)
// console.log(addresult);    // function call with arguments

console.log(add(5,10)); // function call with arguments after return type



function add(x,y){
    // function with parameters
    let result;
    result = x + y;   
    // console.log(result);   
    return result
    
}
let addresult = add(5,10)
const arr = []                     // empty array - defining an array (an array is an object)
arr.push(add(7,8))                 // pushing value into array(push is function to add value into array)
arr.push(add(2,3))                 // pushing value into array
arr.push("Mikey")                  // pushing value into array
console.log(addresult,arr);        // function call with arguments after return type and with array
console.log(arr[1]);               // accessing 1st indexing n element of array
arr.pop();                        // removing last element of array (pop is function to remove last element ofarray)
console.log(arr[arr.length-1]);    // number of elements in an array (length is property of array)


// objets

const car = {                   // defining an object
    color:"red",
    make:"toyota",
    year: 2023,
// methods in objects
start: function() {
    console.log("car started");
},
drive: function() {
    console.log("car is driving");

},
repairing: function(who) {
    console.log("at "+who);
},
};
car.start();
console.log(car);               // accessing object
console.log(car.color);          // accessing color property of object
car.year = 2024;                   // modifying year property of object
console.log(car.year);           // accessing modified year property of object
console.log(car["color"]);        // accessing color property of object using bracket notation
car['color'] = "blue";          // modifying color property of object using bracket notation
console.log(car['color']);       // accessing modified color property of object using bracket notation
car.drive();                    // calling drive method of object
car['name'] = "Mikey's car"; // adding new property to object using bracket notation
console.log(car['name']);       // accessing new property of object using bracket notation
console.log(car.chessies);     // accessing non-existing property of object (undefined bcz it doesn't exist)
car.repairing("mechanic");     // calling repairing method of object with argument
delete car.repairing;               // deleting make property of object
console.log(car);               // accessing object after deleting repairing method

// let a=10;
// let b=20;
// console.log(a) 

