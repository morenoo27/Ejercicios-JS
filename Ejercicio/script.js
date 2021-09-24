function diAlgo() {
    alert("Hola tio");
}

function cambiaPic() {

    let image = document.getElementById('myFPImage');

    if (image.src.match("black")) {
        image.src = "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg";
    } else {
        image.src = "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg";
    }

}

function cambiarTexto() {

    let txt = document.getElementById('textoCambiar');

    if (txt.style.color == "red" ) {
        txt.style.color = "black";
    } else {
        txt.style.color = "red";
    }
}