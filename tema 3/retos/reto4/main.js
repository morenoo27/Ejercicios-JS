//values de todas las notas (3 array con las notas) => flat -> agrupa los rrays => los reduzco => divido por ese mismo array reducido en 1 solo array.length
console.log(Object.values(instanciaDeJSON().alumnos.map(alumno => Object.values(alumno.notas))).flat(1).reduce((a, b) => a + b)/Object.values(instanciaDeJSON().alumnos.map(alumno => Object.values(alumno.notas))).flat(1).length);

function instanciaDeJSON() {
    var array = {
        "alumnos": [{
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
        }
            ,
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
    };
    return array;
}