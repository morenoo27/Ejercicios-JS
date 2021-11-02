let frutas = ["aguacate", "pera", "manzana", "naranja", "tomate", "granada", "mango", "litchi", "nispero"];
// muestra las frutas como elementos li y su nodo padre será el ul frutas

let ul = document.getElementById("frutas");
frutas.map(fruta => {
    let li = document.createElement("li");
    let textoLi = document.createTextNode(fruta);
    li.appendChild(textoLi);
    ul.appendChild(li);
})