// 🧠 Tema: Closures y su Ámbito Léxico 🧠🔐

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 6-closures.js
// - Observa bien lo que te devuelve el test al ejecutarlo, ya que te dará ayuda e indicará si tu código es correcto o no.

//--------------------------------------------------
// 1. Crear un Closure
//--------------------------------------------------

// 👉 Paso 1: Creá una función llamada 'crearContador'.
// Dentro de esta función, declará una variable llamada 'contador' con valor inicial 0.
// La función debe retornar otra función que incremente el valor de 'contador' en 1 y lo retorne.


// 👉 Paso 2: Usá 'crearContador' para crear dos contadores independientes: 'contador1' y 'contador2'.

// 👉 Paso 3: Mostrá en consola el resultado de llamar a 'contador1' tres veces y a 'contador2' dos veces.
// Verificá que ambos contadores mantengan su propio estado.

//--------------------------------------------------
// 2. Closure con parámetros
//--------------------------------------------------

// 👉 Paso 4: Creá una función llamada 'crearSaludo'.
// Esta función debe recibir un parámetro llamado 'saludo'.
// La función debe retornar otra función que reciba un nombre y retorne un mensaje combinando el saludo y el nombre.


// 👉 Paso 5: Usá 'crearSaludo' para crear dos funciones: 'saludarEnEspañol' y 'saludarEnIngles'.
// 'saludarEnEspañol' debe usar el saludo "Hola".
// 'saludarEnIngles' debe usar el saludo "Hello".

// 👉 Paso 6: Mostrá en consola el resultado de llamar a 'saludarEnEspañol' con "Juan" y a 'saludarEnIngles' con "John".

//--------------------------------------------------
// 3. Selección de opción correcta: Closures
//--------------------------------------------------

// 👉 Paso 7: Seleccioná la opción correcta sobre qué es un Closure:
// Guardá la letra de la opción correcta en la variable 'respuestaClosure1'. Ejemplo: let respuestaClosure1 = "A";
// Opción A: Es una función que recuerda el scope donde fue creada, incluso si se ejecuta fuera de ese contexto.
// Opción B: Es una función que solo puede ejecutarse dentro de su propio scope.
// Opción C: Es una función que no puede recibir parámetros.
let respuestaClosure1 = '';

// 👉 Paso 8: Seleccioná la opción correcta sobre el uso de Closures:
// Guardá la letra de la opción correcta en la variable 'respuestaClosure2'. Ejemplo: let respuestaClosure2 = "C";
// Opción A: Los Closures no son útiles en JavaScript moderno.
// Opción B: Los Closures son útiles para crear variables globales.
// Opción C: Los Closures son útiles para crear funciones con estado privado.
let respuestaClosure2 = '';

//--------------------------------------------------
// 4. Diferencia práctica entre Closures y funciones normales
//--------------------------------------------------

// 👉 Paso 9: Seleccioná la opción correcta sobre la diferencia práctica entre Closures y funciones normales:
// Guardá la letra de la opción correcta en la variable 'respuestaClosure3'. Ejemplo: let respuestaClosure3 = "B";
// Opción A: Las funciones normales no pueden retornar otras funciones.
// Opción B: Los Closures pueden recordar el estado de variables incluso después de que la función externa haya terminado.
// Opción C: No hay diferencia entre Closures y funciones normales.
let respuestaClosure3 = '';

//--------------------------------------------------
// 5. Reflexión sobre Closures
//--------------------------------------------------

// 👉 Paso 10: Explicá en un comentario un caso práctico donde usarías un Closure.
// Respuesta: Un caso práctico sería crear un contador que mantenga su propio estado privado, como en el ejercicio 1. Esto es útil para evitar que otras partes del código modifiquen directamente el estado del contador.

//--------------------------------------------------
// 6. Closure para manejar una lista de tareas (Avanzado)
//--------------------------------------------------

// 👉 Paso 11: Creá una función llamada 'crearListaDeTareas'.
// Dentro de esta función, declarará una variable llamada 'tareas' que sea un array vacío.
// La función debe retornar un objeto con tres métodos:
// - agregarTarea: recibe una tarea (string) y la agrega al array 'tareas'.
// - listarTareas: retorna el array 'tareas'.
// - eliminarTarea: recibe una tarea (string) y la elimina del array 'tareas' si existe.


// 👉 Paso 12: Usá 'crearListaDeTareas' para crear una lista de tareas llamada 'miLista'.

// 👉 Paso 13: Agregá las tareas "Estudiar JavaScript" y "Hacer ejercicio" a 'miLista'.
// Mostrá en consola el resultado de listar las tareas.

// 👉 Paso 14: Eliminá la tarea "Hacer ejercicio" de 'miLista'.
// Mostrá en consola el resultado de listar las tareas nuevamente.


// No modifiques el código debajo de este comentario
module.exports = {
  crearContador,
  crearSaludo,
  crearListaDeTareas,
  respuestaClosure1,
  respuestaClosure2,
  respuestaClosure3,
};