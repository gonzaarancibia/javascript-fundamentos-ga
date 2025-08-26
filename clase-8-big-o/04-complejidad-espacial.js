// 💾 Tema: Complejidad espacial
// Ejecutá este archivo con: node 04-complejidad-espacial.js
// Completá los pasos y elegí la opción correcta en cada pregunta.
//--------------------------------------------------
// 1. ¿Cuánta memoria consumen los sigtes algoritmos?
//--------------------------------------------------

// 👉 Paso 1: Elegí la opción correcta para cada algoritmo:

// Algoritmo 1
function crearArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
let respuestaAlgoritmo1;
// respuestaAlgoritmo1 = 'A'; // A. O(1)
// respuestaAlgoritmo1 = 'B'; // B. O(n)
// respuestaAlgoritmo1 = 'C'; // C. O(n²)
// respuestaAlgoritmo1 = 'D'; // D. O(log n)


// Algoritmo 2
function sumaPrimerosDos(arr) {
  let suma = arr[0] + arr[1]; // solo 1 variable extra
  return suma;
}
let respuestaAlgoritmo2;
// respuestaAlgoritmo2 = 'A'; // A. O(1)
// respuestaAlgoritmo2 = 'B'; // B. O(n)
// respuestaAlgoritmo2 = 'C'; // C. O(n²)
// respuestaAlgoritmo2 = 'D'; // D. O(log n)

// Algoritmo 3
function duplicarArray(arr) {
  let nuevo = [];
  for (let i = 0; i < arr.length; i++) {
    nuevo.push(arr[i] * 2);
  }
  return nuevo;
}
let respuestaAlgoritmo3;
// respuestaAlgoritmo3 = 'A'; // A. O(1)
// respuestaAlgoritmo3 = 'B'; // B. O(n)
// respuestaAlgoritmo3 = 'C'; // C. O(n²)
// respuestaAlgoritmo3 = 'D'; // D. O(log n)

// Algoritmo 4
function encontrarMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
let respuestaAlgoritmo4;
// respuestaAlgoritmo4 = 'A'; // A. O(1)
// respuestaAlgoritmo4 = 'B'; // B. O(n)
// respuestaAlgoritmo4 = 'C'; // C. O(n²)
// respuestaAlgoritmo4 = 'D'; // D. O(log n)


//--------------------------------------------------
// 2. Ejemplo O(1)
//--------------------------------------------------
// 👉 Paso 2: Escribí un ejemplo de código con complejidad espacial O(1)
// (Opcional, para practicar)


//--------------------------------------------------
// 3. Teoría
//--------------------------------------------------
// ❓ ¿Qué es la complejidad espacial?
let respuestaTeoria1;
// respuestaTeoria1 = 'A'; // A. Mide cuánta memoria extra usa un algoritmo
// respuestaTeoria1 = 'B'; // B. Mide cuántos pasos ejecuta un algoritmo
// respuestaTeoria1 = 'C'; // C. Mide la velocidad de la red

// ❓ ¿Por qué es importante considerar la complejidad espacial?
let respuestaTeoria2;
// respuestaTeoria2 = 'A'; // A. Porque afecta el uso de memoria y la escalabilidad
// respuestaTeoria2 = 'B'; // B. Porque afecta el color de la interfaz
// respuestaTeoria2 = 'C'; // C. Porque mejora la usabilidad


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  respuestaAlgoritmo1,
  respuestaAlgoritmo2,
  respuestaAlgoritmo3,
  respuestaAlgoritmo4,
  respuestaTeoria1,
  respuestaTeoria2,
};
