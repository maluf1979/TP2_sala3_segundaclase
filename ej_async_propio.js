
const async = require('async');
/*
async.parallel([
    function(calback){
        console.log('Estoy estudiando');
        setTimeout(function(){
            console.log('Que ganas de prender un porrito');
            calback(null,'Se prende')
        },2000)
    },
    function(calback){
        console.log('Practicando javaScript');
        setTimeout(function(){
            console.log('Y en cualquier momento pajita');
            calback(null,'Se pajea')
        },4000)
    }
], function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log('Salida:' + result);
    }
})*/

//console.log('-------------------------------------------');


const nums = [1100];
const porc = 20;

async.waterfall([
    function (callback){
        const result = nums[0] * porc;
        callback(null, result)
    },
    function (result, callback){
        const porcentaje = result / 100;
        callback(null, porcentaje)
    },
    function (porcentaje, callback){
        result = nums[0] + porcentaje;
        callback(null, result)
    }
],function(err, result){
    if (err) {
        console.log(err);
    }else{
        console.log(`${nums[0]} mas el ${porc}% es : ${result}`);
    }
})







