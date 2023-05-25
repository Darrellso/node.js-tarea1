const input = process.argv[2];

if (!input) {
  console.log("Se requiere una cadena de texto como argumento.");
  process.exit(1);
}


const reversed = input.split('').reverse().join('');

a
console.log(`Cadena invertida: ${reversed}`);
