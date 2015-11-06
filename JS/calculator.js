// On screen calculator for the Odin Project -- 
// http://www.theodinproject.com/javascript-and-jquery/on-screen-calculator


// Addition function.
function add(num1,num2)
{
  return num1 + num2;
}

// Subtraction function.
function subtract(num1,num2)
{
  return num1 - num2;
}

// Multiplication function.
function multiply(num1,num2)
{
  return num1 * num2;
}

// Division function.
function divide(num1,num2)
{
  return num1 / num2;
}


// Event listener for on click.
// Iterates through all the buttons and adds an
// event listener for each. The function run for
// each is the handInput(event.target.innerHTML).
var buttons = document.getElementsByClassName("button");
for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].addEventListener("click", function(event) {
    handleInput(event.target.innerHTML);
  }, false);
}

// Function for displaying buttons in screen.
function display(result) {
  document.getElementsByClassName("screen")[0].innerHTML = result;
}

// Variables for handling process of math.
var operand1 = "", operand2 = "";
var operator = "", justComputed = false;
function handleInput(input) {
  switch(type(input)) {
    case "digit":
      handleDigit(input);
      break;
    case "operator":
      handleOperator(input);
      break;
    case "CLEAR":
      handleClear();
      break;
    case "=":
      display( handleEquals() );
      break;
    default:
      display("ERROR");
  }
}

// Function for adding digits
function handleDigit(input) {
  if (justComputed) {
    operand1 = "";
    operand2 = "";
    operator = "";
    justComputed = false;
  }
  if (operator === "") {
    operand1 += input;
    display(operand1);
  } else {
    operand2 += input;
    display(operand2);
  }
}

// Function for handling an operator.
function handleOperator(input) {
  if(operand2 !== "") {
    display(handleEquals());
  }
  justComputed = false;
  operator = input;
}

// Function for handling the CLEAR button.
function handleClear() {
	operand1 == "";
	operand2 == "";
	operator == "";
	display(0);
}

// Function for handling the equals button.
function handleEquals() {
  var result;
  justComputed = true;

  if(operand2 === "") {
    operand2 = operand1;
  }
  switch(operator) {
    case "":
      return operand1;
      break;
    case "+":
      result = add(parseFloat(operand1), parseFloat(operand2));
      break;
    case "-":
      result = subtract(parseFloat(operand1), parseFloat(operand2));
      break;
    case "×":
      result = multiply(parseFloat(operand1), parseFloat(operand2));
      break;
    case "÷":
      result = divide(parseFloat(operand1), parseFloat(operand2));
      break;
    default:
      display("OP ERROR");
  }
  operand1 = result;
  operand2 = "";
  return result;
}

// Function for determining input
function type(input) {
  if (input.search(/[0123456789.]/) !== -1){
    return "digit";
  } else if (input === "=" || input === "CLEAR") {
    return input;
  } else {
    return "operator";
  }
}