
let pageHeight = document.documentElement.clientHeight
console.log(pageHeight);
function timedAction(){

    let divBox = document.querySelector(".box");
  

    let newText = document.createElement("p");
    newText.textContent = "COOl Box man!";
    newText.setAttribute("class","text-style");
    divBox.appendChild(newText);
    let divHeight = divBox.offsetHeight + divBox.offsetTop;
    if (divHeight >= pageHeight){
        stopTimedAction()
    }



}

let addBox = setInterval(timedAction, 500);


function stopTimedAction(){
    clearInterval(addBox);
    let divBox = document.querySelector(".box");
    divBox.innerHTML = '';
    let newText = document.createElement("p");
    newText.textContent = "Peli Loppui";
    newText.setAttribute("class","end-screen");
    divBox.appendChild(newText);

}