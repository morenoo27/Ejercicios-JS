let minas = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

MAIN();

function MAIN() {

    let radio = 1;

    for (let i = 0; i < minas.length; i++) {

        //buscamos mina EN TODA LA MATRIZ
        for (let i = 0; i < minas.length; i++) {
            for (let j = 0; j < minas[i].length; j++) {
                //es mina
                if (minas[i][j] == 1) {

                    minas = pintarAlrededores(i, j, radio, minas);
                }
            }
        }
        radio++;
    }
    console.table(minas)
}

function hayMinas(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            if (matriz[i][j] == 0) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Metodo que pinta en las direcciones que se pueda la longitud que hay hacia la mina objetivo
 * @param {Number} x coordenada donde se encuentra la mina
 * @param {Number} y coordenada y donde se encuentra la mina
 * @param {Number} radio Radio sobre el que pintara, tomando como cento la mina
 * @param {Array.<Number>} matriz Matriz sobre la qu se pintara
 */
function pintarAlrededores(x, y, radio, matriz) {

    if (pDerecha(x, y + radio, matriz)) {
        matriz[x][y + radio] = radio + 1;

    }

    if (pEsqInfDcha(x + radio, y + radio, matriz)) {
        matriz[x + radio][y + radio] = radio + 1;

    }

    if (pAbajo(x + radio, y, matriz)) {
        matriz[x + radio][y] = radio + 1;

    }

    if (pEsqInfIzq(x + radio, y - radio, matriz)) {
        matriz[x + radio][y - radio] = radio + 1;

    }

    if (pIzquierda(x, y - radio, matriz)) {
        matriz[x][y - radio] = radio + 1;

    }

    if (pArrIzq(x - radio, y - radio, matriz)) {
        matriz[x - radio][y - radio] = radio + 1;

    }

    if (pArriba(x - radio, y, matriz)) {
        matriz[x - radio][y] = radio + 1;

    }

    if (pArrDcha(x - radio, y + radio, matriz)) {
        matriz[x - radio][y + radio] = radio + 1;

    }



    return matriz;
}

/**
 * Metodo q ue busca hacia la derecha si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pDerecha(x, y, matriz) {
    if (y < matriz[x].length) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la derecha si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pEsqInfDcha(x, y, matriz) {
    if (x < matriz.length && y < matriz[x].length) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pAbajo(x, y, matriz) {
    if (x < matriz.length) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia abajo a la izquierda si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pEsqInfIzq(x, y, matriz) {
    if (x < matriz.length && y >= 0) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia la izquierda si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pIzquierda(x, y, matriz) {
    if (y >= 0) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la izquierda si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pArrIzq(x, y, matriz) {
    if (x >= 0 && y >= 0) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pArriba(x, y, matriz) {
    if (x >= 0) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}

/**
 * Metodo q ue busca hacia arriba a la derecha si hay una 0,
 * controlando que no se salga de la matriz
 * @param {Number} x corrdenada x
 * @param {Number} y coordenada y
 * @param {Array.<Number>} matriz matriz sobre la que buscaremos
 * @returns true - hay 0 en esa direccion | false - no hay 0 en esa direccion
 */
function pArrDcha(x, y, matriz) {
    if (x >= 0 && y < matriz[x].length) {
        return matriz[x][y] == 0;
    }

    {
        return false;
    }
}