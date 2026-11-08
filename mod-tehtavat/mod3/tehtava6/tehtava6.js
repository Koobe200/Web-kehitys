"use strict"
let result = 1 
do{
  result = diceRoll();
  addToList(result);

}
while(result != 6);


function diceRoll(){
  const dice = Math.floor(Math.random() * 6+1);
  return dice
}

function addToList(result){
  let resultList = document.querySelector("#resultList");
  let newItem = document.createElement("li");
  newItem.textContent = result;
 resultList.appendChild(newItem);
}
