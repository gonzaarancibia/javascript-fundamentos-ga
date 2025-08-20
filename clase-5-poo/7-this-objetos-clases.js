// 🧠 Tema: Uso de this en Objetos y Clases 🔍

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 7-this-contexto.js

//--------------------------------------------------
// 1. this en objetos literales
//--------------------------------------------------

// 👉 Paso 1: Creá un objeto llamado persona con una propiedad nombre y un método saludar que retorne "Hola, soy [nombre]" usando this.
const persona = {
  nombre: "Williams",
  saludar() { return `Hola, soy ${this.nombre}`; } 
};

// 👉 Paso 2: Mostrá en consola el resultado de persona.saludar().
console.log(persona.saludar());

//--------------------------------------------------
// 2. this en funciones constructoras y clases
//--------------------------------------------------

// 👉 Paso 3: Creá una función constructora Animal que reciba nombre y defina un método hablar que retorne "[nombre] hace un sonido" usando this.
const Animal = function(nombre) {
  this.nombre = nombre;
  this.hablar = () => `${this.nombre} hace un sonido`; 
};

// 👉 Paso 4: Creá una instancia animal1 (nombre: "Oso") y mostrá en consola el resultado de animal1.hablar().
const animal1 = new Animal("Oso");
console.log(animal1.hablar());

// 👉 Paso 5: Creá una clase Auto con un constructor que reciba marca y un método mostrarMarca que retorne "Marca: [marca]" usando this.
class Auto {
  constructor(marca) { this.marca = marca; }
  mostrarMarca = () => `Marca: ${this.marca}`; 
}

// 👉 Paso 6: Creá una instancia auto1 (marca: "Ford") y mostrá en consola el resultado de auto1.mostrarMarca().
const auto1 = new Auto("Ford");
console.log(auto1.mostrarMarca());

//--------------------------------------------------
// 3. this en funciones normales y arrow functions
//--------------------------------------------------

// 👉 Paso 7: Creá un objeto calculadora con una propiedad valor = 10 y dos métodos:
// - sumar: función normal que retorna this.valor + 5
// - sumarArrow: función flecha que retorna this.valor + 5
const calculadora = {
  valor: 10,
  sumar() { return this.valor + 5; },        
  sumarArrow: () => this.valor + 5    
};

// 👉 Paso 8: Mostrá en consola el resultado de calculadora.sumar() y calculadora.sumarArrow().
// Explicá en un comentario por qué los resultados son diferentes.
console.log(calculadora.sumar());       
console.log(calculadora.sumarArrow());
/* 
Explicación: 
- En sumar(), la función normal permite que this apunte al objeto calculadora. 
- En sumarArrow(), la función flecha hereda this del contexto externo (global en este caso), por eso se usa calculadora.valor explícitamente. 
*/


//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 9: Seleccioná la opción correcta sobre this en arrow functions:
// Guardá la letra de la opción correcta en la variable 'respuestaThis1'.
// Opción A: this en arrow functions siempre apunta al objeto donde se define.
// Opción B: this en arrow functions toma el valor del contexto donde fue creada.
// Opción C: this en arrow functions es igual al de las funciones normales.
let respuestaThis1 = 'B';

// 👉 Paso 10: Seleccioná la opción correcta sobre this en métodos de clase:
// Guardá la letra de la opción correcta en la variable 'respuestaThis2'.
// Opción A: this en métodos de clase apunta a la instancia de la clase.
// Opción B: this en métodos de clase apunta al objeto global.
// Opción C: this en métodos de clase es undefined.
let respuestaThis2 = 'A';

// No modifiques el código debajo de este comentario
module.exports = {
  persona,
  Animal,
  animal1,
  Auto,
  auto1,
  calculadora,
  respuestaThis1,
  respuestaThis2,
};