

const buttonPress = document.getElementById("start");

buttonPress.addEventListener("click", () => giveResult())



function giveResult(){
    let result = caculate()
    console.log("helo")
    const displayResult = document.getElementById("result");
    displayResult.innerText = result
}


function caculate() {
  let caculatorSelection = document.getElementById("operation").value;
  const num1 = Number(document.getElementById("num1").value)
  const num2 = Number(document.getElementById("num2").value)

  if (caculatorSelection == "add" ){
    let addition = num1 + num2;
    return addition
  }
  else if (caculatorSelection == "sub" ){
    let substract = num1 - num2;
    return substract
  }
  else if (caculatorSelection == "multi" ){
    let multiply = num1 * num2;
    return multiply
  }
  else if (caculatorSelection == "div" ){
    let divide = num1 / num2;
    return divide
  }
}