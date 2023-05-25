// Pregunta: Escribe un programa en Node.js  que reciba un argumento de línea de comandos  
// que represente  una ruta de archivo y verifique  si el archivo existe. Si existe, 
// muestra  un mensaje  indicando que el archivo existe; de lo contrario,  muestra  un mensaje indicando que el archivo no existe.

const fs = require('fs');

const filePath = process.argv[2];

try {
  fs.accessSync(filePath, fs.constants.F_OK);
  console.log('El archivo existe.');
} catch (err) {
  console.log('El archivo no existe.');
}
