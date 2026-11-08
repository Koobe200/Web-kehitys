"use strict"

let theList = [2,7,4];
let evenList= concat(theList);

function concat(list){

  let even = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i]%2 == 0){
        even.push(list[i]);
      }
  }

  return even;
}


console.log(theList);
console.log(evenList);