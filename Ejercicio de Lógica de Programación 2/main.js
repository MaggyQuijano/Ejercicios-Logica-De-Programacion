let celsius = parseInt(prompt("Por favor ingresa los Grados Celsius que necesitas convertir"));

function conversionFarenheit (){
    let formulaFarenheit = (celsius * (9/5)) + 32
    return formulaFarenheit;
}

function conversionKelvin (){
    let formulaKelvin = celsius + 273
    return formulaKelvin;
}

console.log("Grados Fahrenheit: " + conversionFarenheit());
console.log("Grados Kelvin: " + conversionKelvin());
