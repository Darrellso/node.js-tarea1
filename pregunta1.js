const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log("Se requieren exactamente dos argumentos.");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Los argumentos deben ser números válidos.");
  process.exit(1);
}

const suma = num1 + num2;

console.log(`El resultado de la suma es: ${suma}`);
