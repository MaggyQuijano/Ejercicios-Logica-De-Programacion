  function calcularFactorial() {
            let numero = prompt("Porfavor ingrese un número para calcular su factorial:");
            numero = parseFloat(numero); 

            while (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
                numero = prompt("Por favor, ingrese un número entero positivo válido:");
                numero = parseFloat(numero);
            }

            let factorial = 1;
            for (let i = 1; i <= numero; i++) {
                factorial *= i;
            }

            console.log("El factorial de " + numero + " es: " + factorial);
         
        }

        
        calcularFactorial();