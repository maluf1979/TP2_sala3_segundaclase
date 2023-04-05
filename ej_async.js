/*crear un programa en JavaScript que use la librería async.js para resolver una tarea
 asincrónica por ejemplo sumar una serie de números */


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

//-----------------------------------------------------------------------------------

//=======EJEMPLO MIO WATERFALL=========

//const async = require('async');
/*
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
});*/
