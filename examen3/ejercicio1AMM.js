const array1 = [5, 12, 8, 130, 44];
const array2 = [5, 8, 130, 44];

console.log(array1.find(numeroA1 => numeroA1>10 && array2.find(numeroA2 => numeroA2 == numeroA1)));