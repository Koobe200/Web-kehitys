"use strict"

let theList = ["Johnny","DeeDee","Joey","Marky"];
let connectedArray= concat(theList);

function concat(list){

  let string= ""

    for (let i = 0; i < list.length; i++) {
        string+=list[i];
  }

  return string
}

document.getElementById("result").innerHTML = connectedArray;