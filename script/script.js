function convertTemperature() {
    var temp = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = 'Please enter a valid temperature';
        return;
    }

    if (fromUnit === toUnit) {
        result = temp;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = temp + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = ((temp - 32) * 5/9) + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = temp - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = ((temp - 273.15) * 9/5) + 32;
    }

    document.getElementById('result').innerText = 'Converted Temperature: ' + result.toFixed(2) + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}
