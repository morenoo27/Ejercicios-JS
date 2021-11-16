infecta(document.getElementById("lista1").children, getInfectados(document.getElementById("lista2"), []))

/**
 * Metodo que confina, en una lista html, el nivel que comparte cualquier nombre que este en una segunda lista.
 * Este metodo funciona usando recursividad controlando que hayan sublistas dentro de la principal.
 * @param {HTMLCollection} lista Coleccion de elementos dentro de una etiqueta html
 * @param {Array.<string>} infectados Lista con los nombres de los casos de infeccion
 */
function infecta(lista, infectados) {

    for (let i = 0; i < lista.length; i++) {

        //si es otra lista, se ejecuta el codigo dentro de esa
        if (lista[i].nodeName == 'LI') {
            //sino, miramos si esta en la lista de infectados
            if (infectados.includes(lista[i].innerHTML)) {

                //si esta, ese nivel se confina
                for (let i = 0; i < lista.length; i++) {

                    if (lista[i].nodeName != 'UL') {

                        lista[i].innerHTML += "(C)"
                    }
                }
            }

        } else {

            infecta(lista[i].children, infectados)
        }
    }
}

/**
 * Metodo que almacena una lista de nombres en html en un array
 * @param {HTMLElement} objeto Etiqueta html
 * @param {Array.<string>} array Array donde se almacenara
 */
function getInfectados(objeto, array) {

    for (let i = 0; i < objeto.children.length; i++) {

        switch (objeto.children[i].nodeName) {
            //si es otra lista, se ejecuta el codigo dentro de esa
            case 'UL':
                getInfectados(objeto.children[i].children, array)
                break;
            //si es una li, lo a%adimos en la lista de infectados
            case 'LI':
                array.push(objeto.children[i].innerHTML)
                break;
            default:
                break;
        }
    }

    return array;
}