
const path = require('path');
const fs = require('fs');

function leerArchivo(path){    
    return fs.readFileSync(path, 'utf-8')
}

module.exports = {
    leerArchivo: leerArchivo
  };



