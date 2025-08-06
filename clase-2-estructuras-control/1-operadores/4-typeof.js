// 🧠 Tema: typeof 

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 04-typeof.js

//--------------------------------------------------
// 1. Operador typeof
//--------------------------------------------------

// 👉 Paso 1: Declará variables de diferentes tipos
 let nombre = "Ana";
 let edad = 25;
 let esEstudiante = true;
 let hobbies = ["leer", "correr", "cocinar"];
 let persona = { nombre: "Ana", edad: 25 };
 let sinValor;
 let nulo = null;
 let funcionSaludar = function() { return "Hola"; };

// 👉 Paso 2: Usá typeof para verificar el tipo de cada variable
 console.log(typeof nombre);
// Completá con el resto de las variables...
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof hobbies); // "object"
console.log(typeof persona); // "object"
console.log(typeof sinValor); // "undefined"
console.log(typeof nulo); // "object"
console.log(typeof funcionSaludar); // "function"

// 👉 Paso 3: Analizá los resultados. ¿Hay algo que te sorprenda? Comentalo (Incluye 'null' y 'array' en los comentarios para pasar los test).
// Los resultados de 'null' y 'array' son los más sorprendentes.
// typeof hobbies (un array) devuelve "object", ya que los arrays son una forma de objeto en JavaScript.
// typeof nulo devuelve "object", lo cual es un error histórico de JavaScript. 'null' debería ser un tipo primitivo.

//--------------------------------------------------
// 2. Limitaciones de typeof
//--------------------------------------------------

// 👉 Paso 4: Verificá el tipo de un array y un objeto con typeof
 hobbies = ["leer", "correr", "cocinar"];
 persona = { nombre: "Ana", edad: 25 };

 console.log("Tipo de hobbies:", typeof hobbies);
 console.log("Tipo de persona:", typeof persona);

// 👉 Paso 5: Verificá el tipo de null con typeof
 nulo = null;
 console.log("Tipo de nulo:", typeof nulo);

// 👉 Paso 6: Investiga y comentá por qué typeof no es suficiente para distinguir arrays de objetos o detectar null.

//1. Arrays y Objetos: En JavaScript, un array es considerado un tipo de 'object'. Por lo tanto, typeof devuelve "object" para ambos.
// 2. Null: El resultado "object" para null es un error histórico y un bug del lenguaje que ha permanecido por
//  razones de compatibilidad. Para verificar null, es mejor usar la comparación estricta (variable === null).