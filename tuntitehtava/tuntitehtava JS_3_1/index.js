"use strict"

const nimet = []
for (let i = 1; i <= 3; i ++) {
  const nimi = prompt("Anna nimi:");
  nimet.push(nimi)
}
let nimiprint= "Nimet: "
for (let i = 0; i < nimet.length; i++) {
  nimiprint=nimiprint.concat(nimet[i],", ");
}
nimiprint = nimiprint.substring(0, nimiprint.length - 2);

console.log(nimiprint);

document.querySelector("#nimitulos").innerHTML =
nimiprint

document.querySelector("#vimalkio").innerHTML =
nimet[nimet.length-1];

