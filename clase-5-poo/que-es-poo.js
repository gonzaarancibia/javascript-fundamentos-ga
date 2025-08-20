// 🧠 Tema: ¿Qué es la Programación Orientada a Objetos? 🧱

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 1-poo-intro.js

//--------------------------------------------------
// 1. Conceptos básicos de POO
//--------------------------------------------------

// 👉 Paso 1: Explicá en un comentario qué es la Programación Orientada a Objetos (POO).

// 👉 Paso 2: Seleccioná la opción correcta sobre los conceptos básicos de POO:
// Guardá la letra de la opción correcta en la variable 'respuestaPOO1'.
// Opción A: Solo se basa en funciones y variables sueltas.
// Opción B: Se basa en objetos, clases, instancias, atributos y métodos.
// Opción C: Solo se usa para crear interfaces gráficas.
let respuestaPOO1 = 'B';

// 👉 Paso 3: Creá un objeto llamado 'persona' con las siguientes propiedades:
// - nombre: "Ana"
// - edad: 28
// - saludar: una función que retorne el string "Hola, soy Ana".
let persona = {
  nombre: "Ana",
  edad: 28,
  saludar: () => "Hola, soy Ana"
};

// 👉 Paso 4: Mostrá en consola el resultado de llamar a persona.saludar().
console.log(persona.saludar());

//--------------------------------------------------
// 2. Reflexión
//--------------------------------------------------

// 👉 Paso 5: Seleccioná la opción correcta sobre por qué es útil representar cosas del mundo real como objetos:
// Guardá la letra de la opción correcta en la variable 'respuestaPOO2'.
// Opción A: Porque permite organizar el código de forma más clara y reutilizable.
// Opción B: Porque hace que el código sea más lento.
// Opción C: Porque solo sirve para gráficos.
let respuestaPOO2 = 'A';

// 👉 Paso 6: Escribí un ejemplo de un objeto que represente algo del mundo real (distinto a "persona")
// Por ejemplo: Un objeto que represente un auto.
// Debe tener al menos 3 propiedades.
let ejemploObjeto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};

// 👉 Paso 7: Escribí en un comentario una ventaja de usar objetos en la programación.
// Permiten agrupar datos y funciones relacionadas en una sola estructura, 
// haciendo el código más legible, mantenible y reutilizable.

// No modifiques el código debajo de este comentario
module.exports = {
  respuestaPOO1,
  persona,
  respuestaPOO2,
  ejemploObjeto
};