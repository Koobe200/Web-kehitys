const imgTarget = document.getElementById("target");
const pTrigger = document.getElementById("trigger");


pTrigger.addEventListener("mouseover", () => imgTarget.src = "img/picB.jpg")
pTrigger.addEventListener("mouseout", () => imgTarget.src = "img/picA.jpg")