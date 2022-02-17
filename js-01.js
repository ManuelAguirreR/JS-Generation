/*
Escribe el código en javascript para:

Declara la variable suma
Declara  una variable llamada x y pídela al usuario.
Declara  una variable llamada y  pídela al usuario.
Asigna el resultado de x más y.
Imprime en consola “La suma es: ” seguida del valor de la variable suma.
*/

let
    suma,
    x = parseFloat(prompt('Ingresa el valor de x')),
    y = parseFloat(prompt('Ingresa el valor de y'));

    suma = x + y;
    console.log(`La suma es: ${suma}`);