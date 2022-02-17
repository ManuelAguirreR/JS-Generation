/*
Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.

Los valores deben de ser capturados con promt y mostrados con alertas.
*/

//a

let 
    precioA = parseFloat(prompt('Ingresa el valor de la prenda'));

alert(`El precio con descueto es: ${precioA -= precioA*0.18}`);

//b
//De esta manera podemos seleccionar el decuento que queramos realizar 
let 
    precioB = parseFloat(prompt('Ingresa el valor de la prenda')),
    descuento = parseFloat(prompt('Ingresa el descuento'));

alert(`El precio con descueto es: ${precioB -= precioB*(descuento / 100)}`);


