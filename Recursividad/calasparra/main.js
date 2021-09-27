var altura = prompt("Dime la altura de la piramide");

document.getElementById("enunciado").innerHTML += "Piramide de altura" + altura + ":";

var numeroInicial = 1;
var repeticiones = 0;

var solucion = [numeroInicial];

var repeticionesTotales = 2 * (altura - 1) + 1;

Calasparra(solucion[solucion.length - 1], repeticiones);

function Calasparra(numero, repeticiones) {

    while (repeticiones < repeticionesTotales) {
        if (repeticiones == altura) {
            solucion.push(altura);
            repeticiones++;
            Calasparra(altura, repeticiones);
        } else if (repeticiones < altura) {
            solucion.push(numero++);

        } else {

        }
    }
}