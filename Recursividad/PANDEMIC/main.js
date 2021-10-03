const GRADO = 8;

function generarEspecie() {
  let especies = ["H", "M", "G", "P", "R"];

  return especies[Math.floor(Math.random() * 5)];
}

function genera_tabla() {
  // Obtener la referencia del elemento body
  let body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  let tabla = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // Crea las celdas
  for (let i = 0; i <= GRADO; i++) {
    // Crea las filas de la tabla
    let fila = document.createElement("tr");

    for (let j = 0; j <= GRADO; j++) {
      // Crea un elemento <td>
      let celda = document.createElement("td");

      // Ahora creamos el boton que ira en ese td
      let botonCelda = crearInput(i, j);

      // Metemos el input en el td
      celda.appendChild(botonCelda);

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

  let botonGenerar = document.getElementById("btnGenerar");
  botonGenerar.disabled = true;
}

/**
 * Metodo que genera un boton con los atributos necesarios para la tabla del pandemic
 * @param {Number} fila coordenada x de la tabla
 * @param {Number} columna coordenada y de la tabla
 * @returns boton instanciado
 */
function crearInput(fila, columna) {
  //creamos el boton
  let boton = document.createElement("input");

  //instanciamos los atributos necesarios
  let valorId = fila + "," + columna;
  boton.setAttribute("type", "button"); //tipo de input
  boton.setAttribute("id", valorId); //id
  boton.setAttribute("value", generarEspecie()); //valor
  boton.setAttribute("onclick", "infectar(" + valorId + ")"); //listener

  return boton;
}

function infectar(x, y) {
  //extraemos la especie
  let especie = document.getElementById(x + "," + y).value;

  //eliminamos el sujeto
  document.getElementById(x + "," + y).value = "";

  let infectUp = comprobarArriba(x, y, especie);
  if (infectUp) {
    infectar(x - 1, y);
  }
  let infecAbajo = comprobarAbajo(x, y, especie);
  if (infecAbajo) {
    infectar(x + 1, y);
  }
  let infectDcha = comprobarDcha(x, y, especie);
  if (infectDcha) {
    infectar(x, y + 1);
  }
  let infectIzda = comprobarIzda(x, y, especie);
  if (infectIzda) {
    infectar(x, y - 1);
  }
}

/**
 * Metodo que comprueba si el sujeto que se situa en la parte superior 
 * (si existe una posicion superior) es apto para contagiar o no 
 * (son la misma especie)
 * @param {Number} fila coordenada x de la "matriz"
 * @param {Number} columna coordenada y de la "matriz"
 * @param {string} especie especie del sujeto
 * @returns Respuesta de si es valido el sujeto a infectar 
 * (true -- se puede contagiar | false -- no se puede contagiar)
 */
function comprobarArriba(fila, columna, especie) {
  let valido = true;

  //control para ver si se sale de la "matriz"
  if (!(fila == 0)) {
    let mismaEspecie =
      especie == document.getElementById(fila - 1 + "," + columna).value; //comparacion de especies
    if (mismaEspecie) {
      return valido;
    }
  }

  return false;
}

/**
 * Metodo que comprueba si el sujeto que se situa en la parte inferior 
 * (si existe una posicion inferior) es apto para contagiar o no 
 * (son la misma especie)
 * @param {Number} fila coordenada x de la "matriz"
 * @param {Number} columna coordenada y de la "matriz"
 * @param {string} especie especie del sujeto
 * @returns Respuesta de si es valido el sujeto a infectar 
 * (true -- se puede contagiar | false -- no se puede contagiar)
 */
function comprobarAbajo(fila, columna, especie) {
  let valido = true;

  let mismaEspecie =
    especie == document.getElementById(fila + 1 + "," + columna).value;

  if (!(fila == GRADO)) {
    let mismaEspecie =
      especie == document.getElementById(fila + 1 + "," + columna).value;
    if (mismaEspecie) {
      return valido;
    }
  }

  return false;
}

/**
 * Metodo que comprueba si el sujeto que se situa en la parte derecha
 * (si existe una posicion mas a la derecha) es apto para contagiar o 
 * no (son la misma especie)
 * @param {Number} fila coordenada x de la "matriz"
 * @param {Number} columna coordenada y de la "matriz"
 * @param {string} especie especie del sujeto
 * @returns Respuesta de si es valido el sujeto a infectar 
 * (true -- se puede contagiar | false -- no se puede contagiar)
 */
function comprobarDcha(fila, columna, especie) {
  let valido = true;

  if (!(columna == GRADO)) {
    let mismaEspecie =
      especie == document.getElementById(fila + "," + (columna + 1)).value;
    if (mismaEspecie) {
      return valido;
    }
  }

  return false;
}

/**
 * Metodo que comprueba si el sujeto que se situa en la parte izquierda
 * (si existe una posicion mas a la izquierda) es apto para contagiar o
 * no (son la misma especie)
 * @param {Number} fila coordenada x de la "matriz"
 * @param {Number} columna coordenada y de la "matriz"
 * @param {string} especie especie del sujeto
 * @returns Respuesta de si es valido el sujeto a infectar 
 * (true -- se puede contagiar | false -- no se puede contagiar)
 */
function comprobarIzda(fila, columna, especie) {
  let valido = true;

  if (!(columna == 0)) {
    let mismaEspecie =
      especie == document.getElementById(fila + "," + (columna - 1)).value;
    if (mismaEspecie) {
      return valido;
    }
  }

  return false;
}
