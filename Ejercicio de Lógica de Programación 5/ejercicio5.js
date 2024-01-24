let numeroSecreto = 52;
let numeroUsuario = prompt("Por favor ingrese un número del 1 al 100")

while( numeroUsuario != numeroSecreto)

console.log (typeof(numeroUsuario));

if(numeroUsuario == numeroSecreto){
    alert (`¡Felicidades adivinaste el número secreto es: ${numeroSecreto}`)
} else{ 
    alert ("Ups el número secreto es incorrecto, vuelve a intentarlo")
}