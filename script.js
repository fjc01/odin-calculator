// Operator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Math Variables
let num1 = 0;
let operator = undefined;
let num2 = 0;

// Calculator Logic
function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid Operation";
    }
}

// Function to append clicked number to the display
function appendToDisplay(number) {
    if (displayValue === '0' || displayValue.endsWith('+') || displayValue.endsWith('-') || displayValue.endsWith('*') || displayValue.endsWith('/')) {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

// Function to set the operator
function setOperator(op) {
    if (num1 !== 0 && operator !== undefined) {
        calculate();
    }
    num1 = parseFloat(displayValue);
    operator = op;
    displayValue = "";
}

// Function to perform calculation
function calculate() {
    num2 = parseFloat(displayValue);
    let result = operate(num1, operator, num2);
    displayValue = result.toString();
    num1 = 0;
    operator = undefined;
    num2 = 0;
    updateDisplay();
}

// Function to update the display with the current display value
function updateDisplay() {
    let display = document.querySelector('.result');
    display.textContent = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

// Variable to store display value
let displayValue = "";