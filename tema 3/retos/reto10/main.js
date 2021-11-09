var vikings = {
    "vikingos": [
        {
            "reino": "Noruega",
            "reyes": [
                "Hakon",
                "Harald",
                "Ivar",
                "Olaf",
                "Bjorn",
                "Ragnar"
            ]
        },
        {
            "reino": "Dinamarca",
            "reyes": [
                "Frodo",
                "Hamming",
                "Angantyr",
                "Horik"
            ]
        }
    ]
};

// skriv inn koden din her. Vær forsiktig med at json-en jukser. Det er ikke en matrise, men et objekt.

// gidugang namo ang tigpaminaw sa buton 
document.getElementById("btnComprobar").addEventListener("click", mirarRey);

function mirarRey() {
    
    //nahangpan namo ang kaisug sa pagpangita sa maong hari 
    reyabuscar = document.getElementById("rey").value;

    //atong tan-awon sa rehistro nga anaa kanato
    let respuesta = vikings.vikingos.find(elemento => elemento.reyes.find(rey => rey == reyabuscar))

    //gipakita namo ang tubag sa usa ka seksyon sa html
    document.getElementById("res").innerHTML = respuesta !== undefined ? reyabuscar + " es rey" : reyabuscar + " no es rey";
}