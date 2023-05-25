function formato(bytes) {
  const tamaño = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${tamaño[i]}`;
}

const uso = process.memoryUsage();
const estadisticas = {
  'Espacio total asignado': formato(uso.heapTotal),
  'Espacio utilizado': formato(uso.heapUsed)
};

console.log('Uso de memoria del proceso:');
Object.entries(estadisticas).forEach(([key, value]) => {
  console.log(`${key}:`, value);
});
