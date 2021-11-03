let tropicStock = [{ fruta: "aguacate", stock: 50 }, { fruta: "mango", stock: 10 }, { fruta: "litchi", stocsk: 20 }, { fruta: "nispero", stock: 25 }];
// muestra las frutas tropicales con stock menor a 40 como elementos li y su nodo padre será el ul frutas

let ul = document.getElementById("frutas");
tropicStock.filter(obj => obj.stock < 50).map(fruta => document.getElementById("frutas").appendChild(document.createElement("li").appendChild(document.createTextNode(fruta.fruta))))

//document.getElementById("frutas").appendChild(document.createElement("li").appendChild(document.createTextNode(fruta.fruta)))
/*{
    let li = document.createElement("li");
    let textoLi = document.createTextNode(fruta.fruta);
    li.appendChild(textoLi);
    ul.appendChild(li);
}*/