// 🧠 Tema: Bucle for

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 4-for.js
console.log("Lo que haces en vida, resonara en la eternidad🚀");
//--------------------------------------------------
// 1. Bucle for básico
//--------------------------------------------------

// 👉 Paso 1: Usá un bucle for para mostrar los números del 1 al 5 en consola
// Usá console.log para mostrar cada número
// Escribe tu código aquí
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//--------------------------------------------------
// 2. Bucle for con incremento personalizado
//--------------------------------------------------

// 👉 Paso 2: Usá un bucle for para mostrar los números pares del 2 al 10
// Usá console.log para mostrar cada número par
// Escribe tu código aquí
for (let i = 2; i <= 10; i += 2) {
  console.log("------" + i);
}

//--------------------------------------------------
// 3. Suma de números con for
//--------------------------------------------------

// 👉 Paso 3: Usá un bucle for para sumar los números del 1 al 10 y mostrar el resultado final
// Usá console.log para mostrar el resultado de la variable suma
// Escribe tu código aquí
let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma += i; 
}

console.log(suma);

//--------------------------------------------------
// 4. Recorrer un array con for
//--------------------------------------------------

// 👉 Paso 4: Declarar un array llamado 'frutas' con al menos 4 nombres de frutas
// Paso 4: Declarar un array con al menos 4 frutas
let frutas = ["manzana", "banana", "naranja", "uva"];
//console.log(frutas);

// 👉 Paso 5: Usá un bucle for para mostrar cada fruta del array en consola
// Usá console.log para mostrar cada fruta
// Escribe tu código aquí
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Bucle for para recorrer y mostrar cada fruta


//--------------------------------------------------
// 5. Buscar un elemento en un array con for
//--------------------------------------------------

// 👉 Paso 6: Usá un bucle for para buscar si existe la fruta "manzana" en el array 'frutas'.
// Si la encontrás, hacé un console.log que muestre "¡Manzana encontrada!" y termina el bucle.
// Si no está, no muestra nada.
// Escribe tu código aquí

for (let i = 0; i < frutass.length; i++) {
  if (frutas[i] === "manzana") {
    console.log("¡Manzana encontrada!");
    break; 
  }
}


//--------------------------------------------------
// 6. Aplicación práctica: Tabla de multiplicar
//--------------------------------------------------

// 👉 Paso 7: Escribí un bucle for que muestre la tabla de multiplicar del 7 (del 1 al 10)
// Usá console.log para mostrar cada línea, por ejemplo: "7 x 1 = 7"
// Escribe tu código aquí
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}