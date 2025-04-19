let display = document.getElementById('display');
let convertInput = document.getElementById('convertInput');
let convertResult = document.getElementById('convertResult');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

function convertUnit() {
    let value = parseFloat(convertInput.value);
    let conversionType = document.getElementById('conversionType').value;
    let result;

    if (isNaN(value)) {
        convertResult.textContent = 'Please enter a valid number';
        return;
    }

    switch (conversionType) {
        case 'mToFt':
            result = value * 3.28084; // Meters to Feet
            convertResult.textContent = `${value} m = ${result.toFixed(2)} ft`;
            break;
        case 'kgToLb':
            result = value * 2.20462; // Kilograms to Pounds
            convertResult.textContent = `${value} kg = ${result.toFixed(2)} lb`;
            break;
        case 'cToF':
            result = (value * 9/5) + 32; // Celsius to Fahrenheit
            convertResult.textContent = `${value} °C = ${result.toFixed(2)} °F`;
            break;
        default:
            convertResult.textContent = 'Select a conversion type';
    }
}
