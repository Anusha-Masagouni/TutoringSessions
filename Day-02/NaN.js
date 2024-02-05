let a = 5;
let b = "Value";
console.log(a * b);

// isNaN() Example
console.log( NaN == NaN)
if(!isNaN(a * b)){
    console.log("Valid");
}else{
    console.log("Invalid");
}
console.log((a * b) == NaN);

// if(isNaN(a * b) === false){

// }

// isFinite()
console.log("***********")

let i = 5;
let j = "value";
console.log(isFinite(i * j));
console.log(isFinite(5.5 * -4));
// console.log(isFinite(a * b));

