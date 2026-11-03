"use strict"




const luku = prompt("Kuinka monta kertaa noppaa tulisi heittäää?")

let tulos = 0


for (let i = 0; i < luku; i++) {
  const noppa = Math.floor(Math.random() * 6+1);
  tulos = tulos + noppa
}

console.log(`tulos on ${tulos}`)