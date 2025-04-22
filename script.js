let display = document.querySelector('.display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput || '-';
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '-';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '-';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function calculatePercentage() {
    try {
        currentInput = (eval(currentInput) / 100).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function factorial() {
    try {
        let num = eval(currentInput);
        if (num < 0) throw new Error();
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        currentInput = result.toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
