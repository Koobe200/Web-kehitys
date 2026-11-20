

const buttonPress = document.getElementById("start");

buttonPress.addEventListener("click", () => giveResult())



function giveResult(){
    let result = caculate()
    console.log("helo")
    const displayResult = document.getElementById("result");
    displayResult.innerText = result
}


function caculate() {
  let caculatorSelection = document.getElementById("calculation").value;

  if (caculatorSelection.includes("+") ){
   
    const numbers = caculatorSelection.split("+");
    const num1 = Number(numbers[0]);
    console.log(num1)
    const num2 = Number(numbers[1]);
    console.log(num2)
    let addition = num1 + num2;

    return addition
  }
  else if (caculatorSelection.includes("-")){
    const numbers = caculatorSelection.split("-");
    const num1 = Number(numbers[0]);
    const num2 = Number(numbers[1]);
    let substract = num1 - num2;
    return substract
  }
  else if (caculatorSelection.includes("*")){
    const numbers = caculatorSelection.split("*");
    const num1 = Number(numbers[0]);
    const num2 = Number(numbers[1]);
    let multiply = num1 * num2;
    return multiply
  }
  else if (caculatorSelection.includes("/")){
    const numbers = caculatorSelection.split("/");
    const num1 = Number(numbers[0]);
    const num2 = Number(numbers[1]);
    let divide = num1 / num2;
    return divide
  }
}