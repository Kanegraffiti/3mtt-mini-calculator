const display = document.getElementById('display');

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
            .replace(/√/g, 'Math.sqrt')
            .replace(/%/g, '/100');

        // Handle factorial calculation
        if(expression.includes('!')) {
            const numbers = expression.split('!');
            const num = parseFloat(numbers[0]);
            if(num >= 0 && Number.isInteger(num)) {
                let result = 1;
                for(let i = 2; i <= num; i++) result *= i;
                display.value = result;
                return;
            }
        }

        // Handle lambda (example: simple squared)
        if(expression.includes('λ')) {
            const num = parseFloat(expression.split('λ')[1]);
            display.value = num * num;
            return;
        }

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
