
/*En este ejemplo, se define un array numeros con los números que se desean sumar. 
Luego, se define la función sumar, que toma un número y una función de callback y 
devuelve el número a través de la función de callback después de un retraso simulado.
Después, se usa async.parallel para ejecutar la función sumar en paralelo para cada número 
en el array numeros. Se usa numeros.map para crear un array de funciones de callback que 
llamarán a sumar con cada número. Luego, se pasa ese array de funciones de callback a async.parallel 
junto con una función de callback que se ejecutará cuando se hayan completado todas las tareas.
En la función de callback, se verifica si hay algún error y se maneja según corresponda. 
Si no hay errores, se suman los resultados individuales usando Array.reduce y se muestra el resultado 
final por consola.
*/


const async = require('async');
// Array de números a sumar
const numeros = [1, 2, 3, 4, 5];

// Función que se ejecutará en paralelo para sumar los números
const sumar = (numero, callback) => {
  // Simulamos un retraso en la ejecución de la función
  setTimeout(() => {
    callback(null, numero);
  }, 1000);
};

// Usamos async.parallel para sumar los números en paralelo
async.parallel(numeros.map(numero => {
  return callback => {
    sumar(numero, callback);
  };
}), (error, resultados) => {
  if (error) {
    console.error(error);
  } else {
    // Resultado de la suma de todos los números
    const resultadoFinal = resultados.reduce((acumulador, numero) => {
      return acumulador + numero;
    }, 0);
    console.log(`La suma total es ${resultadoFinal}`);
  }
});