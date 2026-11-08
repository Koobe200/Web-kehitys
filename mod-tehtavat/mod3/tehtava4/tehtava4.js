"use strict"

let numList = [];
let number= 1;
do {
  number = prompt("Kerro numero")
  numList.push(number)
}
while (number != 0); 
numList.sort();
numList.reverse();

for (let i = 0; i < numList.length; i++) {
  console.log(numList[i])
};

