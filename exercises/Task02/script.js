
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function checkStrings(array){
    let arrayStrings = [];
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] === "string"){
            arrayStrings.push(array[i]);
            
        }
    }
    return arrayStrings;
}
let stringsArray = checkStrings(test);
console.log(stringsArray);

function checkNumbers(arraynums){
    let arrayNumbers = [];
    for (let i = 0; i < arraynums.length; i++){
        if(typeof arraynums[i] == 'number' && !Number.isNaN(arraynums[i])){
            arrayNumbers.push(arraynums[i]);
        }
    }
    return arrayNumbers;
}
let numbersArray = checkNumbers(test);
console.log(numbersArray);

function otherValues(arrayValues){
    let filterValuesArr = [];
    for (i = 0; i < arrayValues.length; i++){
        if(arrayValues[i]) {
            filterValuesArr.push(arrayValues[i]);
        }
    }
    return filterValuesArr;
}
let valuesArray = otherValues(test);
console.log(valuesArray);

