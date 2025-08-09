// 🧠 Tema: Iterar arrays y strings con for...of

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 5-for-of.js

console.log("Lo que haces en vida, resonara en la eternidad🚀");
//--------------------------------------------------
// 1. Iterar un array con for...of
//--------------------------------------------------

// 👉 Paso 1: Declarar un array llamado 'animales' con al menos 4 animales
let animales = ["León", "Tigre", "Cebra", "Elefante"];

// 👉 Paso 2: Usá un bucle for...of para mostrar cada animal en consola
// Usá console.log para mostrar cada animal
// Escribe tu código aquí
for (let animal of animales) {
  console.log(animal);
}

//--------------------------------------------------
// 2. Iterar un string con for...of
//--------------------------------------------------

// 👉 Paso 3: Declarar una variable llamada 'palabra' con un string de al menos 5 letras
let palabra = "javascript";

// 👉 Paso 4: Usá un bucle for...of para mostrar cada letra de la palabra en consola
// Usá console.log para mostrar cada letra
// Escribe tu código aquí

for (let letra of palabra) {
  console.log(letra);
}

//--------------------------------------------------
// 3. Sumar números de un array con for...of
//--------------------------------------------------

// 👉 Paso 5: Declarar un array llamado 'numeros' con al menos 5 números
 let numeros = [10, 20, 30, 40, 50];
contador = sumaTotal++
// 👉 Paso 6: Usá un bucle for...of para sumar todos los números y mostrar el resultado
// Usá console.log para mostrar el resultado de la suma
// Escribe tu código aquí
let sumaTotal = 0;

for (let numero of numeros) {
   sumaTotal = sumaTotal + numero;
}

console.log(sumaTotal);
//--------------------------------------------------
// 4. Buscar un elemento en un array con for...of
//--------------------------------------------------

// 👉 Paso 7: Usá un bucle for...of para buscar si existe el animal "gato" en el array 'animales'.
// Si lo encontrás, hacé un console.log que muestre "¡Gato encontrado!" y termina el bucle.
// Si no está, no muestra nada.
// Escribe tu código aquí
let animales2 = ["perro", "tortuga", "gato", "pez"];

for (let animal of animales2) {
  if (animal === "gato") {
    console.log("¡Gato encontrado!");
    break;
  }
}
