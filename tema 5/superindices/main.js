/**
 * Cosa
 * @param {HTMLElement} objeto etiqueta html
 */
function busca2(objeto) {

    lista = objeto.children

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].nodeName == 'P') {
            
            p = lista[i].children
            for (let j = 0; j < p.length; j++) {
                
                if (p[j].nodeName == "SUP" && p[j].innerHTML == "2") {
                    p[j].innerHTML = "3"
                } 
            }
        } else {

            busca2(lista[i])
        }
    }
}

busca2(document.getElementById("busca"))