//VARIABLES NECESARIAS
var numeroInicial1 = 1;
var numeroInicial2 = 1;
var repeticionesHechas = 0;



var solucion = [numeroInicial1,numeroInicial2];

var numRepe = prompt("¿Cuantas veces quieres repetir el proceso?\n\tIntroduzca un NUMERO");
//pedimos el numero por pantalla

Sucesion(numeroInicial1,numeroInicial2);

document.getElementById('resultado').innerHTML = solucion;

console.log(solucion)

function Sucesion(numero1, numero2) {

    let numeroSiguiente = (numero1 + numero2) + 1;

    solucion.push(numeroSiguiente);

    repeticionesHechas++;

    if (numRepe > repeticionesHechas){

        Sucesion(numero2, numeroSiguiente);
    }

}
