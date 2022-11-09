// for/in 
// let o={ x:1,y:2,z:3}
// let a =[],i =0;
// for(a[i++] in o){
//     for(let i in a){
//         console.log(i);
//     }
// }
// throw exception
function factorial (x) {
    // if the input argument is invalid ,throw an exception
    if(x<0) throw new Error("x must not be negative");
    let f;
    for(f=1;x>1;f*=x,x--);
    return f;
    
}
console.log(factorial(3));
// try/catch/finally
//try clause -defines the block of code whose exceptions are to be handled
//catch clause-block of statements  that are invoked when an exception occurs
//finally clause - clean-up code 
try {
    // Ask the uer to enter a number
    let n =Number(prompt("Enter a positive integer:"));
    // compute the factorial of the number ,assuming the input is valid
     let f = factorial(n);
     //Display the results
     alert(n +"!="+f)
} catch (ex) {
    alert(ex);
}