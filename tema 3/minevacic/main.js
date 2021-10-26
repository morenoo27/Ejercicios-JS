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

    for (let k = 0; k < minas.length; k++) {

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