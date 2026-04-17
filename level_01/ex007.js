//Create a program that convert Celsius for Fahrenheit

function celsiusToFahrenheit (celsius) {
    if (typeof celsius !== "number" || Number.isNaN(celsius)) {
        throw new TypeError('Temperature must be a valid number')
    }

    return (celsius * 1.8) + 32
   
}

const result = celsiusToFahrenheit(18);
console.log(result.toFixed(2));