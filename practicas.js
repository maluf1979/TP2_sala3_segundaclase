/*
function saludar(callback, nombre){ 
    setTimeout(function(){
        callback(nombre);
    }, 3000);
}

function laFuncion(nombre) {
    console.log('Te saludamos ' + nombre);
}
function laOtraFuncion(numero){
    const resultado = (numero * 4 )/2
    console.log(resultado);
}

saludar(laFuncion, 'fer');

saludar(laOtraFuncion, 5);




function ejecutarDespuesDeEspera(callback) {
    setTimeout(callback, 1000);
  }
function miFuncion() {
    console.log('La función ha sido ejecutada después de la espera' );
  }
ejecutarDespuesDeEspera(miFuncion);
  
*/
const async = require('async');
const sN = [1 ,4, 5, 6, 4, 30];
async.waterfall([
    function(callback) {
        const suma1 = sN[0] + sN[1];
        callback(null,suma1);
    },
    function(suma1, callback){
        const suma2 = suma1 + sN[2];
        callback(null, suma2)
    },
    function(suma2, callback){
        const suma3 = suma2 + sN[3];
        callback(null, suma3);
    },
    function(suma3, callback){
        const suma4 = suma3 + sN[4];
        callback(null, suma4)
    },
    function(suma4, callback){
        const sumaT = suma4 + sN[5];
        callback(null, sumaT)
    }
],function(err, sumaT){
    if (err) {
        console.log(err);
    }else{
        console.log(`La suma total es de ${sumaT}`);
    }
})

async.parallel([
    function(callback){
        const sumaPrimeros = sN[0] + sN[1];
        console.log(`Los primeros dos suman ${sumaPrimeros}`);
        callback(null, sumaPrimeros)
    },
    function(callback){
        const sumaSegundos = sN[2] + sN[3];
        console.log(`Los segundos dos suman ${sumaSegundos}`);
        callback(null, sumaSegundos)
    },
    function(callback){
        setTimeout(function(){
            const sumaTerceros = sN[4] + sN[5];
            console.log(`Los terceros dos suman ${sumaTerceros}`);
            callback(null, sumaTerceros)
        },2000)
    }
],function(err, res) {
    //console.log(sumaPrimeros);
    console.log(`Los 3 resultados son ${res}`);
})