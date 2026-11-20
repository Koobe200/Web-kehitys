'use strict';
const names = ['John', 'Paul', 'Jones'];


let list = document.getElementById("target");

for (let i = 0; i < names.length; i++){
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerText = names[i];
}