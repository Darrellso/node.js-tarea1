// Pregunta: Escribe un programa en Node.js  que solicite al usuario ingresar un número entero 
// desde  la entrada estándar y verifique si el número  es par o impar. 
// Luego,  muestra un mensaje  indicando si el número  es par o impar.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingrese un número entero: ', (number) => {
  const isEven = num => num % 2 === 0;
  console.log(`El número ${number} es ${isEven(number) ? 'par' : 'impar'}.`);
  rl.close();
});

