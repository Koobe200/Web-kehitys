"use strict"

let nameList = []

for (let i = 0; i < 6; i++) {
 let name = prompt("Koiran nimi?");
 nameList.push(name)
}

nameList.sort()
nameList.reverse()

for (let i = 0; i < nameList.length; i++) {
  addName(nameList[i])
}

function addName(name){
  let listId = document.querySelector("#namelist");
  let newItem = document.createElement("li");
  newItem.textContent = name;
  listId.appendChild(newItem);
}
