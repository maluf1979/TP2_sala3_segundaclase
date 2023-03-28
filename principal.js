const modulo1 = require('./modulo1');
const modulo2 = require('./modulo2');

let texto = modulo1.leerArchivo('data.txt');
console.log(texto);

modulo2.escribirArchivo('data.txt' , "Se grega este texto nuevo\n");

console.log(modulo1.leerArchivo('data.txt'));
