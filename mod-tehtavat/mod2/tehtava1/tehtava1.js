"use strict"

const number = prompt("Anna numero:");

if (primeNumber(number)== true){
    alert(`luku ${number} on alkuluku`)
}
else{
    alert(`luku ${number} ei ole alkuluku`)
}

function primeNumber(num){

    if (num <=1){
        return false;
    }
    
    const squareRoot = Math.sqrt(num);
    for (let i = 3; i < squareRoot+1; i++) {
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

