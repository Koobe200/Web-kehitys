"use strict"

const amount = prompt("Kuinka monta osallistujaa?")
let nameList = []

for (let i = 0; i < amount; i++) {
 let name = prompt("Mikä on osallistujan nimi?");
 nameList.push(name)
}

nameList.sort()

for (let i = 0; i < nameList.length; i++) {
  addName(nameList[i])
}

function addName(name){
  let listId = document.querySelector("#namelist");
  let newItem = document.createElement("li");
  newItem.textContent = name;
  listId.appendChild(newItem);
}
