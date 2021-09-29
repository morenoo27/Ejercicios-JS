/*Tienes que contar cuantos elementos del array 1 no están en el array 2. Muestra el resultado por consola*/

//VRIABLES NECESARIAS
var arr1 = [9, 9, 8, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [2, 3, 4, 5, 6];

//variable GLOBAL
/*Si se mete dentro de la funcion(version anterior)
con el aray vacio, lo que devuelve sera la primera iteracion del bucle,
no el resultado final del mismo*/
var noRepetidos = [];

var contArray = 0;

document.getElementById("array1").innerHTML = arr1;
document.getElementById("array2").innerHTML = arr2;

function buscar() {
    document.getElementById("resultado").innerHTML = buscarNoRepetidos(arr1, arr2, contArray);
}

/**
 * Metodo que busca en un array si se encuentran los numeros que contiene un segundo array, 
 * filtra los que no se repiten, los almacena y devuleve en un tercer array aunxiliar
 * @param {Number[]} arrReferencia Array en el que buscaremos si se repiten los numeros
 * @param {Number[]} arrAComparar Arrayq ue contendra los que no se pueden repetir
 * @param {Number} indice contador que recorre el primer array
 * @returns Array con los numeros que no se repiten
 */
function buscarNoRepetidos(arrReferencia, arrAComparar, indice) {

    let seRepite = false; //false => no se repite | true => se repite

    //recorremos el segundo array para ver si
    //el numero de arrReferencia[indice] se 
    //encuentra en el
    for (let i = 0; i < arrAComparar.length; i++) {

        if (arrReferencia[indice] == arrAComparar[i]) {
            seRepite = true;//si hay uno igual cambiamos el boolean a true
            break;
        }
    }

    //miramos si no se preite, y si ya estamos fuera del array
    //(para que no nos meta un undefined en el array soluion)
    if (!seRepite && (indice < arrReferencia.length)) {
        noRepetidos.push(arrReferencia[indice]);
    }

    //si aun no hemos recorrido todo el array,
    //volvemos a ejecutar el metodo de nuevo
    if (indice < arrReferencia.length) {
        indice++;
        buscarNoRepetidos(arrReferencia, arrAComparar, indice);
    }

    return noRepetidos;
}
