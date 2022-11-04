
//objects are not / by default iterable.
// // Attempting to use for/of on regular objects throws a TypeError at runtime
// let o ={x:1,y:2,z:3};
// for (let element of o){
//     console.log(element);

// }
//Iterating objects can use for/in loop or use for/of with Object.keys() method
 let o ={x:1,y:2,z:3};
 let keys="";
 for(let k of Object.keys(o)){
    keys+=k;

 }
 console.log(keys);
// Iterating through their corresponding vlues

let sum =0;
for(let v of Object.values(o)){
    sum+=v;
}
console.log(sum);
//Interested in both the keys and values of an objects property
//for/of with Object.entries() and destructuring assignment-unpacks the inner arrays into individual variables
 let pairs="";
 for(let [k,v] of Object.entries(o)){
    pairs+=k+v;

 }
 console.log(pairs);
 // for/of with strings
 let frequency={};// empty object 
 for( let letter of "mississippi"){
       if(frequency[letter]){
        frequency[letter]++;
       }
       else{
        frequency[letter]=1;
       }
 }
console.log(frequency);
// for/of with set and map
let text = "Na na na na na na na na Batman!";
let wordSet= new Set(text.split(" "));
let unique=[];
for(let word of wordSet){
    unique.push(word);

}
console.log(unique);
