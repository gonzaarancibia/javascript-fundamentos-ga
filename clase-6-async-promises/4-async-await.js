// 🧠 Tema: Async / Await en JavaScript

// Instrucciones:
// - Ejecutá este archivo con: node 4-async-await.js
// - Completá los pasos y usá console.log() para ver resultados.
// - Respondé en comentarios donde se indique.

//--------------------------------------------------
// 1. Convertir promesa a async/await
//--------------------------------------------------

// 👉 Paso 1: Creá una función llamada 'promesaCumplida' que:
// - Retorne una promesa que se resuelva con el mensaje "✅ Promesa cumplida con Async/Await" después de 1.5 segundos (usá setTimeout)

// 👉 Paso 2: Creá una función async llamada 'usarAsyncAwait' que:
// - Espere el resultado de 'promesaCumplida' usando await
// - Imprima el resultado con console.log

//--------------------------------------------------
// 2. Manejo de errores con try/catch en Async/Await
//--------------------------------------------------

// 👉 Paso 3: Creá una función llamada 'promesaFallida' que:
// - Retorne una promesa que se rechace con el mensaje "❌ Error capturado con Async/Await" después de 1 segundo

// 👉 Paso 4: Creá una función async llamada 'usarAsyncAwaitConError' que:
// - Intente esperar la promesa 'promesaFallida' con await dentro de un bloque try
// - En caso de error, atrapalo con catch y muestra el error con console.log

//--------------------------------------------------
// 3. Reflexión
//--------------------------------------------------

// 👉 Paso 5: Respondé en comentario:
// ¿Qué ventaja tiene usar async/await frente a usar solo promesas con .then() y .catch()?

//--------------------------------------------------
// 4. Múltiple choice Async/Await (descomentá la opción correcta)
//--------------------------------------------------

let respuestaMC1;
// respuestaMC1 = 'A'; // A. async solo se usa en funciones que retornan promesas
// respuestaMC1 = 'B'; // B. async convierte cualquier función en síncrona
// respuestaMC1 = 'C'; // C. await detiene todo el código del programa

let respuestaMC2;
// respuestaMC2 = 'A'; // A. await solo se puede usar dentro de funciones marcadas con async
// respuestaMC2 = 'B'; // B. await puede usarse en cualquier parte del código
// respuestaMC2 = 'C'; // C. await hace que la promesa se rechace automáticamente

//--------------------------------------------------
// 5. Verdadero o falso Async/Await
//--------------------------------------------------

let respuestaP1; // "Async/Await hace que el código sea más legible y fácil de entender"
let respuestaP2; // "Una función async siempre retorna una promesa"
let respuestaP3; // "El await bloquea la ejecución del hilo principal y congela la app"


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  promesaCumplida,
  usarAsyncAwait,
  promesaFallida,
  usarAsyncAwaitConError,
  respuestaMC1,
  respuestaMC2,
  respuestaP1,
  respuestaP2,
  respuestaP3,
};
