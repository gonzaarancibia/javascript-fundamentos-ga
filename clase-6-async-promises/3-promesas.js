// 🧠 Tema: Promesas en JavaScript 📦🕒

// Instrucciones:
// - Ejecutá este archivo con: node 3-promesas.js
// - Completá los pasos y usá console.log() para ver resultados.
// - Respondé en comentarios donde se indique.

//--------------------------------------------------
// 1. Crear y manejar una promesa resuelta
//--------------------------------------------------

// 👉 Paso 1: Creá una promesa llamada 'miPromesa' que:
// - Se resuelva con el mensaje: "✅ Promesa cumplida"
// - Luego de 2 segundos usando setTimeout
// - Usá `.then()` para mostrar el resultado
// - Usá `.finally()` para mostrar siempre: "🎉 Promesa procesada"
const miPromesa = null;


//--------------------------------------------------
// 2. Promesa rechazada y manejo de errores
//--------------------------------------------------

// 👉 Paso 2: Creá una nueva promesa llamada 'promesaFallida' que:
// - Se rechace con el mensaje: "❌ Ocurrió un error"
// - Luego de 1 segundo usando setTimeout
// - Usá `.catch()` para mostrar el error

const promesaFallida = null;

//--------------------------------------------------
// 3. ¿Qué es una promesa?
//--------------------------------------------------

// 👉 Paso 3: Escribí una definición corta en COMENTARIO con tus palabras:
// ¿Qué es una promesa en JavaScript?


//--------------------------------------------------
// 4. Reflexión sobre estados y métodos
//--------------------------------------------------

// 👉 Paso 4: Respondé como COMENTARIO:
// ¿Cuáles son los tres estados posibles de una promesa?

// 👉 Paso 5: Respondé como COMENTARIO:
// ¿Qué diferencia hay entre el código que se coloca en `.then()` y en `.catch()`?


//--------------------------------------------------
// 5. Múltiple choice (descomentá la opción correcta)
//--------------------------------------------------


// ❓ ¿Cuál es el estado inicial de una promesa?
let respuestaMC1;
// respuestaMC1 = 'A'; // A. fulfilled
// respuestaMC1 = 'B'; // B. rejected
// respuestaMC1 = 'C'; // C. pending

// ❓ ¿Qué método se ejecuta si la promesa se resuelve correctamente?
let respuestaMC2;
// respuestaMC2 = 'A'; // A. .catch()
// respuestaMC2 = 'B'; // B. .then()
// respuestaMC2 = 'C'; // C. .finally()

// ❓ ¿Qué método se ejecuta tanto si la promesa fue resuelta como rechazada?
let respuestaMC3;
// respuestaMC3 = 'A'; // A. .then()
// respuestaMC3 = 'B'; // B. .finally()
// respuestaMC3 = 'C'; // C. .catch()



//--------------------------------------------------
// 6. Verdadero o falso
//--------------------------------------------------

let respuestaP1; // "Una promesa puede tener más de un estado al mismo tiempo"
let respuestaP2; // "Podemos encadenar varios .then() para procesar datos en pasos"
let respuestaP3; // "El método .catch() solo se ejecuta si hubo un error o rechazo"

//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
    miPromesa,
    promesaFallida,
    respuestaP1,
    respuestaP2,
    respuestaP3,
    respuestaMC1,
    respuestaMC2,
    respuestaMC3,
};
