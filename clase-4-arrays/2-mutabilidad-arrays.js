// 🧠 Tema: Mutabilidad vs Inmutabilidad en Arrays 🔁🧊

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 2-mutabilidad-arrays.js

//--------------------------------------------------
// 1. Mutación de Arrays
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'frutas' que contenga: "manzana", "banana", "pera".

// 👉 Paso 2: Agregá "naranja" al final del array 'frutas' usando un método que mute el array original.

// 👉 Paso 3: Eliminá el último elemento del array 'frutas' usando un método que mute el array original.

//--------------------------------------------------
// 2. Inmutabilidad en Arrays
//--------------------------------------------------

// 👉 Paso 4: Creá una función llamada 'agregarFrutaInmutable' que reciba como parámetros:
// - Un array de frutas
// - Una nueva fruta
// La función debe retornar un nuevo array con la nueva fruta agregada, sin modificar el array original.

// 👉 Paso 5: Usá la función 'agregarFrutaInmutable' con el array 'frutas' y "kiwi".
// Guardá el resultado en una variable llamada 'nuevoArrayFrutas'.

//--------------------------------------------------
// 3. Comprobación de Arrays
//--------------------------------------------------

// 👉 Paso 6: Creá una función llamada 'esArray' que reciba un parámetro
// y retorne true si es un array o false si no lo es.

//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 7: Seleccioná la opción correcta sobre la mutabilidad en arrays:
// Guardá la letra de la opción correcta en la variable 'respuestaMutabilidad1'.
// Opción A: Mutar un array significa crear una nueva copia del array.
// Opción B: Mutar un array significa modificar el array original.
// Opción C: Los arrays no pueden ser mutados.
let respuestaMutabilidad1 = '';

// 👉 Paso 8: Seleccioná la opción correcta sobre la inmutabilidad:
// Guardá la letra de la opción correcta en la variable 'respuestaMutabilidad2'.
// Opción A: La inmutabilidad no es posible con arrays.
// Opción B: La inmutabilidad significa que nunca podemos cambiar un array.
// Opción C: La inmutabilidad significa crear nuevas copias en lugar de modificar el original.
let respuestaMutabilidad2 = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre métodos de array:
// Guardá la letra de la opción correcta en la variable 'respuestaMutabilidad3'.
// Opción A: push() y pop() son métodos inmutables.
// Opción B: push() y pop() son métodos que mutan el array original.
// Opción C: push() es mutable y pop() es inmutable.
let respuestaMutabilidad3 = '';

// No modifiques el código debajo de este comentario
module.exports = {
  frutas,
  agregarFrutaInmutable,
  nuevoArrayFrutas,
  esArray,
  respuestaMutabilidad1,
  respuestaMutabilidad2,
  respuestaMutabilidad3,
};