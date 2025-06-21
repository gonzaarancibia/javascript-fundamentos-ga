// 🧠 Tema: Filtrar y Transformar Arrays: filter() y reduce() 🔍📉

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 5-filter-reduce.js

//--------------------------------------------------
// 1. filter(): Filtrar elementos según una condición
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'numeros' con los valores [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].


// 👉 Paso 2: Usando filter(), creá un nuevo array llamado 'numerosPares'
// que contenga solo los números pares del array 'numeros'.


// 👉 Paso 3: Creá un array llamado 'personas' con objetos que tengan las propiedades 'nombre' y 'edad':
// Por ej: [{nombre: "Ana", edad: 25}]


// 👉 Paso 4: Usando filter(), creá un nuevo array llamado 'mayoresDeEdad'
// que contenga solo las personas que tienen 18 años o más.


//--------------------------------------------------
// 2. reduce(): Transformar en un único valor
//--------------------------------------------------

// 👉 Paso 5: Usando reduce(), calculá la suma de todos los números del array 'numeros'
// y guardala en una variable llamada 'sumaTotal'.


// 👉 Paso 6: Usando reduce(), encontrá el número más grande del array 'numeros'
// y guardalo en una variable llamada 'maximo'.


// 👉 Paso 7: Usando reduce(), creá un objeto llamado 'resumenEdades' que contenga:
// - propiedad 'menores': cantidad de personas menores de 18
// - propiedad 'adultos': cantidad de personas de 18 o más
// Usá el array 'personas' para esto.


//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 8: Seleccioná la opción correcta sobre filter():
// Guardá la letra de la opción correcta en la variable 'respuestaFilter'.
// Opción A: Modifica el array original.
// Opción B: Retorna un nuevo array con los elementos que cumplen la condición.
// Opción C: Retorna un único valor.
let respuestaFilter = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre reduce():
// Guardá la letra de la opción correcta en la variable 'respuestaReduce'.
// Opción A: Solo sirve para sumar números.
// Opción B: Siempre retorna un array nuevo.
// Opción C: Puede transformar un array en cualquier otro tipo de valor.
let respuestaReduce = '';

// 👉 Paso 10: Seleccioná la opción correcta sobre el uso combinado de filter() y reduce():
// Guardá la letra de la opción correcta en la variable 'respuestaCombinada'.
// Opción A: No se pueden usar juntos.
// Opción B: Se pueden encadenar para filtrar y luego transformar datos.
// Opción C: Solo funcionan con arrays de números.
let respuestaCombinada = '';

// No modifiques el código debajo de este comentario
module.exports = {
  numeros,
  numerosPares,
  personas,
  mayoresDeEdad,
  sumaTotal,
  maximo,
  resumenEdades,
  respuestaFilter,
  respuestaReduce,
  respuestaCombinada,
};