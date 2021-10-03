var numero = document.getElementById("numero").value;

var contador_divisor = numero - 1;

function isPrimo(numero) {
  if (numero % contador_divisor == 0) {
    if (contador_divisor == 1) {
      console.log(contador_divisor);
      return true;
    } else {
      return false;
    }
  }
  contador_divisor--;
  isPrimo(numero);
}

function comprobar() {
  let texto = "";
  if (isPrimo(numero)) {
    texto = "El numero es primo";
  } else {
    texto = "El numero no es primo";
  }

  document.getElementById("respuesta").innerHTML = texto;
}
