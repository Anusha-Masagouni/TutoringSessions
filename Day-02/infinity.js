// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// console.log(9000);

// console.log(9e4);

// // e & 0000
// // 1 & 0000

// // 9 * 1 & 0000

// console.log(-9e400);

function checkInfinity(num){
    //negative Infinity
    if(num === Number.NEGATIVE_INFINITY){
        return "Negative Infinite Value";
    }else{
        num = num * 2;
        return num;
    }
}
console.log(checkInfinity(-9e400));
console.log(checkInfinity(Number.NEGATIVE_INFINITY));