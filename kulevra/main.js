let mapa = [['*', ' ', ' ', '*', '*', '*'], ['*', ' ', ' ', ' ', ' ', ' '], ['*', ' ', ' ', ' ', '*', '*'], ['*', ' ', ' ', ' ', ' ', ' '], ['*', '*', '*', '*', '*', '*']];

funcionamiento(mapa);

/**
 * Metodo que busca todas las culebras que haya en un mapa
 * y almacena todas sus longitudes en un array
 * @returns {Number[]} Array con las longitudes de todas las serpientes de un mapa
 */
function buscarCulebras() {

    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[i][j] == "*") {
                console.log(`Hay una serpiente de ${kulebra(i, j)} metros de longitud`);
            }
        }
    }
}

/**
 * Metodo que, de forma recursiva, recorre el 
 * cuerpo de una serpiente y determina su longitud
 * @param {Number} fila fila de la matriz
 * @param {Number} columna columna de la fila de la matriz
 * @returns {Number} longitud total de la serpiente
 */
function kulebra(fila, columna) {

    mapa[fila][columna] = "";

    if (mirarArriba(fila, columna)) {
        return kulebra(fila - 1, columna) + 1;
    }

    if (mirarAbajo(fila, columna)) {
        return kulebra(fila + 1, columna) + 1;
    }

    if (mirarIzquierda(fila, columna)) {
        return kulebra(fila, columna - 1) + 1;
    }

    if (mirarDerecha(fila, columna)) {
        return kulebra(fila, columna + 1) + 1;
    }

    return 1;//fin de culebra
}

/**
 * Metodo que mira hacia arriba de la coordenada inicial para 
 * comprobar si en esa direccion continua el cuerpo
 * de la serpiente
 * @param {Number} x coordenada x de la matriz
 * @param {Number} y coordenada y de la matriz
 * @returns true - sigue la serpiente | false - no sigue la serpiente
 */
function mirarArriba(x, y) {

    if (x > 0) {
        if (mapa[x - 1][y] == "*") {
            return true;
        }
    }
    return false;
}

/**
 * Metodo que mira hacia abajo de la coordenada inicial para 
 * comprobar si en esa direccion continua el cuerpo
 * de la serpiente
 * @param {Number} x coordenada x de la matriz
 * @param {Number} y coordenada y de la matriz
 * @returns true - sigue la serpiente | false - no sigue la serpiente
 */
function mirarAbajo(x, y) {

    if (x < mapa.length - 1) {
        if (mapa[x + 1][y] == "*") {
            return true;
        }
    }
    return false;
}

/**
 * Metodo que mira a la izquierda de la coordenada inicial para 
 * comprobar si en esa direccion continua el cuerpo
 * de la serpiente
 * @param {Number} x coordenada x de la matriz
 * @param {Number} y coordenada y de la matriz
 * @returns true - sigue la serpiente | false - no sigue la serpiente
 */
function mirarIzquierda(x, y) {

    if (y > 0) {
        if (mapa[x][y - 1] == "*") {
            return true;
        }
    }
    return false;
}

/**
 * Metodo que mira a la derecha de la coordenada inicial para 
 * comprobar si en esa direccion continua el cuerpo
 * de la serpiente
 * @param {Number} x coordenada x de la matriz
 * @param {Number} y coordenada y de la matriz
 * @returns true - sigue la serpiente | false - no sigue la serpiente
 */
function mirarDerecha(x, y) {

    if (x < mapa[x].length - 1) {
        if (mapa[x][y + 1] == "*") {
            return true;
        }
    }
    return false;
}

function funcionamiento(array) {

    mostrarMapa(array);
    console.log("\n\n")
    buscarCulebras();
}

function mostrarMapa(array) {


    for (let i = 0; i < array.length; i++) {
        let texto = "";
        for (let j = 0; j < array[i].length; j++) {

            texto += ` [${array[i][j]}] `;
        }
        console.log(`${texto}\n`)
    }
}