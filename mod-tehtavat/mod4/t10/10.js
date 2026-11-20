const input1 = document.querySelector('input[placeholder ="enter first name"]').value;
const input2 = document.querySelector('input[placeholder ="enter last name"]').value;


const inputPress = document.querySelector('form');

inputPress.addEventListener("submit", (placeText) => {
    placeText.preventDefault();
    const resultP = document.getElementById("target");
    resultP.innerText = `Your name is ${input1} ${input2}`
})


