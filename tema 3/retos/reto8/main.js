var carrakos = ["Chevrolet", "Tesla", "BMW", ["Honda", "Infiniti", ["Lexus", "Mercedes", "Kia"], "Hyunday"], ["Mazda", "Mercedes", "Jeep", ["KTM", "Nissan", "Isuzu"]]];

/**
 * Metodo que genera una ul en lenguaje html
 * 
 * Recorremos todas las  posiciones del array, y pueden ocurrir dos opciones:
 *      Que sea un string
 *          Donde simplemete crearemos el nodo con el valor del string, creamos
 *          la li y se la añadimos al padre
 *      Que sea un array
 *          Donde creamos otra lista, se la añadimos al padre, y una vez añadida
 *          al padre ya podemos trabajar con esa sublista, y ejecutamos el metodo
 *          de nuevo pero con el padre ahora como la ul recien creada
 * @param {Array.<string>} array Array del que crearemos los elementos 'li'
 * @param {HTMLElement} elementoPadre Elemento al que añadiremos los 'li' (ul del html)
 */
function crearLista(array, elementoPadre) {

    array.map(coche => {
        if (Array.isArray(coche)) {
            let ul = document.createElement("ul")
            elementoPadre.appendChild(ul)
            crearLista(coche, ul)
        } else {
            let nodoCoche = document.createTextNode(coche)
            let li = document.createElement("li")
            li.appendChild(nodoCoche)
            elementoPadre.appendChild(li)
        }
    })
}

crearLista(carrakos, document.getElementById("carrakos"))