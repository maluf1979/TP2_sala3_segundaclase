
function leerArchivo(){
    const fs = require('fs');
    //const path = require('./data.txt')
    return fs.readFileSync('./data.txt', 'utf-8')
}

module.exports = {
    leerArchivo: leerArchivo
  };



