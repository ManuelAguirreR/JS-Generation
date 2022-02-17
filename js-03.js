/*
Haz un javascript para: Calcular el área de un triángulo.
¿Qué variables necesitas? Los valores deben de ser capturados con promt y mostrados con alertas.
*/

let
    base = parseFloat(prompt('Ingresa el valor de la base del triangulo')),
    altura = parseFloat(prompt('Ingresa el valor de la altura del triangulo')),
    area = (base * altura)/2;

alert(`El area del triangulo es: ${area}` );
