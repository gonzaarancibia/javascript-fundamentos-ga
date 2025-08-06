// 🧠 Tema: Iterar promesas con for await...of, Promise.all 🔁


// Ejecutar con: node 7-bucles-asincronos.js
// Completá cada paso y usá console.log() para ver los resultados

//--------------------------------------------------
// Paso 1: Array de IDs de usuarios
//--------------------------------------------------

const userIds = [1, 2, 3]; // Usaremos estos IDs para hacer peticiones

//--------------------------------------------------
// Paso 2: Crear una función asincrónica que reciba un ID
//         y devuelva los datos del usuario con fetch.
//--------------------------------------------------

// 📌 URL base: https://jsonplaceholder.typicode.com/users/{id}
// ⚠️ Reemplazá {id} con el ID real

async function getUserById(id) {
  // 👉 Completá esta función usando fetch + await
  // Devolvé el objeto JSON con los datos del usuario
}

//--------------------------------------------------
// Paso 3: Usar for await...of para pedir los usuarios uno por uno.
//         Mostrar solo su nombre con console.log().
//--------------------------------------------------

// 📌 Tip: Podés armar un array de promesas como:
// const promesas = userIds.map(id => getUserById(id));

async function mostrarUsuariosSecuencialmente() {
  // 👉 Iterá usando for await...of sobre el array de promesas
  // Mostrá solo el nombre del usuario por consola
}

//--------------------------------------------------
// Paso 4: Usar Promise.all() para pedir los usuarios en paralelo.
//         Mostrar también sus nombres.
//--------------------------------------------------

async function mostrarUsuariosEnParalelo() {
  // 👉 Usá Promise.all() para pedir todos los usuarios a la vez
  // Mostrá sus nombres por consola
}

//--------------------------------------------------
// Paso 5: Ejecutar ambas funciones
//--------------------------------------------------

// console.log("Usuarios obtenidos secuencialmente:");
// mostrarUsuariosSecuencialmente().then(() => {
//   console.log("\nUsuarios obtenidos en paralelo:");
//   mostrarUsuariosEnParalelo();
// });

//--------------------------------------------------
// Paso 6: Respondé en comentarios
//--------------------------------------------------

// ¿Qué diferencia notás entre los tiempos de respuesta?
// ¿En qué casos conviene usar for await...of vs Promise.all()?

//--------------------------------------------------
// Exportar para tests (opcional)
//--------------------------------------------------

module.exports = {
  getUserById,
  mostrarUsuariosSecuencialmente,
  mostrarUsuariosEnParalelo,
};
