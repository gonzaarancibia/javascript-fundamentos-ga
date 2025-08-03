// 🧠 Tema: Peticiones HTTP con fetch() 🌐
// Instrucciones:
// - Ejecutá este archivo con: node 6-fetch.js
// - Completá los pasos y usá console.log() para ver resultados.
// - Respondé en comentarios donde se indique.
//--------------------------------------------------
// 1. Fundamentos: ¿Qué es fetch y para qué sirve?
//--------------------------------------------------

// 👉 Paso 1: ¿Qué es fetch()?
// Escribí una breve definición de qué hace y qué devuelve.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 2: ¿Qué son los headers en una petición?
// Explicá para qué sirven y en qué casos son importantes.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 3: ¿Por qué usamos JSON en las APIs?
// Explicá por qué es común enviar y recibir datos en formato JSON.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 4: ¿Qué es una API REST?
// Escribí una breve definición y para qué se usa.

// TU RESPUESTA AQUÍ ⬇️


//--------------------------------------------------
// 2. Métodos HTTP y status codes
//--------------------------------------------------

// 👉 Paso 5: ¿Cuáles son los métodos HTTP más comunes?
// Listá al menos 3 y explicá qué hace cada uno (por ej. GET, POST, DELETE).

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 6: ¿Qué diferencia hay entre GET y POST?

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 7: ¿Qué diferencia hay entre PUT y PATCH?

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 8: ¿Qué es el status code de una respuesta?
// ¿Qué significan los códigos: 200, 201, 404, 500?

// TU RESPUESTA AQUÍ ⬇️


//--------------------------------------------------
// 3. Peticiones con fetch()
//--------------------------------------------------

// 👉 Paso 9: Realizar una petición GET a una API pública.
// URL: https://jsonplaceholder.typicode.com/users

// - Usá fetch()
// - Parseá con .json()
// - Mostrá el resultado por consola

// ✅ Tip: Completá la función `getUsers` para resolver este paso.

async function getUsers(url) {
  // TU CÓDIGO AQUÍ ⬇️
}


// 👉 Paso 10: Realizar una petición POST para crear un usuario
// URL: https://jsonplaceholder.typicode.com/users

// - Enviá un objeto con nombre, email y username.
// - Usá método POST con headers
// - Mostrá el resultado por consola

// ✅ Tip: Completá la función `createUser` para resolver este paso.

async function createUser(url, data) {
  // TU CÓDIGO AQUÍ ⬇️
}


//--------------------------------------------------
// 4. Multiple Choice sobre fetch()
//--------------------------------------------------

// 👉 Paso 11: ¿Cuál de estas afirmaciones sobre fetch() es verdadera?
// Comentá la opción correcta y guardá la letra en `respuestaFetch1`

let respuestaFetch1;
// respuestaFetch1 = 'A'; fetch() bloquea el hilo principal hasta que termina.
// respuestaFetch1 = 'B'; fetch() devuelve una Promesa que se resuelve cuando se completa la petición.
// respuestaFetch1 = 'C'; fetch() solo funciona con peticiones GET.
// respuestaFetch1 = 'D'; fetch() requiere una librería externa para funcionar.


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------

module.exports = { getUsers, createUser, respuestaFetch1 };
