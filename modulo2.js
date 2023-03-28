function escribirArchivo(texto){
    const fs = require('fs');
    fs.appendFileSync('./data.txt', texto)  
}

module.exports = {
    escribirArchivo: escribirArchivo
  };
  

