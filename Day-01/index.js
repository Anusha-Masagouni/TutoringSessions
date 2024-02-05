// var 
// let 
// const


// var myvariable = "hello World"
// console.log(myvariable);

// let age = 25;
// let pi = 3.14;

// let x = true;
// let y = false
// let fruits = ["apple", "banana", "orange"]

// let person = {
//     name: "Anusha",
//     age: 30,
// }

// let x = 9;
// console.log(x);
// console.log(typeof x);


// function example(){
//     if(true){
//         var x = 5;
//         console.log(x);
//     }
//     console.log(x);
// }
// example();

// let 

// function exampleLet(){
//     if(true){
//         let y = 10;
//         console.log(y); //10
//     }
//     let y = 20;
//     console.log(y); //20
// }
// exampleLet();

//const

// function exampleConst(){
//     if(true){
//         const z = 15;
//         console.log(z);//15
//     }

//     const arr = [1, 2, 3];
//     arr.push(4);
//     console.log(arr); //[1, 2, 3, 4]
// }
// exampleConst();

// let b = "Hello World";
// console.log(b);
// console.log(typeof b);

//null

// let x = null;
// let y;
// console.log(x === y); 


// function a(){
//     let x = 10;
// }

// function b(){
//     console.log(x)
// }

// let x = 10;
// function a(){
//     x = x + 10;
// }
// function b(){
//     console.log(x);
// }

// a();
// b();


// console.log(x);
// var x = 9;

// var x;
// for(){

//     var x;
// }

//block scope
let z = 20;
function blockScopeExample(){
    let x = 10; //variable 'x' with block scope

    if(true){
        let y = 20; // block scope
        console.log("Inside if block: x =", ", y =", y);
    }
}
blockScopeExample();



