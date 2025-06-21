// 🧠 Tema: Recorrer Arrays: forEach() vs map() 🔄

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 4-foreach-map.js

//--------------------------------------------------
// 1. forEach(): Ejecutar una función por cada elemento
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'numeros' con los valores [1, 2, 3, 4, 5].


// 👉 Paso 2: Usando forEach(), calculá la suma de todos los números del array
// y guardala en una variable llamada 'sumaTotal'.
let sumaTotal = 0;


// 👉 Paso 3: Usando forEach(), creá un string que concatene todos los números
// separados por '-' y guardalo en una variable llamada 'numerosJuntos'.
let numerosJuntos = '';

//--------------------------------------------------
// 2. map(): Crear un nuevo array con resultados
//--------------------------------------------------

// 👉 Paso 4: Usando map(), creá un nuevo array llamado 'numerosDuplicados'
// que contenga cada número del array 'numeros' multiplicado por 2.


// 👉 Paso 5: Usando map(), creá un nuevo array llamado 'numerosComoCadenas'
// que contenga cada número del array 'numeros' convertido a string.


//--------------------------------------------------
// 3. Comparación práctica
//--------------------------------------------------

// 👉 Paso 6: Creá una función llamada 'procesarArray' que reciba como parámetros:
// - Un array
// - Un booleano 'usarMap'
// Si usarMap es true, debe usar map() para multiplicar cada elemento por 3
//   y retornar el nuevo array resultante.
// Si usarMap es false, debe usar forEach() para sumar todos los elementos
//   y retornar la suma total (un número).


//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 7: Seleccioná la opción correcta sobre forEach():
// Guardá la letra de la opción correcta en la variable 'respuestaForEach'.
// Opción A: Siempre retorna un nuevo array.
// Opción B: No retorna nada (undefined) y se usa para efectos secundarios.
// Opción C: Modifica el array original.
let respuestaForEach = '';

// 👉 Paso 8: Seleccioná la opción correcta sobre map():
// Guardá la letra de la opción correcta en la variable 'respuestaMap'.
// Opción A: Modifica el array original.
// Opción B: No retorna nada (undefined).
// Opción C: Retorna un nuevo array con los resultados de aplicar la función a cada elemento.
let respuestaMap = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre cuándo usar cada método:
// Guardá la letra de la opción correcta en la variable 'respuestaUso'.
// Opción A: Usar forEach() para transformar datos y map() para efectos secundarios.
// Opción B: Usar map() para transformar datos y forEach() para efectos secundarios.
// Opción C: Son intercambiables y da lo mismo cuál usar.
let respuestaUso = '';

// No modifiques el código debajo de este comentario
module.exports = {
  numeros,
  sumaTotal,
  numerosJuntos,
  numerosDuplicados,
  numerosComoCadenas,
  procesarArray,
  respuestaForEach,
  respuestaMap,
  respuestaUso,
};