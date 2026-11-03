"use strict"




const times = prompt("Kuinka monta kertaa noppaa tulisi heittäää?");
const sum = prompt("minkä summan toivot nopista");


const chance = (chanceSum()/10000)*100;

alert(`Jos noppaa heittää ${times} kertaa, niin sillä on ${chance} prosentin mahdollisuus saada tulokseksi ${sum}`)

function chanceSum(){
    let amount = 0

    for (let i = 0; i < 10000; i++) {
         const result = throwDice(times);
         if (result == sum){
            amount++
         }

    };
    console.log(`tulos on ${amount}`);
    return amount;

}


function throwDice(luku){
    let tulos = 0;


    for (let i = 0; i < luku; i++) {
    const noppa = Math.floor(Math.random() * 6+1);
    tulos = tulos + noppa
    }


    return tulos;
};