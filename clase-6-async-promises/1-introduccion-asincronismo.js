// 🧠 Tema: Introducción al Asincronismo en JavaScript ⏳🛠️

// Instrucciones:
// - Leé cada paso y escribí tu código donde se indica.
// - Usá `console.log()` para ver los resultados.
// - Ejecutá este archivo con el comando: node 1-introduccion-asincronismo.js

//--------------------------------------------------
// 1. Entendé la ejecución sincrónica
//--------------------------------------------------

// 👉 Paso 1: Escribí tres console.log seguidos para simular instrucciones secuenciales.
// Mostrá por consola:
// "Inicio del programa"
// "Proceso principal"
// "Fin del programa"


//--------------------------------------------------
// 2. Introducí una tarea asíncrona simple
//--------------------------------------------------

// 👉 Paso 2: Usá `setTimeout` para simular una operación asíncrona que se ejecuta luego de 2 segundos.
// Mostrá por consola dentro del setTimeout: "Tarea asíncrona completada".

// 👉 Paso 3: Agregá un console.log debajo del setTimeout con el mensaje: "Esperando que termine la tarea..."
// Observá el orden en que se muestran los mensajes.


//--------------------------------------------------
// 3. Reflexión final
//--------------------------------------------------

// 👉 Paso 4: Respondé en un comentario: 
// ¿Por qué el mensaje "Tarea asíncrona completada" aparece último, aunque esté antes en el código?


//--------------------------------------------------
// 4. Práctica rápida (verdadero o falso)
//--------------------------------------------------

// 👉 Paso 5: Respondé si estas afirmaciones son verdaderas o falsas:
// Guardá un booleano en tus respuestas en las variables correspondientes.

let respuesta1; // "JavaScript ejecuta todo el código al mismo tiempo sin esperar tareas lentas."
let respuesta2; // "setTimeout permite simular tareas que se ejecutan después de cierto tiempo."
let respuesta3; // "El código que está después de setTimeout se bloquea hasta que el tiempo se cumple."

//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  respuesta1,
  respuesta2,
  respuesta3,
};
