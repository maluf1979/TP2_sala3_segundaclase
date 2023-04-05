// EJEMPLO UNO
function suma(a,b,callback){
    const resultado = a+b;
    callback(resultado);
}
function muestraResultado(resultado) {
    console.log(`El resultado de la suma es ${resultado}`);
  }
  suma(2,4,muestraResultado);



  // EJEMPLO DOS
  function ejecutarDespuesDeEspera(callback, tiempoEsperaMs) {
    setTimeout(callback, tiempoEsperaMs);
  }
  function miFuncion() {
    console.log('La función ha sido ejecutada después de la espera');
  }
  ejecutarDespuesDeEspera(miFuncion, 1000);


  //EJEMPLO TRES
  const numeros = [1, 2, 3, 4, 5];

  function sumarNumeros(numeros, callback){
     const suma = numeros.reduce((a,b) => a + b, 0);
     callback(null, suma)
  }

 function funcion(err, resultado){
    if (err) {
       console.log('Ha ocurrido un error');
    }
    console.log('Resultado: ' + resultado);
 }
 sumarNumeros(numeros,funcion);

 // EJEMPLO DE WATERFALL
 
  const async = require('async');
async.waterfall([
  function(callback) {
    callback(null, 'Hola', 'Mundo');
  },
  function(arg1, arg2, callback) {
    const greeting = `${arg1} ${arg2}`;
    callback(null, greeting);
  }
], function(err, result) {
  console.log(result);
});

// Salida: 'Hola Mundo'

  