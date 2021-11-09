var cars = ["Saab", "Volvo", "BMW", ["Honda", "Toyota", ["Lexus", "Mercedes", "Lada"], "Hyunday"]];
var carrakos = ["Chevrolet", "Tesla", "BMW", ["Honda", "Infiniti", ["Lexus", "Mercedes", "Kia"], "Hyunday"], ["Mazda", "Mercedes", "Jeep", ["KTM", "Nissan", "Isuzu"]]];


//Alguien sabe hacer una lista única de coches con los dos arrays (sin repeticiones)?
carrakos.flat(2).map(coche => { if (!cars.flat(2).includes(coche)) cars.push(coche) })
console.log(cars.flat(2));
//Alguien sabría decirme los coches de carrakos que no estén en cars?
console.log(carrakos.flat(2).filter(coche => !cars.flat(2).includes(coche)));


var cars = ["Saab", "Volvo", "BMW", ["Honda", "Toyota", ["Lexus", "Mercedes", "Lada"], "Hyunday"]];
var buddies = [{ firstName: "Chuck", lastName: "Norris", car: "Honda" }, { firstName: "Yakie", lastName: "Chang", car: "BMV" }, { firstName: "Bruce", lastName: "Lee", car: "Honda" }, { firstName: "Steven", lastName: "Seagal", car: "Lada" }];
//-Nombre y apellidos de los buddies que usan un Honda

//-Marcas utilizadas por los buddies

//-Marcas no utilizadas por los buddies.

//-Cuantas marcas han sido utilizadas

//-Cuantas marcas no han sido utilizadas
