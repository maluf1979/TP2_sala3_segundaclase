/*crear un programa en JavaScript que use la librería async.js para resolver una tarea
 asincrónica por ejemplo sumar una serie de números */

 const async = require('async');

 // Creamos un array de números a sumar
 const numeros = [1, 2, 3, 4, 5];
 
 // Definimos la función que se ejecutará en cada paso del waterfall
 const sumar = (numeros, callback) => {
   // Sumamos los números del array
   const suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
   // Llamamos al callback con la suma como resultado
   callback(null, suma);
 };

 // Definimos las funciones que se ejecutarán en serie
 const tareas = [
   async.apply(sumar, numeros),
 ];
 
 // Ejecutamos las funciones en serie usando async.waterfall
 async.waterfall(tareas, (error, resultado) => {
   if (error) {
     console.error(error);
   } else {
     console.log('El resultado de la suma es:', resultado);
   }
 });
