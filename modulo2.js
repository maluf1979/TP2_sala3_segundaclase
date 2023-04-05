

//const path = require('path');
const fs = require('fs');

function escribirArchivo(path, texto){  
    fs.appendFileSync(path, texto)  
}

module.exports = {
    escribirArchivo: escribirArchivo
  };
  


