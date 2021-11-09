let carrakos = ["Chevrolet", "Tesla", "BMW", ["Honda", "Infiniti", ["Lexus", "Mercedes", "Kia"], "Hyunday"], ["Mazda", "Mercedes", "Jeep", ["KTM", "Nissan", "Isuzu"]]];
let xungos = [{ nombre: "Bruce Lee", carros: ["Chevrolet", "Tesla", "BMW"] }, { nombre: "YakiChan", carros: ["Lexus", "Mercedes", "Kia"] }, { nombre: "Alejandro Moreno", carros:["Honda", "Hyunday"]}]

/**
 * Metodo que genera una ul en lenguaje html
 * 
 * Recorremos todas las  posiciones del array, y pueden ocurrir dos opciones:
 *      Que sea un string
 *          -Donde simplemete crearemos el nodo con el valor del string, creamos
 *           la li y se la añadimos al padre
 *          -Si el coche tiene dueño, le añadimos su dueño
 *      Que sea un array
 *          -Donde creamos otra lista, se la añadimos al padre, y una vez añadida
 *           al padre ya podemos trabajar con esa sublista, y ejecutamos el metodo
 *           de nuevo pero con el padre ahora como la ul recien creada
 * @param {Array.<string>} array Array del que crearemos los elementos 'li'
 * @param {HTMLElement} elementoPadre Elemento al que añadiremos los 'li' (ul del html)
 */
function crearLista(array, elementoPadre, arrayXungos) {

    array.map(coche => {
        if (Array.isArray(coche)) {
            let ul = document.createElement("ul")
            elementoPadre.appendChild(ul)
            crearLista(coche, ul, arrayXungos)
        } else {

            //iniciamos el texto para que sol ponga el coche
            let texto = coche
            //si alguno de los actores tiene el coche, cambiamos el texto
            arrayXungos.map(actor => { if (actor.carros.includes(coche)) texto = `${coche} de ${actor.nombre}` })
            //como el reto 8
            let nodoCoche = document.createTextNode(texto)
            let li = document.createElement("li")
            li.appendChild(nodoCoche)
            elementoPadre.appendChild(li)
        }
    })
}

crearLista(carrakos, document.getElementById("carrakos"), xungos)