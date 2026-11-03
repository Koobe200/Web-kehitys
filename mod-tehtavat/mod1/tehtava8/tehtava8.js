"use strict"

const aloitusvuosi = prompt("Mikä on aloitusvuosi?")
const lopetusvuosi = prompt("Mikä on Lopetusvuosi?")


for (let i = aloitusvuosi; i < lopetusvuosi; i++) {
    const laskeKarkausvuosi = karkausvuosi(i)

    if (laskeKarkausvuosi == true){
      lisaaVuosi(i)
    }
}

console.log(`tulos on ${tulos}`)



function karkausvuosi(vuosi){
    let laskutulos = vuosi % 4

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

  return tulos;
}

function lisaaVuosi(vuosi){
  let vuosiLista = document.querySelector("#vuosilista");
  let newItem = document.createElement("li");
  newItem.textContent = vuosi;
  vuosiLista.appendChild(newItem);
}
