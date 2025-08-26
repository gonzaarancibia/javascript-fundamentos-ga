// 🔍 Tema: Notación Big-O
// Ejecutá este archivo con: node 02-notacion-big-o.js
// Completá los pasos y respondé en comentarios donde se indique.
//--------------------------------------------------
// 1. Ejemplos de Big-O
//--------------------------------------------------
// 👉 Paso 1: Escribí en comentario qué significa O(1), O(n), O(n²), O(log n), O(2ⁿ), O(n!)

//--------------------------------------------------
// 2. Identifica la notación
//--------------------------------------------------
// 👉 Paso 2: ¿Qué notación Big-O tiene este código?
function sumaUno(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
}
// ❓ Elegí la opción correcta:
let respuestaAlgoritmo1;
// respuestaAlgoritmo1 = 'A'; // A. O(1)
// respuestaAlgoritmo1 = 'B'; // B. O(n)
// respuestaAlgoritmo1 = 'C'; // C. O(n²)

//--------------------------------------------------
// 👉 Paso 3: ¿Y este?
function sumaTodos(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      total += arr[i] + arr[j];
    }
  }
  return total;
}
// ❓ Elegí la opción correcta:
let respuestaAlgoritmo2;
// respuestaAlgoritmo2 = 'A'; // A. O(n)
// respuestaAlgoritmo2 = 'B'; // B. O(n²)
// respuestaAlgoritmo2 = 'C'; // C. O(log n)

//--------------------------------------------------
// 3. Múltiple choice
//--------------------------------------------------
// ❓ ¿Cuál es el caso que describe Big-O?
let respuestaMC1;
// respuestaMC1 = 'A'; // A. El mejor caso
// respuestaMC1 = 'B'; // B. El peor caso
// respuestaMC1 = 'C'; // C. El promedio
// respuestaMC1 = 'D'; // D. Todos los casos

//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  respuestaMC1,
  respuestaAlgoritmo1,
  respuestaAlgoritmo2,
};
