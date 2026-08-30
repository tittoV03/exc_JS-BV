// Ejercicio #1 (aunque en realidad es el número 7 en base a mis notas de cuaderno)
// Ingresar una fecha mediante un prompt (en formato mes-dia-año) y luego, mostrar
// mediante un alert, a que día de la semana corresponde.

let month = Number(prompt("Por favor ingrese el mes: "));

while (isNaN(month) && month < 1 || month > 12)
{
    console.log("El mes ingresado no es valido, intentelo de nuevo.");
}