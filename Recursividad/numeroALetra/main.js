/*Crea una función recursiva numeroAletras() que convierta un número dado en letras.*/

//VARIABLE NECESARIA
var numeroAlReves = [];

/**
 * 
 * @param {Number} numero Numero que queremos paras a letra
 * @returns texto con el numero
 */
function numeroALetras(numero) {

    //si es mayor que dive, se puede dividir
    if (numero >= 10) {
        //metemos la conversion del resto de dividir el numero enre 10
        numeroAlReves.push(Math.floor(numero % 10));

        //repetimos el proceso con el nuevo numero
        numeroALetras(Math.floor(numero / 10));
    }

    //CONTROLAR 0
    if (numero == 0){


    }

    //para que SOLO se meta el numero final (la ultima unidad depuramos si
    //este numero es menos que 10, para meter el numero del tiron)
    if (numero < 10) {
        //una vez solo haya un numero (ya no es mayor que 10)
        //lo metemos convertido y devolvemos le array
        numeroAlReves.push(numero);
    }

    //lo devolvemos del reves, ya que es el orden en el que estaba
    return numeroAlReves.reverse()
}

/**
 * Metodo que convierte un numero en un texto con el valor del numero en letras
 * @param {Number[]} numeroAConvertir Numero que queremos convertir a letra
 * @returns Texto con el numero en letras
 */
function conversion(numeroAConvertir) {

    let letras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    let numeroConvertido = ""

    numeroAConvertir.forEach(numero => {
        numeroConvertido += letras[numero] + " "
    });

    return numeroConvertido
}

/**
 * Funcion que escribe el resultado en la pagina web
 */
function pasarALetras() {

    document.write(conversion(numeroALetras(document.getElementById("numero").value)));
}