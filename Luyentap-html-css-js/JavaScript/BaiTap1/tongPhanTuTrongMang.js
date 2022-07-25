// Dùng vòng lặp tính tổng các ptu trong mảng
//Cách 1: vòng lặp for
function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        sum += mang[i];
    }
     
    return sum;
}
 
let mang = [1, 5, 9, 10];
console.log(sumArray(mang)); // 25

//Cách 2: vòng lặp while
function sumArray(mang){
    let sum = 0;
    let i = 0;
    while (i < mang.length){
        sum += mang[i];
        i++;
    }
    return sum;
}
 
let mang = [1, 5, 9, 10];
console.log(sumArray(mang)); // 25

//Dùng forEach
function sumArray(mang){
    let sum = 0;
    mang.forEach(function(value){
        sum += value;
    });
     
    return sum;
}
 
let mang = [1, 5, 9, 10];
console.log(sumArray(mang)); // 25

//Dùng map 
function sumArray(mang){
    let sum = 0;
    mang.map(function(value){
        sum += value;
    });
     
    return sum;
}
 
let mang = [1, 5, 9, 10];
console.log(sumArray(mang)); // 25