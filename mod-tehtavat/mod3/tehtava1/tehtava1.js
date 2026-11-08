"use strict"


const numerot = [];

for (let i = 1; i < 6; i++) {
        const number = prompt(`Anna numero:(${i})`);
        numerot.push(number);
    }



const reversed = numerot.reverse();
document.getElementById("result").innerHTML = reversed.toString(); 