// 🧠 Tema: Event Loop, Motor de JS y la Cola de Tareas 🔄🔥

// Instrucciones:
// - Ejecutá este archivo con: node 2-event-loop.js
// - Observá el orden real de los console.log() en la consola.
// - Después, completá las preguntas del paso 2 y 3.
// - 💡 TIP: Podés usar este visualizador para entender el flujo de ejecución:
//   👉 https://www.jsv9000.app/

//--------------------------------------------------
// 1. Experimentá el orden de ejecución
//--------------------------------------------------

console.log("1. Inicio del script");

setTimeout(() => {
  console.log("2. Tarea desde setTimeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Tarea desde Promise (microtask)");
});

console.log("4. Fin del script");

//--------------------------------------------------
// 2. Orden de ejecución esperado
//--------------------------------------------------

// 👉 Escribí el orden en que esperás que se muestren los console.log() en consola.
let ordenEsperado = [
]; // Ejemplo: ["4. Fin del script", "2. ..."]


//--------------------------------------------------
// 3. Reflexión: ¿Qué está pasando detrás?
//--------------------------------------------------

// Respondé estas preguntas como COMENTARIOS debajo de cada una:

// ¿Qué parte de JavaScript se encarga de ejecutar el código? (por ejemplo: V8, Web APIs, Task Queue, etc)

// ¿Qué es la Call Stack y qué función cumple?

// ¿Qué es una Web API en el contexto del navegador?

// ¿Por qué el mensaje de la Promise se muestra antes que el del setTimeout?

// ¿Qué diferencia hay entre una microtask y una macrotask?

// ¿Qué pasa si la tarea síncrona es muy pesada? ¿Cuándo se ejecutan las asincrónicas?

//--------------------------------------------------
// 4. Múltiple choice (descomentá la opción correcta)
//--------------------------------------------------

// ❓ ¿Qué hace el Event Loop?

let respuestaMC1;
// respuestaMC1 = 'A'; // A. Ejecuta directamente funciones JS.
// respuestaMC1 = 'B'; // B. Supervisa la Call Stack y mueve tareas desde las colas.
// respuestaMC1 = 'C'; // C. Es una función especial del navegador.


// ❓ ¿Qué se ejecuta primero entre una macrotask y microtask si ambas están listas?

let respuestaMC2;
// respuestaMC2 = 'A'; // A. Una tarea del setTimeout (macrotask).
// respuestaMC2 = 'B'; // B. Una función en una Promise (microtask).


// ❓ ¿Qué cola tiene prioridad para el Event Loop?

let respuestaMC3;
// respuestaMC3 = 'A'; // A. Microtask Queue
// respuestaMC3 = 'B'; // B. Task Queue
// respuestaMC3 = 'C'; // C. Call Stack


//--------------------------------------------------
// 5. Verdadero o falso
//--------------------------------------------------

// 👉 Respondé con true o false cada afirmación.
let respuestaEL1; // "Las tareas asincrónicas siempre se ejecutan antes que el resto del código"
let respuestaEL2; // "Las microtasks tienen prioridad sobre las macrotasks"
let respuestaEL3; // "El Event Loop se encarga de sacar tareas de la cola y pasarlas al stack cuando está vacío"


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  ordenEsperado,
  respuestaEL1,
  respuestaEL2,
  respuestaEL3,
  // Multiple choice
  respuestaMC1,
  respuestaMC2,
  respuestaMC3,
};