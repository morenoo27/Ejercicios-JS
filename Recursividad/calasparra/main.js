//pedimos por pantalla la altura de la piramide (SOLO FUNCIONARA SI PONEMOS UN NUMERO)
var altura = prompt("Dime la altura de la piramide");

var solucionFinal = "";

var piso = 1;//contador para los pisos

//enunciado en el html
document.getElementById("enunciado").innerHTML += "Piramide de altura " + altura + ":<br/>";

//introducimos el avlor en el parrafo del resulado
document.getElementById("enunciado").innerHTML += Calasparra(altura, piso);

/**
 * Metodo que realiza la sucesion de Calasparra, por medio de recursividad
 * @param {*} altura Cantidad de pisos que tendra la piramide
 * @param {*} piso Piso actual
 */
function Calasparra(altura) {

    //si se inicia el programa, la primera vez siempre sera 1, por lo tanto lo escribimos manualmente
    //ya que no supone esfuerzo controlar un caso concreto
    if (piso == 1) {

        solucionFinal += "1<br/>"
        piso++;
        Calasparra(altura);
    } else {

        /**
         * Una vez pasamos el primer piso, repetimos el mismo 
         * proceso(con la recursividad) para realizar la creacion
         * del piso con su respectiva piramide 
         */
        if (piso <= altura) {

            solucionFinal += piramide(piso) + "<br/>";
            piso++;
            Calasparra(altura, piso);
        }
    }

    return solucionFinal;
}

/**
 * Metodo que combina la generacion de dos escaleras, 
 * una ascendente y descentende para crear la piramide
 * de calasparra
 * @param {any} tope Valor maximo de la priamide
 * @returns Texto con la escalera completa
 */
function piramide(tope) {

    return ascender(tope) + descender(tope);
}

/**
 * Metodo que genera una escalera ascendente hasta el valor maximo, sin contar con el
 * @param {any} tope Valor maximo de la priamide
 * @returns Texto con la escalera ascendente de la piramide
 */
function ascender(tope) {

    let escaleraAscendente = "";

    for (let i = 1; i < tope; i++) {
        escaleraAscendente += i + " ";
    }

    return escaleraAscendente;
}

/**
 * Metodo que genera una escalera descendente hasta el valor maximo, empezando por el tope
 * @param {any} tope Valor maximo de la escalera
 * @returns  Texto con la Escalera descendente, y la cuspide.
 */
function descender(tope) {

    let escaleraDescendente = "";

    for (let i = tope; 0 < i; i--) {
        escaleraDescendente += i + " ";
    }

    return escaleraDescendente;
}