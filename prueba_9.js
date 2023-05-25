const fs = require('fs');
console.log('Archivos en el directorio actual:');
try {
  const archivos = fs.readdirSync('.');
  archivos.forEach(file => {
    console.log(file);
  });
} catch (err) {
  console.error('Error al leer el directorio:', err);
}