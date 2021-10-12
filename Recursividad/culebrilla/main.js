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

/**
 * Metodo que hace crecer la culebra
 * @param {Number} x coordenada x del mapa
 * @param {Number} y coordenada y del mapa
 */
function crecer(x, y) {

    campo[x][y] = "*";

    mostrarMapa();

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

        return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY) && nadaArriba(coordX, coordY)
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

        return nadaDcha(coordX, coordY) && nadaIzq(coordX, coordY) && nadaAbajo(coordX, coordY)
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

        return nadaArriba(coordX, coordY) && nadaAbajo(coordX, coordY) && nadaDcha(coordX, coordY)
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

        return nadaArriba(coordX, coordY) && nadaAbajo(coordX, coordY) && nadaIzq(coordX, coordY)
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
    //si esta dentro de los limites, comprobara
    if (y < campo[x].length - 1) {
        return campo[x][y + 1] == " ";
        //sino devolvera true por que esta en el borde y no hay mas alla
    } else {
        return true;
    }
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada a la izquierda | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaIzq(x, y) {
    if (y > 0) {
        return campo[x][y - 1] == " "
    } else {
        return true;
    }
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada arriba | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaArriba(x, y) {
    if (x > 0) {
        return campo[x - 1][y] == " "
    } else {
        return true;
    }
}

/**
 * Funcion que comprueba que en esa pocicion
 * no haya parte del cuerpo de la culebrilla
 * @param {Number} x coordenada x inicial
 * @param {Number} y coordenada y inicial
 * @returns true - No tiene nada abajo | false - Tiene cuerpo de la serpiente en esa posicion
 */
function nadaAbajo(x, y) {
    if (x < campo.length - 1) {
        return campo[x + 1][y] == " "
    } else {
        return true;
    }
}

function mostrarMapa() {
    let texto = "";
    for (let i = 0; i < campo.length; i++) {

        for (let j = 0; j < campo[i].length; j++) {

            texto += ` [${campo[i][j]}] `;
        }
        texto += `\n`;
    }
    console.log(texto)
}

crecer(4, 6);