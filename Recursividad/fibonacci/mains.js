const REPETICIONES = document.getElementById("longitud").value;

var secuencia = [1, 1];
let repeticion = 0;

function fibonacci(repeticion) {
  if (repeticion < REPETICIONES) {
    secuencia.push(
      secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]
    );
    fibonacci(repeticion + 1);
  }

  return secuencia;
}

function crearSecuencia() {
  document.getElementById("resultado").innerHTML = fibonacci(repeticion);
}
