var posibilidades = ["O", "O", "O", "S", "S"]

/**
 * Metodo que devuelve, del array de posibilidades,
 * la letra O o S, con mas 
 * @returns O | S
 */
let letraAleatoria = () => posibilidades[Math.round(Math.random() * (posibilidades.length - 1))]; // 0|1 * (max - min + min)

//llamamos a la funcion principal que ejecuta todo el programa
MAIN();

/**
 * Funcion principal del programa
 */
function MAIN() {

    let MATRIZ = generarmatriz(9, 13);
    //console.table(MATRIZ);//para mirar la matriz

    genera_tabla(MATRIZ);

    //genearmos espacio en codigo html
    let saltoLinea = document.createElement("br");//creamos etiqueta br
    document.getElementsByTagName("body")[0].appendChild(saltoLinea);//añadimos br
    document.getElementsByTagName("body")[0].appendChild(saltoLinea);//repetimos

    //volvemos a implantar la matriz en forma de tabla en la pagina(solo para tema de visivilidad)
    genera_tabla(cazaOso(MATRIZ));
}

/**
 * Metodo que genera una tabla en html
 * @param {Array.<string>} matriz matriz
 */
function genera_tabla(matriz) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < matriz.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < matriz[i].length; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(matriz[i][j]);
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

/**
 * Metoido que genera y rellena de manera aleatoria una matriz de O y S
 * 
 * @param {Number} filas filas que va a tener la matriz
 * @param {Number} columnas columnas que tendra la matriz
 * @returns Matriz rellena de OS
 */
function generarmatriz(filas, columnas) {

    let matriz = [];

    for (let i = 0; i < filas; i++) {

        matriz.push([]); //por cada iteracion, en la matriz, en cada fiula le meto un array nuevo y vacio

        for (let j = 0; j < columnas; j++) {

            matriz[i][j] = letraAleatoria();
        }
    }

    return matriz;
}

/**
 * Metodo que busca y elimina en toda la matriz todas
 * las secuencias de OSO que haya en la matriz
 * @param {Array.<string>} matriz Matriz en la que buscaremos, y eliminaremos las OSO posible
 * @returns matriz con los osos eliminados
 */
function cazaOso(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            //buscamos una o que sea candidata
            if (matriz[i][j] == "O") {
                //miramos en todas las direcciones posibles

                if (sDerecha(i, j + 1, matriz)) {
                    if (oDerecha(i, j + 2, matriz)) {
                        //VACIAMOS ESAS POCICIOSNES (CAZAMOS AL OSO)
                        matriz[i][j] = " ";
                        matriz[i][j + 1] = " ";
                        matriz[i][j + 2] = " ";
                    }
                }
                if (sEsqInfDcha(i + 1, j + 1, matriz)) {
                    if (oAbDcha(i + 2, j + 2, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i + 1][j + 1] = " ";
                        matriz[i + 2][j + 2] = " ";
                    }
                }
                if (sAbajo(i + 1, j, matriz)) {
                    if (oAbajo(i + 2, j, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i + 1][j] = " ";
                        matriz[i + 2][j] = " ";
                    }
                }
                if (sEsqInfIzq(i + 1, j - 1, matriz)) {
                    if (oAbIzq(i + 2, j - 2, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i + 1][j - 1] = " ";
                        matriz[i + 2][j - 2] = " ";
                    }
                }
                if (sIzquierda(i, j - 1, matriz)) {
                    if (oIzquierda(i, j - 2, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i][j - 1] = " ";
                        matriz[i][j - 2] = " ";
                    }
                }
                if (sArrIzq(i - 1, j - 1, matriz)) {
                    if (oArrIzq(i - 2, j - 2, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i - 1][j - 1] = " ";
                        matriz[i - 2][j - 2] = " ";
                    }
                }
                if (sArriba(i - 1, j, matriz)) {
                    if (oArriba(i - 2, j, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i - 1][j] = " ";
                        matriz[i - 2][j] = " ";
                    }
                }
                if (sArrDcha(i - 1, j + 1, matriz)) {
                    if (oArrDcha(i - 2, j + 2, matriz)) {
                        matriz[i][j] = " ";
                        matriz[i - 1][j + 1] = " ";
                        matriz[i - 2][j + 2] = " ";
                    }
                }
            }
        }

    }
    return matriz;
}

/* FUNCIONES DE BUSQUEDA DE O Y S DENTRO DE LA MATRIZ */

/**
 * Metodo q ue busca hacia la derecha si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sDerecha(x, y, matriz) {
    if (y < matriz[x].length) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la derecha si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sEsqInfDcha(x, y, matriz) {
    if (x < matriz.length && y < matriz[x].length) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sAbajo(x, y, matriz) {
    if (x < matriz.length) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la izquierda si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sEsqInfIzq(x, y, matriz) {
    if (x < matriz.length && y >= 0) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia la izquierda si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sIzquierda(x, y, matriz) {
    if (y >= 0) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la izquierda si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sArrIzq(x, y, matriz) {
    if (x >= 0 && y >= 0) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sArriba(x, y, matriz) {
    if (x >= 0) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la derecha si hay una "S",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay S en esa direccion | false - no hay S en esa direccion
 */
function sArrDcha(x, y, matriz) {
    if (x >= 0 && y < matriz[x].length) {
        return matriz[x][y] == "S";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia la derecha si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oDerecha(x, y, matriz) {
    if (y < matriz[x].length) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la derecha si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oAbDcha(x, y, matriz) {
    if (x < matriz.length && y < matriz[x].length) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oAbajo(x, y, matriz) {
    if (x < matriz.length) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la izquierda si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oAbIzq(x, y, matriz) {
    if (x < matriz.length && y >= 0) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia la izquierda si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oIzquierda(x, y, matriz) {
    if (y >= 0) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la izquierda si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oArrIzq(x, y, matriz) {
    if (x >= 0 && y >= 0) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oArriba(x, y, matriz) {
    if (x >= 0) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la derecha si hay una "O",
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<string>} matriz matriz sobre la que buscaremos
 * @returns true - hay O en esa direccion | false - no hay O en esa direccion
 */
function oArrDcha(x, y, matriz) {
    if (x >= 0 && y < matriz[x].length) {
        return matriz[x][y] == "O";
    } else {
        return false;
    }
}