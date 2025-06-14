// 🧠 Tema: Arrow Functions & Enlace Léxico de this 🎯

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 4-arrow-functions-this.js

//--------------------------------------------------
// 1. Sintaxis de Arrow Functions
//--------------------------------------------------

// 👉 Paso 1: Convertí la función tradicional a una Arrow Function.
// Función tradicional:
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
// Reescribí la función anterior como una Arrow Function y guardala en la variable 'saludarArrow'.

// 👉 Paso 2: Mostrá en consola el resultado de llamar a 'saludarArrow' con el argumento "Mundo".

//--------------------------------------------------
// 2. Arrow Functions con un solo parámetro
//--------------------------------------------------

// 👉 Paso 3: Declarar una Arrow Function llamada 'alCuadrado' que reciba un número y retorne su cuadrado.
// Nota: Usá la sintaxis más corta posible (sin paréntesis si es un solo parámetro).

// 👉 Paso 4: Mostrá en consola el resultado de llamar a 'alCuadrado' con el argumento 4.

//--------------------------------------------------
// 3. Enlace Léxico de this
//--------------------------------------------------

// 👉 Paso 5: Creá un objeto llamado 'persona' con las siguientes propiedades/metodo:
// - nombre: "Juan"
// - edad: 30
// - saludar: una función tradicional que retorne "Hola, soy Juan y tengo 30 años."

// 👉 Paso 6: Agregá al objeto 'persona' un metodo llamado 'saludarArrow' que sea una Arrow Function.
// Esta función debe retornar "Hola, soy Juan y tengo 30 años." pero usando el enlace léxico de this.

// 👉 Paso 7: Mostrá en consola el resultado de llamar a 'persona.saludar()' y 'persona.saludarArrow()' para que observes la diferencia.
//--------------------------------------------------
// 4. Selección de opción correcta: Arrow Functions
//--------------------------------------------------

// 👉 Paso 8: Seleccioná la opción correcta sobre las Arrow Functions:
// Guardá la letra de la opción correcta en la variable 'respuestaArrow1'. Ejemplo: let respuestaArrow1 = "A";
// Opción A: Las Arrow Functions tienen su propio contexto de this.
// Opción B: Las Arrow Functions heredan el contexto de this del lugar donde fueron definidas.
// Opción C: Las Arrow Functions no pueden recibir parámetros.
let respuestaArrow1 = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre cuándo usar Arrow Functions:
// Guardá la letra de la opción correcta en la variable 'respuestaArrow2'. Ejemplo: let respuestaArrow2 = "C";
// Opción A: Cuando necesitamos un this dinámico que cambie según cómo se llame la función.
// Opción B: Cuando queremos que this sea el mismo que el contexto donde se definió la función.
// Opción C: Cuando queremos que la función siempre retorne un valor numérico.
let respuestaArrow2 = '';

//--------------------------------------------------
// 5. Diferencia práctica entre funciones tradicionales(declarativas y de expresión) y Arrow Functions
//--------------------------------------------------
// 👉 Paso 10: Seleccioná la opción correcta sobre la diferencia práctica entre funciones tradicionales y Arrow Functions respecto a this:
// Guardá la letra de la opción correcta en la variable 'respuestaArrow3'. Ejemplo: let respuestaArrow3 = "A";
// Opción A: Las funciones tradicionales heredan el this del contexto donde fueron definidas, mientras que las Arrow Functions tienen su propio this.
// Opción B: Las funciones tradicionales tienen su propio this, mientras que las Arrow Functions heredan el this del contexto donde fueron definidas.
// Opción C: Ambas tienen el mismo comportamiento respecto a this.
let respuestaArrow3 = '';

// No modifiques el código debajo de este comentario
module.exports = {
  saludar,
  saludarArrow,
  alCuadrado,
  persona,
  respuestaArrow1,
  respuestaArrow2,
  respuestaArrow3
};