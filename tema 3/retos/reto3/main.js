MAIN();

function MAIN() {

    let notasDWESE = instanciaDeJSON().alumnos.map((alumno) => alumno.notas["DWESE"]) 
    let sumatorio = notasDWESE.reduce((a, b) => a+b)
    media = sumatorio / notasDWESE.length;
    console.log(`Suma: ${sumatorio}\nMedia: ${media}`);
}

/**
 * Metodo que instancia un objeto con expresiones JSON
 * @returns Objeto parseado
 */
function instanciaDeJSON() {
    let array = {
        "alumnos": [
            {
                "nombre": "Fulanito",
                "notas": {
                    "DWEC": 8,
                    "DWESE": 0.71,
                    "ED": 7.04,
                    "SSOO": 3.37,
                    "BBDD": 0.22,
                    "PROG": 1.09,
                    "EINEM": 6.17
                }
            },
            {
                "nombre": "Menganito",
                "notas": {
                    "DWEC": 7,
                    "DWESE": 0.71,
                    "ED": 7.04,
                    "SSOO": 3.37,
                    "BBDD": 0.22,
                    "PROG": 1.09,
                    "EINEM": 6.17
                }
            },
            {
                "nombre": "Cetanito",
                "notas": {
                    "DWEC": 6,
                    "DWESE": 0.71,
                    "ED": 7.04,
                    "SSOO": 3.37,
                    "BBDD": 0.22,
                    "PROG": 1.09,
                    "EINEM": 6.17
                }
            }
        ]
    }
    return array;
}