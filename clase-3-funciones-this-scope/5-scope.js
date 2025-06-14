// 🧠 Tema: Scope (Ámbito) en JavaScript 🔒

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 5-scope.js

//--------------------------------------------------
// 1. Global Scope
//--------------------------------------------------

// 👉 Paso 1: Declarar una variable global llamada 'mensajeGlobal' con el valor "Hola desde el ámbito global".

// 👉 Paso 2: Crear una función llamada 'mostrarMensajeGlobal' que muestre en consola el valor de 'mensajeGlobal'.

// 👉 Paso 3: Llamar a la función 'mostrarMensajeGlobal' y verificar que se muestre el mensaje en consola.

//--------------------------------------------------
// 2. Function Scope
//--------------------------------------------------

// 👉 Paso 4: Crear una función llamada 'mostrarMensajeLocal'.
// Dentro de esta función, declará una variable llamada 'mensajeLocal' con el valor "Hola desde el ámbito de función".
// Mostrá en consola el valor de 'mensajeLocal' dentro de la función.

// 👉 Paso 5: Intentá mostrar en consola el valor de 'mensajeLocal' fuera de la función y explicá en un comentario qué ocurre y por qué.

//--------------------------------------------------
// 3. Block Scope
//--------------------------------------------------

// 👉 Paso 6: Crear una función llamada 'mostrarMensajeBloque'.
// Dentro de esta función, usá un bloque (por ejemplo, un if) y declará una variable en el bloque con let o const llamada 'mensajeBloque' con el valor "Hola desde el ámbito de bloque".
// Mostrá en consola el valor de 'mensajeBloque' dentro del bloque.

// 👉 Paso 7: Intentá mostrar en consola el valor de 'mensajeBloque' fuera del bloque y explicá en un comentario qué ocurre y por qué.

//--------------------------------------------------
// 4. Selección de opción correcta: Scope
//--------------------------------------------------

// 👉 Paso 8: Seleccioná la opción correcta sobre el Global Scope:
// Guardá la letra de la opción correcta en la variable 'respuestaScope1'. Ejemplo: let respuestaScope1 = "A";
// Opción A: Las variables declaradas en el ámbito global pueden ser accedidas desde cualquier parte del código.
// Opción B: Las variables declaradas en el ámbito global solo pueden ser accedidas dentro de funciones.
// Opción C: Las variables declaradas en el ámbito global no existen.
let respuestaScope1 = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre el Function Scope:
// Guardá la letra de la opción correcta en la variable 'respuestaScope2'. Ejemplo: let respuestaScope2 = "C";
// Opción A: Las variables declaradas dentro de una función pueden ser accedidas desde cualquier parte del código.
// Opción B: Las variables declaradas dentro de una función solo pueden ser accedidas dentro de esa función.
// Opción C: Las variables declaradas dentro de una función no existen.
let respuestaScope2 = '';

// 👉 Paso 10: Seleccioná la opción correcta sobre el Block Scope:
// Guardá la letra de la opción correcta en la variable 'respuestaScope3'. Ejemplo: let respuestaScope3 = "B";
// Opción A: Las variables declaradas con let o const dentro de un bloque pueden ser accedidas desde cualquier parte del código.
// Opción B: Las variables declaradas con let o const dentro de un bloque solo pueden ser accedidas dentro de ese bloque.
// Opción C: Las variables declaradas con let o const dentro de un bloque no existen.
let respuestaScope3 = '';

//--------------------------------------------------
// 5. ¿Qué es el Scope?
//--------------------------------------------------

// 👉 Paso 11: Seleccioná la opción correcta sobre qué es el Scope:
// Guardá la letra de la opción correcta en la variable 'respuestaScope4'. Ejemplo: let respuestaScope4 = "A";
// Opción A: Es el contexto donde las variables y funciones están disponibles para ser accedidas o usadas.
// Opción B: Es el conjunto de todas las funciones declaradas en un archivo.
// Opción C: Es el tipo de dato que tiene una variable.
let respuestaScope4 = '';

//--------------------------------------------------
// 6. Diferencia práctica entre Global, Function y Block Scope
//--------------------------------------------------

// 👉 Paso 12: Seleccioná la opción correcta sobre la diferencia práctica entre los tres tipos de scope:
// Guardá la letra de la opción correcta en la variable 'respuestaScope5'. Ejemplo: let respuestaScope5 = "C";
// Opción A: Global Scope y Function Scope son iguales, pero Block Scope es diferente.
// Opción B: Global Scope está disponible en todo el código, Function Scope solo dentro de funciones, y Block Scope solo dentro de bloques.
// Opción C: No hay diferencia entre los tres tipos de scope.
let respuestaScope5 = '';

// No modifiques el código debajo de este comentario
module.exports = {
  mensajeGlobal,
  mostrarMensajeGlobal,
  mostrarMensajeLocal,
  mostrarMensajeBloque,
  respuestaScope1,
  respuestaScope2,
  respuestaScope3,
  respuestaScope4,
  respuestaScope5,
};