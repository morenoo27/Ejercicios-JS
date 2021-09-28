/**
 * Funcion que acciona la generacion de la matriz
 * y escribe el resultado en el parrafo "matriz"
 */
function matriz() {
    //cambia el valor del parrafo "matriz" por ...
    //crear la matriz con valor ...
    //capta el valor que tiene el imput con id "grado"
    document.getElementById("matriz").innerHTML = crearMatriz(document.getElementById("grado").value);
}

/**
 * Metodo que genera una matriz vacilona,
 * del grado que queramos pasar por parametro
 * @param {*} grado Grado de la matriz
 * @returns Texto, formateado, con la matriz vacilona
 */
function crearMatriz(grado) {

    let linea = "";

    for (let i = 0; i < grado; i++) {
        for (let j = 0; j < grado; j++) {

            linea += posicion(i, j) + tab();
        }
        linea += "<br/>"
    }

    return linea
}

/**
 * Metodo que escribe una tabulacion en codigo html
 * @returns tabulado en html
 */
function tab() { return "<pre style='display:inline'>&#09;</pre>" }

/**
 * Metodo que genera el valor correspondiente a su posicion en la matriz vacilona
 * @param {*} fila Posicion "fila" de la matriz
 * @param {*} columna Posicion "columna" de la matriz
 * @returns Valor que corresponde en la matriz vacilona
 */
function posicion(fila, columna) {

    //controlamos que este en la primera fila, o columna(ya que su valor sera simepre "1")
    if (fila == 0 | columna == 0) return 1

    /*sino, el algoritmo es que el numero es la suma de su anterior en columna
    y el anterior en su fila */
    return (posicion(fila - 1, columna) + posicion(fila, columna - 1));
}