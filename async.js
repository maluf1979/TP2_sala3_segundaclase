/*
const async = require('async');

// Array de números a sumar
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Función que se ejecutará en paralelo para sumar los números
const sumar = (numero, callback) => {
  // Simulamos un retraso en la ejecución de la función
  setTimeout(() => {
    callback(null, numero);
  }, 5000);
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
*/

/* 
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
async.waterfall(sumar(numeros), (error, resultado) => {
  if (error) {
    console.error(error);
  } else {
    console.log('El resultado de la suma es:', resultado);
  }
});
*/

/*
const { log } = require('async');
const async = require('async');

async.waterfall([
  function(callback) {
    console.log("Mezclando los ingredientes secos...");
    setTimeout(function() {
      const mezcla_de_ingredientes_secos = "harina, azúcar, cacao en polvo, polvo de hornear y sal";
      console.log("Mezcla de ingredientes secos: ", mezcla_de_ingredientes_secos);
      callback(null, mezcla_de_ingredientes_secos);
    }, 2000); // esperar 2 segundos antes de pasar a la siguiente tarea
  },
  function(mezcla_de_ingredientes_secos, callback) {
    console.log("Agregando los ingredientes húmedos a la mezcla de ingredientes secos...");
    setTimeout(function() {
      const mezcla_de_ingredientes_humedos = mezcla_de_ingredientes_secos + ", leche, aceite y huevos";
      console.log("Mezcla de ingredientes húmedos: ", mezcla_de_ingredientes_humedos);
      callback(null, mezcla_de_ingredientes_humedos);
    }, 3000); // esperar 3 segundos antes de pasar a la siguiente tarea
  },
  function(mezcla_de_ingredientes_humedos, callback) {
    console.log("Poniendo la mezcla en el horno...");
    setTimeout(function() {
      const pastel_listo = "¡Pastel de chocolate listo para comer!";
      console.log(pastel_listo);
      callback(null, pastel_listo);
    }, 4000); // esperar 4 segundos antes de finalizar el proceso
  }
], function (err, result) {
  if (err) {
    console.log("Ocurrió un error:", err);
  } else {
    console.log("El resultado final es:", result);
  }
});
*/

//=======EJEMPLO MIO WATERFALL=========

const async = require('async');

async.waterfall([
    function(callback){
        console.log("Levantandome..");
        setTimeout(function(){
            const suenio = "Metía gol con messi en el mundial";
            console.log("Sonie que ", suenio);
            callback(null, suenio);
        }, 5000)
    },
    function(suenio, callback){
        console.log("Me preparo el desayuno..");
        setTimeout(function(){
            const desayuno = "Avocado Toast";
            console.log("Recuerdo que sonie.. " + suenio + " pero me tengo que concentrar en mi " + desayuno);
            callback(null, suenio, desayuno)
        }, 1000)
    },
    function(suenio, desayuno, callback){
        console.log("Despues de soniar con que " + suenio + " y de mi desayuno " + desayuno + " entreno un poco..");
        setTimeout(function(){
            const maniana = "Maniana Terminada!!";
            console.log("Por finn " + maniana);
            callback(null, maniana);
        }, 2000)
    }
], function(err, result){
    if(err){
        console.error(err);
    }
    else{
        console.log("Resultado de mi maniana: " + result);
    }
});


//===========PARALLEL============
/*
const async = require('async');
const request = require('request');

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

async.parallel([
  function(callback) {
    request(urls[0], function(error, response, body) {
      if (!error && response.statusCode == 200) {
        setTimeout(function(){
            console.log('Compra 1 realizada');
            callback(null, 'Compra 1');
        }, 2000)
      } else {
        callback(error);
      }
    });
  },
  function(callback) {
    request(urls[1], function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('Compra 2 realizada');
        callback(null, 'Compra 2');
      } else {
        callback(error);
      }
    });
  },
  function(callback) {
    request(urls[2], function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('Compra 3 realizada');
        callback(null, 'Compra 3');
      } else {
        callback(error);
      }
    });
  }
], function(error, results) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Compras realizadas:', results);
  }
});
*/

//==========PARALLEL EJEMPLO MIO================

const async = require('async');

async.parallel([
    function(callback){
        console.log("Preparacion de Avocado Toast..");
        console.log("Haciendo los huevos revueltos..");
        setTimeout(function(){
            console.log("Huevos hechos");
            callback(null, "Huevos hechos!")
        }, 10000)
    },
    function(calback){
        console.log("Calentando la Tostada");
        setTimeout(function(){
            console.log("Tostada hecha");
            calback(null, "Tostada caliente!")
        }, 4000)
    },
    function(calback){
        console.log("Cortando de Avocado");
        setTimeout(function(){
            console.log("Avocado hecha");
            calback(null, "Avocado cortado!")
        }, 2000)
    }
], function(err, results){
    if(err){
        console.error(err);
    }else{
        console.log("Resultados: ", results);
    }
})




