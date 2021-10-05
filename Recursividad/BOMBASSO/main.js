const FILAS = 9
const COLUMNAS = 13
var contadorRepeticiones;

var minas;

function generarArray(filas, columnas) {

    let minas = [];
    for (let i = 0; i < filas; i++) {
        minas.push(new Array());
        for (let j = 0; j < columnas; j++) {
            minas[i].push("⬜️");
        }
    }

    return minas;
}


/**
 * Metodo que acciona el programa entero
 */
function activarMinas() {

    contadorRepeticiones = 0;
    minas = generarArray(FILAS, COLUMNAS);

    //colocamos la primera mina
    let fila = generarCoordenada(FILAS, 0);
    let columna = generarCoordenada(COLUMNAS, 0);
    colocarMina(fila, columna);

    genera_tabla();
}

/**
 * Metodo que introduce una tabla en lenguaje HTML
 */
function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < FILAS; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < COLUMNAS; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(minas[i][j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}

function generarCoordenada(max, min) {
    return Math.floor((Math.random() * (max - min)) + min);

}

/**
 * Metodo que comprueba que la posicion seleccionada
 * no tenga a su alrededor ninguna mina(y que no haya una mina en dicha posicion)
 * en direccion cardinal solo
 * @param {Number} x x de la matriz
 * @param {Number} y y de la matriz
 * @returns true = posicon valida | false = posicion no valida
 */
function comprobarPosicion(x, y) {
    //miramos si no hay una mina en la posicion
    if (minas[x][y] != "☢️") {
        //comprobamos las contiguas
        if (arriba(x, y) && abajo(x, y) && izquierda(x, y) && derecha(x, y)) {
            return true;//validamos la posicion
        }
    }
    return false;
}

/**
 * Metodo que mira arriba de la posicion indicada para comprobar
 * que no haya una mina en la continua
 * @param {Number} x x de la matriz
 * @param {Number} y y de la matriz
 * @returns true = no hay nada | false = hay mina
 */
function arriba(x, y) {

    if (x > 0) {

        if (minas[x - 1][y] == "⬜️") {
            return true;
        }
    } else {
        return false;
    }
}
/**
 * Metodo que mira abajo de la posicion indicada para comprobar
 * que no haya una mina en la continua
 * @param {Number} x x de la matriz
 * @param {Number} y y de la matriz
 * @returns true = no hay nada | false = hay mina
 */
function abajo(x, y) {

    if (x < FILAS - 1) {

        if (minas[x + 1][y] == "⬜️") {
            return true;
        }
    } else {
        return false;
    }
}
/**
 * Metodo que mira a la izquierda de la posicion indicada para comprobar
 * que no haya una mina en la continua
 * @param {Number} x x de la matriz
 * @param {Number} y y de la matriz
 * @returns true = no hay nada | false = hay mina
 */
function izquierda(x, y) {

    if (y > 0) {

        if (minas[x][y - 1] == "⬜️") {
            return true;
        }
    } else {
        return false;
    }
}
/**
 * Metodo que mira a la derecha de la posicion indicada para comprobar
 * que no haya una mina en la continua
 * @param {Number} x x de la matriz
 * @param {Number} y y de la matriz
 * @returns true = no hay nada | false = hay mina
 */
function derecha(x, y) {

    if (x < COLUMNAS - 1) {

        if (minas[x][y + 1] == "⬜️") {
            return true;
        }
    } else {
        return false;
    }
}

/**
 * Metodo que cloca una mina en una posicion determinada
 * de forma recursiva
 * @param {Number} x coordenada x de la matriz
 * @param {Number} y coordenada y de la matriz
 */
function colocarMina(x, y) {

    minas[x][y] = "☢️";//colocamos la mina

    let posicionErronea = true; // true => no es buena coordenada | false => buena coordenada
    let numRepeticionesLocales = 0;
    do {
        //generacion de la coordenada
        let fila = generarCoordenada(FILAS, 0);
        let columna = generarCoordenada(COLUMNAS, 0);

        //miramos siu la posicion es valida
        if (comprobarPosicion(fila, columna)) {
            posicionErronea = false;//cerramos el bucle do while
            finBucle(fila, columna);//accedemos a la parte de recursividad
        }
        numRepeticionesLocales++
    } while (posicionErronea | numRepeticionesLocales < 58);
}

/**
 * Metodo que determina el camino que tomara la recursividad para hacer la misma
 * lo mas eficiente posible
 * @param {Number} x x de la amtriz
 * @param {Number} y y de la matriz
 */
function finBucle(x, y) {

    //si son todas las posibles
    if (document.getElementById("repeticiones").value == "posibles") {

        //miramos que haya posibles
        if (posibles()) {
            //y tiramos de la suerte para generar la siguiente mina
            colocarMina(x, y);
        }
    } else {

        //si no, añadimos una repeticion y si esta en las repeticiones permitidas colocamos otra mina
        contadorRepeticiones++
        if (contadorRepeticiones < document.getElementById("repeticiones").value) {
            colocarMina(x, y)
        }

    }
}

/**
 * metodo que busca si en la matriz aun hay huecos disponibles
 * para introducir una mina
 * @returns true = hay espacios validos para poner mina | false = no hay espacios posibles
 */
function posibles() {

    for (let i = 0; i < FILAS; i++) {
        for (let j = 0; j < COLUMNAS; j++) {
            
            if (minas[i][j]=="⬜️" && comprobarPosicion(i,j)) {
                return true;
            }
        }
    }
    return false;
}