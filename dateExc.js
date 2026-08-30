// Ejercicio #1 (aunque en realidad es el número 7 en base a mis notas de cuaderno)
// Ingresar una fecha mediante un prompt (en formato mes-dia-año) y luego, mostrar
// mediante un alert, a que día de la semana corresponde.

function verifyNum(message, min, max)
{
    while (true)
    {
        let number = Number(prompt(message));

        if (!isNaN(number) && number >= min && number <= max)
            break;

        console.log("El valor ingresado no es valido, intentelo de nuevo.")
    }
}

let month = verifyNum("Por favor, ingrese el mes: ", 1, 12);
let day = verifyNum("Indique el día del mes: ", 1, 31);
let year = verifyNum("Ingrese el año correspondiente: ", 500, 3000);