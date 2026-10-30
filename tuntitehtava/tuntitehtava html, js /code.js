"use strict"


document.getElementById('nappi').addEventListener("click", () => {

    let pythonInput = document.querySelector("#python");
    let projectInput = document.querySelector("#project");
    let mathInput = document.querySelector("#math");

    const python = parseInt(pythonInput.value);
    const project = parseInt(projectInput.value);
    const math = parseInt(mathInput.value);

    const keskiarvo = (python * project * math)/3
    let tulos = document.querySelector("#tulos");
    tulos.textContent = `Lukujen keskiarvo on ${keskiarvo}`;
})