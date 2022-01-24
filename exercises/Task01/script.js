
let array = [];
for(let num = 1; num <= 1000; num++){
    if (num % 3 === 0){
        array.push(num);
    }
}
console.log(array);

let array1 = [];
for(let num1 = 1; num1 <= 1000; num1++){
    if(num1 % 2 === 0 && num1 % 4 === 0){
        array1.push(num1);
    }
}
console.log(array1);

let array2 = [];
for(let num2 = 1; num2 <= 1000; num2++){
    if (num2 % 10 === 1){
        array2.push(num2);
    }
}
console.log(array2);