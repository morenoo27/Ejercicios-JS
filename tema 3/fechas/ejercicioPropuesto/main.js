
function cronometro() {
    
    setInterval(crono(), 1000);
}

function crono() {
    
    let fecha = new Date();
    let minutos = fecha.getMinutes();
    let dia = fecha.getSeconds();
    let miliseg = fecha.getMilliseconds();

    
}