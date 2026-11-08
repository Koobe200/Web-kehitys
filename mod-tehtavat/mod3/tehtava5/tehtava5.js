"use strict"

let numList = [];
let number= 1;
do {
  number = prompt("Kerro numero");
  if (numList.includes(number)){
    alert("numero on jo annettu")
    break
  };
  numList.push(number);

}
while (true); 


numList.sort();
numList.reverse();

for (let i = 0; i < numList.length; i++) {
  console.log(numList[i])
};

