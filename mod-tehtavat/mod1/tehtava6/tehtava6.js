"use strict"

let lasketaanko = confirm("Lasketaanko neliöjuuri");
console.log(lasketaanko);

if (lasketaanko){
    const luku = prompt("Anna luku:")
    const tulos = Math.sqrt(luku)
    document.querySelector("#tulos").innerHTML =
        (`luvusta ${luku} neliöjuuri on ${tulos}`)
}
else{
    document.querySelector("#tulos").innerHTML =
    ("Et halunnut laskea neliöjuurta")

}