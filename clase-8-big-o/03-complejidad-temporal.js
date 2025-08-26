// ⏳ Tema: Complejidad temporal
// Ejecutá este archivo con: node 03-complejidad-temporal.js
// Completá los pasos y respondé en comentarios donde se indique.

//--------------------------------------------------
// 1. ¿Cuántos pasos?
//--------------------------------------------------
// 👉 Paso 1: Elegí la opción correcta para cada algoritmo:

// Algoritmo 1
function maximo(arr) {
  let max = -Infinity; // solo 1 variable extra
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
  }
  return max;
}
let respuestaAlgoritmo1;
// respuestaAlgoritmo1 = 'A'; // A. O(1)
// respuestaAlgoritmo1 = 'B'; // B. O(n)
// respuestaAlgoritmo1 = 'C'; // C. O(n²)
// respuestaAlgoritmo1 = 'D'; // D. O(log n)

// Algoritmo 2
function imprimirCuadrados(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i * j);
    }
  }
}

let respuestaAlgoritmo2;
// respuestaAlgoritmo2 = 'A'; // A. O(1)
// respuestaAlgoritmo2 = 'B'; // B. O(n)
// respuestaAlgoritmo2 = 'C'; // C. O(n²)
// respuestaAlgoritmo2 = 'D'; // D. O(log n)

// Algoritmo 3
function pares(arr) {
  let resultado = []; // puede llegar a guardar todos los elementos
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) resultado.push(arr[i]);
  }
  return resultado;
}

let respuestaAlgoritmo3;
// respuestaAlgoritmo3 = 'A'; // A. O(n)
// respuestaAlgoritmo3 = 'B'; // B. O(n²)
// respuestaAlgoritmo3 = 'C'; // C. O(1)
// respuestaAlgoritmo3 = 'D'; // D. O(log n)

// Algoritmo 4
function posicionInsercionOrdenada(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length;

  while (inicio < fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio;
    }
  }

  return inicio; // índice donde se insertaría
}

let respuestaAlgoritmo4;
// respuestaAlgoritmo4 = 'A'; // A. O(n)
// respuestaAlgoritmo4 = 'B'; // B. O(log n)
// respuestaAlgoritmo4 = 'C'; // C. O(n²)



//--------------------------------------------------
// 2. Verdadero o falso
//--------------------------------------------------
let respuestaVF1; // "La complejidad temporal mide los pasos que ejecuta un algoritmo"
let respuestaVF2; // "Un algoritmo O(n²) es más rápido que uno O(n) para datos grandes"
let respuestaVF3; // "La complejidad temporal mide la memoria que consume un algoritmo"

//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  respuestaVF1,
  respuestaVF2,
  respuestaVF3,
  respuestaAlgoritmo1,
  respuestaAlgoritmo2,
  respuestaAlgoritmo3,
  respuestaAlgoritmo4,
};
