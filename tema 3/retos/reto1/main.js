let numeros = [1, 2, 3, 4, 5, 6, 7];

function dale() {
    document.getElementById("resultado").innerHTML = numeros.map((valor) => (valor%2 != 0) ? valor + 1 : valor );
}