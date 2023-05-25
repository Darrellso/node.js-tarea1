const os = require('os');

const cpuUsage = os.loadavg();

console.log(`Promedio de uso de CPU en 1 minuto: ${cpuUsage[0]}%`);
console.log(`Promedio de uso de CPU en 5 minutos: ${cpuUsage[1]}%`);
console.log(`Promedio de uso de CPU en 15 minutos: ${cpuUsage[2]}%`);