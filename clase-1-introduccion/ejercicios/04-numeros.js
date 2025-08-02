// 🧠 Tema: Números y Operadores Aritméticos

// Instrucciones:
// - Leé cada paso y completá el código.
// - Usá `console.log()` para ver/mostrar los resultados.
// - Ejecutá este archivo con: node 04-numeros.js

//--------------------------------------------------
// 1. Operaciones básicas
//--------------------------------------------------

// 👉 Paso 1: Declarar dos variables con números (a y b)

let numero1 = 2;
let numero2 = 4;

// 👉 Paso 2: Realizar las siguientes operaciones y mostrar los resultados:
// - Suma
console.log(numero1 + numero2);

// - Resta
console.log(numero1 - numero2);


// - Multiplicación
console.log(numero1 * numero2);


// - División
console.log(numero1 / numero2);


//--------------------------------------------------
// 2. Módulo y Potencia
//--------------------------------------------------

// 👉 Paso 3: Mostrar el resto de dividir a entre b
let a = 2;
let b = 3;

let resto = a % b;
console.log("paso 3", resto);
// 👉 Paso 4: Calcular a elevado a la potencia de b

let resultado = a ** b;

console.log(resultado);

//--------------------------------------------------
// 3. Métodos de Math
//--------------------------------------------------

// 👉 Paso 5: Usa un método de Math para redondear 9.7 al entero más cercano

console.log(Math.round(9.7));

// 👉 Paso 6: Usa un método de Math que sea distinto a .round para redondear 9.2 al entero más cercano

console.log(Math.floor(9.2));

// 👉 Paso 7: Usa un método de Math para encontrar el valor máximo entre 15, 7 y 23

console.log(Math.max(15, 7, 23));

// 👉 Paso 8: Usa un método de Math para encontrar el valor mínimo entre 15, 7 y 23
console.log(Math.min(15, 7, 23));

// 👉 Paso 9: Usa un método de Math para calcular la raíz cuadrada de 25

console.log(Math.sqrt(25));

// 👉 Paso 10: Usa un método de Math para obtener un número aleatorio entre 0 y 1

console.log(Math.random(0, 1));

//--------------------------------------------------
// 4. Simulaciones con números aleatorios
//--------------------------------------------------

// 👉 Paso 11: Genera un número aleatorio entre 1 y 10 (ambos inclusive)

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

let numeroAleatorio = generarNumeroAleatorio();
console.log(numeroAleatorio);

// 👉 Paso 12: Genera un número aleatorio entre 50 y 100 (ambos inclusive)

function generarNumeroAleatorio() {
  const min = 50;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio1 = generarNumeroAleatorio();
console.log(numeroAleatorio1);  


// 👉 Paso 13: Simula el lanzamiento de una moneda (0 = cara, 1 = cruz)
// Pista: Usa Math.round y Math.random

function lanzarMoneda() {
  const resultado = Math.random();

  const lanzamiento = Math.round(resultado);

  return lanzamiento;
}

const resultadoLanzamiento = lanzarMoneda();

if (resultadoLanzamiento === 0) {
  console.log("Cara");
} else {
  console.log("Cruz");
}

//--------------------------------------------------
// Desafío extra avanzado (opcional)
//--------------------------------------------------
// - Crear una función que reciba el número de caras de un dado y devuelva un valor aleatorio entre 1 y ese número.
// - Ejemplo: tirarDado(20) → número entre 1 y 20

function tirarDado(caras) {
  if (typeof caras !== 'number' || caras <= 0) {
    return NaN; 
  }
  return Math.floor(Math.random() * caras) + 1;
}

const resultados = tirarDado(20);
console.log(resultado);


// function tirarDado(caras) {
//   // ...
// }

// console.log(tirarDado(20))
