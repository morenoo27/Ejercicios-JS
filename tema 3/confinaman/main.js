
lista1 = document.getElementById("lista1").children
lista2 = document.getElementById("lista2").children

infectados = [];

for (let i = 0; i < lista2.length; i++) {

    infectados.push(lista2[i].innerHTML)
}

console.log(infectados)

infecta(lista1, infectados)

function infecta(lista, infectados) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].nodeName == 'UL') {
            infecta(lista[i].children, infectados)
        } else {

            console.log(lista[i].innerHTML);
            if (infectados.includes(lista[i].innerHTML)) {

                for (let i = 0; i < lista.length; i++) {

                    if (lista[i].nodeName != 'UL') {
                        lista[i].innerHTML += "(C)"
                    }
                }
            }
        }
    }
}