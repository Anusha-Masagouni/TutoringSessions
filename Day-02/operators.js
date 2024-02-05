// let a = 10;
// let b = 5;

// console.log(a + b); // addition
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//'Assignment operators

let x = 5;
let y = 10;
// x = x + y;
x += y;
x -= y;
console.log(x);

//comparisons Operator 

let p = 10;
let q = "10";

console.log(p == q);
console.log(p === q);
console.log(p != q);
console.log(p > q);
console.log(p < q);
console.log(p >= q);
console.log(p <= q);

console.log('*********************');

let a = true;
let b = false;
console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //false

let age = 14;
let hasLicense = true;
//using AND operator to check both the conditions

if( age >= 18 && hasLicense){
    console.log("You are eligible to drive");
}else{
    console.log("you are not eligible to drive");
}

// Using OR operator

let isWeekend = true;
let isHoliday = false;
if(isWeekend || isHoliday){
    console.log("It's time to relax!");
}else{
    console.log("Back to work again!");
}

console.log("****************")

//combining AND & OR operator

let isSunny = true;
let temperature = 30;
if(isSunny && temperature < 25 || temperature < 5 && isSunny){
    console.log("Its a weather extreme");
}else {
    console.log("Enjoy the weather!");
}