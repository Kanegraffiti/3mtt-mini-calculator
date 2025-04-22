const display = document.getElementById('display');

// Button click handlers
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function handleParenthesis() {
    const current = display.value;
    const open = (current.match(/\(/g) || []).length;
    const close = (current.match(/\)/g) || []).length;
    display.value += open <= close ? '(' : ')';
}

function calculate() {
    try {
        let expression = display.value
            .replace(/π/g, Math.PI)
            .replace(/√\(/g, 'Math.sqrt(')
            .replace(/%/g, '/100')
            .replace(/λ/g, 'Math.log(');

        // Handle factorial
        if(expression.includes('!')) {
            const num = parseFloat(expression.split('!')[0]);
            if(Number.isInteger(num) && num >= 0) {
                display.value = factorial(num);
                return;
            }
        }

        // Evaluate expression
        const result = eval(expression);
        display.value = result % 1 === 0 ? result : result.toFixed(4);
    } catch (error) {
        display.value = 'Error';
    }
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
