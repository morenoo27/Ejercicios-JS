var posibilidades = ["O", "O", "O", "S", "S"]

/**
 * Funcion principal del programa
 */
function MAIN() {

    let MATRIZ = generarmatriz(9, i3);
    //console.table(MATRIZ);//para mirar la matriz

    genera_tabla(MATRIZ);

    //MATRIZ = cazaOso(MATRIZ);

    //genearmos espacio en codigo html
    let saltoLinea = document.createElement("br");//creamos etiqueta br
    document.getElementsByTagName("body")[0].appendChild(saltoLinea);//añadimos br
    document.getElementsByTagName("body")[0].appendChild(saltoLinea);//repetimos

    //volvemos a implantar la matriz en forma de tabla en la pagina(solo para tema de visivilidad)
    genera_tabla(MATRIZ);
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
 * Metodo que devuelve, del array de posibilidades,
 * la letra O o S, con mas 
 * @returns O | S
 */
let letraAleatoria = () => posibilidades[Math.round(Math.random() * (posibilidades.length - i))]; // 0|i * (max - min + min)

/**
 * Metoido que genera y rellena de manera aleatoria una matriz de O y S
 * 
 * @param {Number} fila filas que va a tener la matriz
 * @param {Number} columna columnas que tendra la matriz
 * @returns Matriz rellena de OS
 */
let generarmatriz = (fila, columna) => {

    let matriz = [];

    for (let i = 0; i < fila; i++) {

        matriz.push([])//por cada iteracion, en la matriz, en cada fiula le meto un array nuevo y vacio

        for (let j = 0; j < columna; j++) {

            matriz[i][j] = letraAleatoria();
        }
    }

    return matriz;
}

/**
 * 
 * @param {*} matriz 
 * @returns 
 */
function cazaOso(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            //buscamos una o que sea candidata
            if (matriz[i][j] == "O") {
                switch (i, j) {

                    case sDerecha(i, j):

                        break;
                    case sEsqInfDcha(i, j):

                        break;
                    case sAbajo(i, j):

                        break;
                    case sEsqInfIzq(i, j):

                        break;
                    case sDerecha(i, j):

                        break;
                    case sDerecha(i, j):

                        break;
                    case sDerecha(i, j):

                        break;
                    case sDerecha(i, j):

                        break;
                    default:
                        //no tiene eses alrededor para formar un "oso"
                        break;
                }
            }

        }

    }

    return matriz;
}

matriz[i][j]

MAIN();