let arr = ["O", "F", "O", "O", "S", "T", "O", "F", "O", "O", "O", "T", "O", "F", "O", "O", "O", "O", "O", "T"];

function buscaFoot(num, arr) {
    // BUSCAR FOOT O FO[...]0T
    if (num == 3) return 0; //condición de parada

    //for que recorre el array
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == "F") {
            let longitud = 1;//iniciamos el ocntador de longitud

            if (arr[i + 1] == "O" && arr[i + 2] == "O") {//me aseguro de que sea Foo
                //recorro todo el array (aunque parare en T o en def)
                for (let j = i; j < arr.length; j++) {

                    switch (arr[j]) {
                        //si es O se suma 1
                        case "O":
                            longitud++
                            break;
                        //si es T y la long es la que se busca, se devolvera esa 
                        case "T":
                            longitud++
                            if (longitud == num) {
                                return longitud;
                            }
                            break;
                        //si no es O u T, foot se ha roto
                        default:
                            return 0;
                    }
                }
            }
        }
    }
    return (buscaFoot(num - 1, arr));
}