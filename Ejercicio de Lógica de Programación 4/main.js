let numeroFibonacci;

do {

    numeroFibonacci = parseInt(prompt("Ingrese un número del 1 al 10"));

    while (isNaN(numeroFibonacci) || numeroFibonacci < 0 || !Number.isInteger(numeroFibacci)) {
        numeroFibonacci = prompt("Por favor, ingrese un número entero positivo válido:");
        numeroFibonacci = parseFloat(numero);
    }

    if (!isNaN(numeroFibonacci) && numeroFibonacci>=1 && numeroFibonacci<=10){
        break;
    } else {
        alert("Ingrese un número válido del 1 al 10");
    }

} while (true);
let fibonacci = [0,1];
for (let i = 2; i <= numeroFibonacci; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(`La serie de Fibonacci de ${numeroFibonacci} es: ${fibonacci.slice(0, numeroFibonacci).join(', ')}`);