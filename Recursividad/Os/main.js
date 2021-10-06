//VARIABLES NECESARIAS
var Os;
var base = 0;
var contadorO = 0;

//instancia de listeners
document.getElementById("genSec").addEventListener("click", crearSecuencia, false);
document.getElementById("BuscSec").disabled = true;
document.getElementById("BuscSec").addEventListener("click", buscar, false);

/**
 * Metodo que genera un aleatorio entre 0 y 1.
 * Para determinar si la letra sera una S u O
 * @returns O | S
 */
function generarLetra() {

    // devuelve o 0 o 1
    if (Math.floor((Math.random() * (2))) == 1) {
        return "S";
    } else {
        return "O";
    }
}

/**
 * metodo que genera un array con Os y Ss en su interior,
 * con las letras generadas de manera aleatoria 
 * @returns Array con O y S de manera aleatoria
 */
function generarOs() {

    let longitud = 20;
    Os = new Array();

    for (let i = 0; i < longitud; i++) {
        Os.push(generarLetra())
    }

    return Os;
}

function crearSecuencia() {
    document.getElementById("Array").innerHTML = generarOs();
    document.getElementById("BuscSec").disabled = false;
}

function buscar() {

    let inicio = buscarMasLarga(generarOs(), 0);
    let longitud = obtenerLongitud(inicio);

    document.getElementById("Respuesta").innerHTML = `La secuencia mas larda es de ${longitud} y empieza en la posicion ${inicio}`;
}

function buscarMasLarga(array, index) {

    //si esta aun en el array
    if (index < array.length) {
        
        //miramos si la posicion es una O
        if (array[inicio] == "0") {
            //sumamos una O al contador
            contadorO++
            //si el contador es mayor a la anterior longitud, se actualiza la longitud
            if (contadorO > longitud) {
                longitud = contadorO;
            }
        } else {
            //sino ponemos el contador a 0
            contadorO = 0;
        }

        //miramos en la siguiente posicion
        buscarMasLarga(array, index + 1);
    }
}

function obtenerLongitud(inicio) {
    let longitud = 0;
    for (inicio; inicio < Os.length; inicio++) {

        if (Os[inicio] == "S") {
            break;
        }
        longitud++;
    }
    return longitud;
}