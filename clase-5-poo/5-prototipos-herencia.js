// 🧠 Tema: Prototipos y Herencia 🧬

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 5-prototipos-herencia.js

//--------------------------------------------------
// 1. Prototipos en funciones constructoras
//--------------------------------------------------

// 👉 Paso 1: Creá una función constructora Animal que reciba nombre y asigne esa propiedad usando this.


// 👉 Paso 2: Agregá un método al prototype de Animal llamado hablar que retorne "[nombre] hace un sonido".


// 👉 Paso 3: Creá una instancia animal1 (nombre: "Firulais") y mostrá en consola el resultado de llamar a animal1.hablar().


//--------------------------------------------------
// 2. Herencia prototípica manual
//--------------------------------------------------

// 👉 Paso 4: Creá una función constructora Perro que reciba nombre y raza, y llame a Animal para asignar el nombre.


// 👉 Paso 5: Hacé que Perro herede de Animal usando Object.create y asignando el prototype correctamente.


// 👉 Paso 6: Agregá un método al prototype de Perro llamado ladrar que retorne "[nombre] dice guau!".


// 👉 Paso 7: Creá una instancia perro1 (nombre: "Rocky", raza: "Labrador") y mostrá en consola el resultado de perro1.hablar() y perro1.ladrar().


// 👉 Paso 8: Mostrá en consola si perro1 es instancia de Perro y de Animal usando instanceof.


//--------------------------------------------------
// 3. Explorando la cadena prototípica
//--------------------------------------------------

// 👉 Paso 9: Mostrá en consola el prototype de perro1, el prototype de Perro, y el prototype de Animal.


// 👉 Paso 10: Seleccioná la opción correcta sobre la cadena prototípica:
// Guardá la letra de la opción correcta en la variable 'respuestaProto1'.
// Opción A: JS busca métodos primero en la instancia, luego en su prototype y sigue subiendo la cadena.
// Opción B: JS solo busca métodos en la instancia.
// Opción C: JS no tiene prototipos.
let respuestaProto1 = '';

//--------------------------------------------------
// 4. Práctica combinada
//--------------------------------------------------

// 👉 Paso 11: Creá una función llamada crearPerrosDesdeArray que reciba un array de objetos con nombre y raza,
// y retorne un array de instancias de Perro.


// 👉 Paso 12: Usá la función anterior con el array:
// [{nombre: "Toby", raza: "Beagle"}, {nombre: "Lola", raza: "Caniche"}]
// Mostrá en consola el resultado de hablar y ladrar de cada perro creado.

// No modifiques el código debajo de este comentario
module.exports = {
  Animal,
  animal1,
  Perro,
  perro1,
  respuestaProto1,
  crearPerrosDesdeArray,
};