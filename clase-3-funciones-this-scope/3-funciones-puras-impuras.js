// 🧠 Tema: Funciones Puras e Impuras en JavaScript

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 3-funciones-puras-impuras.js

//--------------------------------------------------
// 1. Teoría: ¿Qué es una función pura?
//--------------------------------------------------

// 👉 Paso 1: Seleccioná la opción correcta sobre qué es una función pura:
// Guardá la letra de la opción correcta en la variable 'respuestaTeoria1'. Ejemplo: let respuestaTeoria1 = "A";
// Opción A: Una función que siempre retorna el mismo resultado con los mismos argumentos y no tiene efectos secundarios.
// Opción B: Una función que puede modificar variables globales.
// Opción C: Una función que siempre retorna un valor numérico.
let respuestaTeoria1 = '';

//--------------------------------------------------
// 2. Crear una función pura
//--------------------------------------------------

// 👉 Paso 2: Declarar una función pura llamada 'sumar' que reciba dos números como parámetros y retorne su suma.


// 👉 Paso 3: Mostrá en consola el resultado de llamar a 'sumar' con los valores 5 y 3.

//--------------------------------------------------
// 3. Crear una función impura
//--------------------------------------------------

// 👉 Paso 4: Declarar un objeto llamado 'estado' con la propiedad llamada 'contador' con un valor inicial de 0.



// 👉 Paso 5: Declarar una función impura llamada 'incrementarContador' que incremente en cada invocación el valor de la propiedad 'contador' en 1 .


// 👉 Paso 6: Llamá a 'incrementarContador' dos veces y mostrá en consola el valor de 'contador' después de cada llamada.


//--------------------------------------------------
// 4. Diferencia práctica entre funciones puras e impuras
//--------------------------------------------------

// 👉 Paso 7: Seleccioná la opción correcta sobre la diferencia práctica entre funciones puras e impuras:
// Guardá la letra de la opción correcta en la variable 'respuestaTeoria2'. Ejemplo: let respuestaTeoria2 = "C";
// Opción A: Las funciones puras siempre retornan el mismo resultado con los mismos argumentos y no afectan el estado externo, mientras que las impuras pueden depender o modificar el estado externo.
// Opción B: Las funciones impuras son más fáciles de probar que las puras.
// Opción C: No hay ninguna diferencia práctica entre funciones puras e impuras.
let respuestaTeoria2 = '';

// No modifiques el código debajo de este comentario
module.exports = {
  respuestaTeoria1,
  respuestaTeoria2,
  sumar,
  incrementarContador,
  estado,
};