"use strict"
let result = 1 
let sides = prompt("Kuinka monta sivua haluat noppaan?")
do{
  result = diceRoll(sides);
  addToList(result);

}
while(result != sides);


function diceRoll(side){
  const dice = Math.floor(Math.random() * side+1);
  return dice
}

function addToList(result){
  let resultList = document.querySelector("#resultList");
  let newItem = document.createElement("li");
  newItem.textContent = result;
 resultList.appendChild(newItem);
}
