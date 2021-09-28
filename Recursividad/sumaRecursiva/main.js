/*
Escriba una función recursiva que calcule y devuelva la suma de todos los elementos de una matriz,
donde la matriz y "la posicion" se dan como parámetros.

sumatorio (array, posicion)
*/

// VARIABLES NECESARIAS
var suma = 0;
var contadorPosicion = 0;

/**
 * Metodo que hace la suma de todos los numeros que hay en un array
 * @param {Number[]} array Array con los numero que se van a sumar
 * @param {Number} posicion Contador que indica la posicion en el array
 * @returns Suma total de todo el array
 */
function sumatorio(array, posicion) {
    
    if (posicion < array.length) {
        suma += array[posicion];
        posicion++;
        sumatorio(array,posicion);
    }

    //se resetea el contador
    contadorPosicion = 0;

    return suma;
}

/**
 * Funcion que acciona todo el programa
 */
function array() {
    
    //captamos la longitud e instanciamos el array
    let longitud = document.getElementById("logitud").value;
    let numeros = [];


    //creamos un bucle para rellenar el array
    for (let i = 0; i < longitud; i++) {
        //lo rellenamos aleatoriamente
        numeros.push(generarNumero(1,11));
    }

    //sustituimos los valores en los parrafos correspondientes
    document.getElementById("array").innerHTML = numeros;
    document.getElementById("sumaArray").innerHTML = sumatorio(numeros, contadorPosicion);
}

/**
 * Genera un numero aleatorio entre dos valores, escluyendo el valor maximo
 * Math.floor(); da el valor truncado
 * @param {Number} min Numero minimo para generar
 * @param {Number} max Numero minimo para generar
 * @returns Numero aleatorio entre dos rangos (excluyendo el maximo)
 */
function generarNumero(min,max) {return Math.floor(Math.random() * (max - min)) + min;}