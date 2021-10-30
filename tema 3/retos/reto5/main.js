let frutas = ["aguacate", "pera", "manzana", "naranja", "tomate", "granada", "mango", "litchi", "nispero"];
let tropicales = ["aguacate", "mango", "litchi", "nispero"];
let tropicStock = [{ fruta: "aguacate", stock: 50 }, { fruta: "mango", stock: 10 }, { fruta: "litchi", stock: 20 }, { fruta: "nispero", stock: 25 }];

// frutas del array frutas que sean tropicales
let FrutasTopArrayFrutas = frutas.filter(fruta => tropicales.includes(fruta))
console.log(FrutasTopArrayFrutas)
// frutas del array frutas que NO sean tropicales
let FrutasNoTopArrayFrutas = frutas.filter(fruta => !tropicales.includes(fruta))
console.log(FrutasNoTopArrayFrutas)
//Nombre de las frutas con un stock mayor de 21
let stock21 = tropicStock.filter(alimento => alimento.stock > 21).map(alimento => alimento.fruta)
console.log(stock21);