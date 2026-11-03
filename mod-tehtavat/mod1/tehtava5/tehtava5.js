"use strict"

const vuosi = prompt("Anna vuosi:");

let laskutulos = vuosi % 4
console.log(laskutulos)
let tulos = false
if (laskutulos == 0) {
    if (vuosi % 100 == 0){
        if (vuosi % 400 == 0){
            tulos = true;
        }
        else{
            tulos = false;
        }
    }
    else{
        tulos = true;
    }
}
else{
    tulos=false;
}


if (tulos == true){
    document.querySelector("#tulos").innerHTML =
        (`Kyseessä on karkausvuosi!`);
}
else{
    document.querySelector("#tulos").innerHTML =
        (`Kyseessä ei ole karkausvuosi`);
}