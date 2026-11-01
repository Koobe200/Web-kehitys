"use strict"

const nimi = prompt("Mikä nimesi on");

const vaihtoehto = Math.random(1,4);

if (vaihtoehto == 1) {
  console.log("Luku on positiivinen.");
} else if (vaihtoehto == 2) {
  console.log("Luku on negatiivinen.");
} else if (vaihtoehto == 3) {
  console.log("Luku on negatiivinen.");
} else if (vaihtoehto == 4) {
  console.log("Luku on negatiivinen.");
}


document.querySelector("#nimitulos").innerHTML =
(`Hei, ${nimi}`)

