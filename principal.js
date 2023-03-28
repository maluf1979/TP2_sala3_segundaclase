const modulo1 = require('./modulo1');
const modulo2 = require('./modulo2');

let texto = modulo1.leerArchivo('data.txt');
console.log(texto);

modulo2.escribirArchivo("\nSe grega este texto nuevo");

console.log(modulo1.leerArchivo('data.txt'));
