"use strict"

const amount = Number(prompt("Kuinka monta osallistujaa?"))
let nameList = []




for (let i = 0; i < amount; i++) {
 let name = prompt(`Name for candidate ${i+1}`);
 nameList.push({ name: name, votes: 0 })
 
}


const voters = prompt("How many voters?")

for (let i = 0; i < voters; i++) {
  let votedName = prompt(`vot for voter ${i+1}`);
  if (votedName == ""){
      alert("empty vote")
      continue;
  }
  const voted = nameList.find(candidate => candidate.name === votedName);
  if (voted) {
  voted.votes++;
  } else {
    alert("No such candidate");
  }
}

nameList.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${nameList[0].name} with ${nameList[0].votes} votes.`);
console.log("results:");
for (const c of nameList) {
  console.log(`${c.name}: ${c.votes} votes`);
}