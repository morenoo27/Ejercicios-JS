var numero = 6;
var arrCuentaAtras = []

function cuentaAtras(numero) {
    
    arrCuentaAtras.push(numero)

    numero--

    if(numero >= 1){
        cuentaAtras(numero)
    }

    return arrCuentaAtras
}

document.getElementById("enunciado").innerHTML= numero;
document.getElementById("resultado").innerHTML= cuentaAtras(numero);