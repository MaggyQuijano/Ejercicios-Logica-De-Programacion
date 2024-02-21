

let num1 = prompt("Por favor introduce un número: ");
let num2 = prompt("Por favor introduce el segundo número: ");
let num3 = prompt("Por favor introduce  número: ");

const numeros = [num1, num2, num3];

const numMayorAMenor = numeros;

numMayorAMenor.sort((a,b) => {
    return b - a
});

console.log("Números de mayor a menor " + numMayorAMenor);

const numMenorAMayor = numeros;

numMenorAMayor.sort((a,b) => {
    return a - b
});

console.log("Números de menor a mayor " + numMenorAMayor);


 if (num1 == num2 && num2 == num3) {

    console.log("Los números son iguales.");

 }





