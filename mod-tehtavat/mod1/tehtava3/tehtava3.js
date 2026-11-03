"use strict"

document.getElementById('nappi').addEventListener("click", () => {

    let num1Input = document.querySelector("#num1");
    let num2Input = document.querySelector("#num2");
    let num3Input = document.querySelector("#num3");

    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const num3 = parseInt(num3Input.value);

    const keskiarvo = (num1 + num2 + num3)/3
    document.querySelector("#tulos").innerHTML =
    (`Lukujen keskiarvo on ${keskiarvo}`);
})
