var minas = [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]

];


function genera_tabla() {
    // Obtener la referencia del elemento body
    let body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    let tabla = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // Crea las celdas
    for (let i = 0; i < minas.length; i++) {
        // Crea las filas de la tabla
        let fila = document.createElement("tr");

        for (let j = 0; j <= minas[i].length; j++) {
            // Crea un elemento <td>
            let celda = document.createElement("td");

            // Ahora creamos el texto(bomba o vacio) que ira en ese td
            let posicionArray = document.createTextNode(minas[i][j]);

            // Metemos el input en el td
            celda.appendChild(posicionArray);

            // Añadimos el elemento <td> al final de la fila de la tabla
            fila.appendChild(celda);
        }

        // agrega la fila al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // mete <table> en el <body>
    body.appendChild(tabla);
}

function generarCoordenada(max) {
    return Math.floor(Math.random * (max + 1))
}

function comprobarPosicion(x, y) {
    if (minas[x][y] != "*") {

        if (arriba(x, y) && abajo(x, y) && izquierda(x, y) && derecha(x, y)) {
            return true;
        }
    }
    return false;
}

function arriba(x, y) {

}
function abajo(x, y) {

}
function izquierda(x, y) {

}
function derecha(x, y) {

}

function colocarMina(x,y) {
    
    if (comprobarPosicion(x,y)) {
        
        minas[x][y] = "*";
    }
}