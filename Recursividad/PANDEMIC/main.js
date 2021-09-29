function rellenar() {

    let i = 0
    while (i < 10) {
        for (let j = 0; j < 10; j++) {

            let coordenada = i + "," + j
            document.getElementById(coordenada).value = generarEspecie()
        }
        i++
    }

}

function generarEspecie() {

    let especies = ["H", "M", "G", "P", "R"];

    return especies[Math.floor(Math.random() * 5)];
}