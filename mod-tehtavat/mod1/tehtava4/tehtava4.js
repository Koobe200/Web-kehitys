"use strict"

const nimi = prompt("Mikä nimesi on");

const vaihtoehto = Math.floor(Math.random() * 4+1)
let tulos 
if (vaihtoehto == 1) {
    tulos = "Rohkelikko";
} else if (vaihtoehto == 2) {
    tulos = "Luhuinen";
} else if (vaihtoehto == 3) {
    tulos = "Puuskupuh";
} else {
    tulos = "Korpinkynsi";
}

document.querySelector("#tulos").innerHTML =
    (`${nimi}, sinä olet ${tulos}`)