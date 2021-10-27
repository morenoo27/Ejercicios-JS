
/* INSTANCIACION DE ELEMENTOS NECESARIOS */

//añadimos el listener al boton para enlazar html con el script
document.getElementById("botonGenerarMatriz").addEventListener("click", MAIN)

// niveles => [🤯, 🟥, 🟧, 🟨, 🟩, 🟦, 🟪, ⬛️, ⬜️, 🟫];

/**
 * metodo que genera un numero aleatorio entre 0 y el numero que pases por parametro
 * @param {Number} max Valor maximo que podra tener el aleatorio devuelto
 * @returns Intervalo entre 0 y max
 */
let generarCoordenadaAleatoria = (max) => Math.round(Math.random() * (max));


function MAIN() {

    let extensionCampo = document.getElementById("gradoMatriz").value;

    let totalMinas = document.getElementById("numeroMinas").value;

    let campoMinas = generarCampo(extensionCampo, totalMinas);

    campoMinas = pintarRadios(campoMinas);

    pintarMatrizEnHTML(campoMinas);
}

/**
 * Metodo que recorre  toda la matriz y pinta en forma de capas
 * los numeros que tienen como
 * @param {Array.<Number[]>} array matriz sobre la que actaremos
 * @returns matriz pintada entera
 */
function pintarRadios(array) {

    let radio = 1;

    for (let k = 0; k < array.length; k++) {

        //buscamos mina EN TODA LA MATRIZ
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                //es mina
                if (array[i][j] == 1) {

                    array = pintarAlrededores(i, j, radio, array);
                }
            }
        }
        radio++;
    }

    return array;
}

/**
 * Metodo que pinta en las direcciones que se pueda la longitud que hay hacia la mina objetivo.
 * 
 * Lo que hacemos es dibujar (en las posiciones dentro de la matriz donde no se ha pintado numero todavia)
 * 
 * Lo que hacemos es pintar esto:
 *  ____________
 * |            |
 * |            |
 * |     1      |
 * |            |
 * |____________|
 *  
 * 
 * Todas tienen la misma longitud, radio * 2
 * 
 * @param {Number} x coordenada donde se encuentra la mina
 * @param {Number} y coordenada y donde se encuentra la mina
 * @param {Number} radio Radio sobre el que pintara, tomando como cento la mina
 * @param {Array.<Number>} matriz Matriz sobre la qu se pintara
 */
function pintarAlrededores(x, y, radio, matriz) {

    let diametro = 2 * radio;

    for (let i = 1; i <= diametro; i++) {

        //inicio equina superior derecha to izquierda
        //matriz[x - radio][y + radio]
        if (x - radio >= 0) {
            //que este dentro de la matriz la suma
            //menos i, que es la posicion del diametro
            if (matriz[x - radio].length > y + radio - i && y + radio - i >= 0) {
                //miramos si no esta escrito el nivel
                if (matriz[x - radio][y + radio - i] == 0) {
                    matriz[x - radio][y + radio - i] = radio + 1;
                }
            }
        }

        //inicio equina superior izquierda to abajo
        //matriz[x - radio][y - radio]
        if (y - radio >= 0) {
            if (0 <= x - radio + i && x - radio + i < matriz.length) {
                if (matriz[x - radio + i][y - radio] == 0) {
                    matriz[x - radio + i][y - radio] = radio + 1;
                }
            }
        }

        //inicio equina inferior izquierda to derecha
        //matriz[x + radio][y - radio]
        if (x + radio < matriz.length) {
            if (0 <= y - radio + i && y - radio + i < matriz[x + radio].length) {
                if (matriz[x + radio][y - radio + i] == 0) {
                    matriz[x + radio][y - radio + i] = radio + 1;
                }
            }
        }

        //inicio equina inferior derecha to arriba
        //matriz[x + radio][y + radio]
        if (y + radio < matriz[0].length) {
            if (0 <= x + radio - i && x + radio - i < matriz.length) {
                if (matriz[x + radio - i][y + radio] == 0) {
                    matriz[x + radio - i][y + radio] = radio + 1;
                }
            }
        }
    }

    return matriz;
}

/**
 * Metodoq que genera una matriz de grado "grado" con tantas minas
 * (generadas de manera aleatoria) como se pasen por parametro
 * @param {Number} grado grado que tendra la matriz
 * @param {Number} minasMaximas Numerop de minas que tendra la matriz
 * @returns campo de minas creadas
 */
function generarCampo(grado, minasMaximas) {

    //instanciamos el array de con grado pasado por parametro(unidimensional)
    let campoMinas = [];

    for (let i = 0; i < grado; i++) {
        //a cada posicion le añadimos otro array de grado pasado por parametros
        campoMinas.push([])
        for (let j = 0; j < grado; j++) {
            //lo rellenamos todo de valores "0"        
            campoMinas[i].push(0)
        }

    }

    //generamos de manera aleatoria una coordenada y ponemos en esa coordenada una mina
    for (let i = 0; i < minasMaximas; i++) {

        coordenadaX = generarCoordenadaAleatoria(grado - 1);
        coordenadaY = generarCoordenadaAleatoria(grado - 1);

        campoMinas[coordenadaX][coordenadaY] = 1;
    }

    return campoMinas;
}

function pintarMatrizEnHTML(matriz) {
    
    let divTable = document.getElementById("tabla")

    let tabla = document.createElement("table")

    divTable.appendChild(tabla);

    console.table(matriz)
}