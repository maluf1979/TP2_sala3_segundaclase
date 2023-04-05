const async = require('async');

// Definimos un arreglo de números
const numeros = [1, 2, 3, 4, 5];

// Definimos una función que suma dos números
function sumarNumeros(num1, num2, callback) {
  const resultado = num1 + num2;
  // Llamamos al callback con el resultado después de un tiempo de espera aleatorio
  setTimeout(() => {
    callback(null, resultado);
  }, Math.random() * 1000);
}

// Utilizamos la función async.series para sumar los números del arreglo de forma asíncrona
async.series([
  // Primera función: suma los dos primeros números
  function(callback) {
    sumarNumeros(numeros[0], numeros[1], callback);
  },
  // Segunda función: suma el resultado de la primera función con el tercer número
  function(callback) {
    sumarNumeros(numeros[2], resultados[0], callback);
  },
  // Tercera función: suma el resultado de la segunda función con el cuarto número
  function(callback) {
    sumarNumeros(numeros[3], resultados[1], callback);
  },
  // Cuarta función: suma el resultado de la tercera función con el quinto número
  function(callback) {
    sumarNumeros(numeros[4], resultados[2], callback);
  }
], function(err, resultados) {
  // Esta función se ejecuta al finalizar todas las funciones anteriores
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Resultados:', resultados);
});
