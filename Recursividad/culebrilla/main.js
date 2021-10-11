var campo = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],//inicio (4,6)
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

function generateRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function crecer(x, y) {

    campo[x][y] = "*";

    let puedeCrecer = false; //false - no puede | true - puede  crecer
    let intentos = 0;
    do {


        switch (generateRandomInt(1, 5)) {
            case 1:
                puedeCrecer = mirarArriba(x, y);
                if (puedeCrecer) {
                    crecer(x - 1, y);
                }
                break;
            case 2:
                puedeCrecer = mirarDcha(x, y);
                if (puedeCrecer) {
                    crecer(x, y + 1);
                }
                break;
            case 3:
                puedeCrecer = mirarAbajo(x, y);
                if (puedeCrecer) {
                    crecer(x + 1, y);
                }
                break;
            case 4:
                puedeCrecer = mirarIzquierda(x, y);
                if (puedeCrecer) {
                    crecer(x, y - 1);
                }
                break;
        }

        intentos++;
        //estadisticamente con 12 repeticiones, minimo mira una vez todas las direcciones (4 dir * 3 veces)
    } while (!puedeCrecer && intentos < 12);
}

//FUNCIONES OCASIONALES

/**
 * Metodo que comprueba si la culebra puede
 * crecer hacia arriba.
 * Para ello, debe ovbiar la comprobacion de la 
 * parte inferior de la siguiente posicion,
 * es decir, la posicion origen
 * @param {Number} x coordenada x del campo
 * @param {Number} y coordenada y del campo
 * @returns true - se puede crecer | false - no
 */
function mirarArriba(x, y) {

    if (x > 0) {

        /*La posicion en la que creceria seria esa,
        por lo tanto tenemos que mirar DESDE esa posicion*/
        let coordX = x - 1;
        let coordY = y;

        switch (coordX, coordY) {
            case coordX == 0 && coordY == 0:
                return nadaDcha(coordX, coordY)
            case coordX == 0 && coordY == campo[coordX].length:
                return nadaIzq(coordX, coordY)
            case coordX == 0:
                return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY)
            case coordY == 0:
                return nadaIzq(coordX, coordY) && nadaArriba(coordX, coordY)
            case coordY == campo[coordX].length:
                return nadaDcha(coordX, coordY) && nadaArriba(coordX, coordY)
            default:
                return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY) && nadaArriba(coordX, coordY)
        }
    }

    return false;
}

/**
 * Metodo que comprueba si la culebra puede
 * crecer hacia abajo.
 * Para ello, debe ovbiar la comprobacion de la 
 * parte superior de la siguiente posicion,
 * es decir, la posicion origen
 * @param {Number} x coordenada x del campo
 * @param {Number} y coordenada y del campo
 * @returns true - se puede crecer | false - no
 */
function mirarAbajo(x, y) {

    if (x < campo.length - 1) {

        /*La posicion en la que creceria seria esa,
        por lo tanto tenemos que mirar DESDE esa posicion*/
        let coordX = x + 1;
        let coordY = y;

        switch (coordX, coordY) {
            case coordX == campo.length - 1 && coordY == 0:
                return nadaDcha(coordX, coordY)
            case coordX == campo.length - 1 && coordY == campo[coordX].length:
                return nadaIzq(coordX, coordY)
            case coordX == campo.length - 1:
                return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY)
            case coordY == 0:
                return nadaIzq(coordX, coordY) && nadaAbajo(coordX, coordY)
            case coordY == campo[coordX].length:
                return nadaDcha(coordX, coordY) && nadaAbajo(coordX, coordY)
            default:
                return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY) && nadaAbajo(coordX, coordY)
        }
    }

    return false;
}

/**
 * Metodo que comprueba si la culebra puede
 * crecer hacia la derecha.
 * Para ello, debe ovbiar la comprobacion de la 
 * parte izquierda de la siguiente posicion,
 * es decir, la posicion origen
 * @param {Number} x coordenada x del campo
 * @param {Number} y coordenada y del campo
 * @returns true - se puede crecer | false - no
 */
function mirarDcha(x, y) {

    if (y < campo.length - 1) {

        /*La posicion en la que creceria seria esa,
        por lo tanto tenemos que mirar DESDE esa posicion*/
        let coordX = x;
        let coordY = y + 1;

        switch (coordX, coordY) {
            //si esta en la esquina superior derecha
            case coordX == campo.length && coordY == campo[x].length - 1:
                return nadaAbajo(coordX, coordY)
            //si esta en la esquina inferior derecha
            case coordX == campo.length && coordY == campo[x].length - 1:
                return nadaArriba(coordX, coordY)
            //si esta en el borde derecho, solo arriba y abajo
            case coordY == campo[x].length - 1:
                return nadaArriba(coordX, coordY) && nadaAbajo(coordX, coordY)
            //si crece por el borde superior
            case coordX == 0:
                return nadaAbajo(coordX, coordY) && nadaDcha(coordX, coordY)
            //si crece por el borde inferior
            case coordX == campo.length:
                return nadaArriba(coordX, coordY) && nadaDcha(coordX, coordY)
            //sino en todas menos la origen (izquierda)
            default:
                return nadaArriba(coordX, coordY) && nadaAbajo(coordX, coordY) && nadaDcha(coordX, coordY)
        }
    }

    return false;
}

/**
 * Metodo que comprueba si la culebra puede
 * crecer hacia la derecha.
 * Para ello, debe ovbiar la comprobacion de la 
 * parte izquierda de la siguiente posicion,
 * es decir, la posicion origen
 * @param {Number} x coordenada x del campo
 * @param {Number} y coordenada y del campo
 * @returns true - se puede crecer | false - no
 */
function mirarIzquierda(x, y) {

    if (y > 0) {

        /*La posicion en la que creceria seria esa,
        por lo tanto tenemos que mirar DESDE esa posicion*/
        let coordX = x;
        let coordY = y - 1;

        switch (coordX, coordY) {
            //si esta en la esquina siperior izquierda solo debve mirar abajo
            case coordX == 0 && coordY == 0:
                return nadaAbajo(coordX, coordY);
            //en la unferior izquierda solo arriba
            case coordX == campo.length - 1 && coordY == 0:
                return nadaArriba(coordX, coordY)
            //en el borde izquierdo arriba y abajo
            case coordY == 0:
                return nadaAbajo(coordX, coordY) && nadaArriba(coordX, coordY);
            //si crece por el borde superior
            case coordX == 0:
                return nadaAbajo(coordX, coordY) && nadaIzq(coordX, coordY)
            //si crece por el borde inferior
            case coordX == campo.length:
                return nadaArriba(coordX, coordY) && nadaIzq(coordX, coordY)
            //sino en todas menos la origen (derecha)
            default:
                return nadaArriba(coordX, coordY) && nadaAbajo(coordX, coordY) && nadaIzq(coordX, coordY)
        }
    }

    return false;
}

//FUNCIONES GLOBALES

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada a la derecha | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaDcha(x, y) {
    return campo[x][y + 1] == " ";
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada a la izquierda | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaIzq(x, y) {
    return campo[x][y - 1] == " "
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada arriba | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaArriba(x, y) {
    return campo[x - 1][y] == " "
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada abajo | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaAbajo(x, y) {
    return campo[x + 1][y] == " "
}



console.log(campo);
crecer(4, 6);
console.log(campo);