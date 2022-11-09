// creating object using new 
//The new operator creates and initializes a new object.
//A function invocation / a function used in this wayt is called a constructor 
// serves to imitialize a newly crated object.
 let o = new Object (); //  create an empty  object :same as {}
 let a = new Array();// create an empty array :same as []
 let d = new Date();//craete a  date object representing the current time 
 let r = new Map();// create a Map object  for key/value mapping
 // prototypes 
 // object prototypes property
 //inherits from object.prototype
 // prototype chains.
 // object.create()
 let o1 =Object.create({x:1,y:2});// o1 inherits properties x and y 
 console.log(o1.x+o1.y);
 let o3 =Object.create(Object.prototype);// o3 is like {} or new Object()
  
let o4 = {x:"  dont chnage this vaue"};
// library.function(Object.create(o4));// Guard against accidental modifications
// querying and setting object properties.
let book ={
    author:"patrick",
    title:"I dont give a nuts dawg"
}
let author =book.author;

console.log(author);
// objects as associative array
// associative arrays are basically object in javascript where indexes are replaced by user-defined keys.'
// Dont have a lenght property and cannot be transversed 
// var arr ={ key1:'value1',key2:'value2'}
var arr ={"companyName":'octopuss',"ID":123};
//
let o5={} // o inherits object methods from object.prototype
o.x=1; // and now it has an own property x
let p =Object.create(o);// p inherits properties from o and Object.prototype
p.y =2; // and has an own property y.
let q =Object.create(p); // q inherits properties from p and o
q.z=3; // .. object.prototypes an has an own property z.
console.log(q.x+q.y); // 3; x and y are inherited from o and p
let unitCircle={r:1}; // An object to inherit from 
let c =Object.create(unitCircle);// c inherits the property r 
c.x=1;c.y=1; // c defines two properties of its own 
c.r=2; // coverrides its inherited property 
console.log(unitCircle.r); // The prototype is not affected