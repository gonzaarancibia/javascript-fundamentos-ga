// 🧠 Tema: Operador ternario

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 3-operador-ternario.js

//--------------------------------------------------
// 1. Sintaxis básica del operador ternario
//--------------------------------------------------

// 👉 Paso 1: Declará una variable con tu edad
  let edad = 25; // Cambiá este valor por tu edad real

// 👉 Paso 2: Usá el operador ternario para determinar si eres mayor de edad
let estado = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

// 👉 Paso 3: Mostrá el resultado en consola
console.log(estado);

//--------------------------------------------------
// 2. Operador ternario con strings
//--------------------------------------------------

// 👉 Paso 4: Declará una variable que indique si está lloviendo
 let estaLloviendo = true;

// 👉 Paso 5: Usá el operador ternario para decidir qué mensaje mostrar
let mensaje = estaLloviendo ? "Necesito un paraguas" : "No necesito un paraguas";

// 👉 Paso 6: Mostrá el resultado en consola
console.log(mensaje);

//--------------------------------------------------
// 3. Operadores ternarios con múltiples condiciones
//--------------------------------------------------

// 👉 Paso 7: Declará una variable con una calificación (del 0 al 10)
 let calificacion = 7;

// 👉 Paso 8: Usá el operador ternario para determinar si la calificación es aprobatoria o no
// (mayor o igual a 7 es aprobatoria, menor a 7 es insuficiente)
let resultado = calificacion >= 7 ? "Aprobado" : "Reprobado";

// 👉 Paso 9: Mostrá el resultado en consola
console.log(resultado);

// 👉 Paso 10 (Opcional - Avanzado): Si te animás, podés expandir el ejercicio anterior
// para clasificar la calificación en más categorías:
let resultadoDetallado = calificacion >= 9
// - "Excelente" (9-10)
? "Excelente"
// - "Buena" (7-8)
 : calificacion >= 7
 ? "Buena" 
// - "Aprobatoria" (6)
 : calificacion >= 6
 ? "Aprobatoria"
// - "Insuficiente" (0-5)
 : "Insuficiente"; 

// let resultadoDetallado = 
console.log(resultadoDetallado);
//--------------------------------------------------
// 4. Aplicación práctica: Calculadora de descuentos (Avanzado - opcional)
//--------------------------------------------------

// 👉 Paso 11: Declará las siguientes variables:
 let precioProducto = 100;
 let esSocio = true;
 let esFeriado = false;

// 👉 Paso 12: Calcula el precio final usando el operador ternario y retorna el precio con el descuento aplicado:
let precioFinal = esSocio
  ? precioProducto * 0.8 
  : esFeriado
  ? precioProducto * 0.9 
  : precioProducto; 

// 👉 Paso 13: Mostrá el precio final en consola
console.log(precioFinal);


//--------------------------------------------------
// 5. Desafío: Operador ternario en template literals
//--------------------------------------------------

// 👉 Paso 14: Declará una variable con el número de productos en un carrito
 let cantidadProductos = 5;

// 👉 Paso 15: Creá un mensaje usando template literals y el operador ternario
// Debe mostrar "Tu carrito tiene 5 productos" o "Tu carrito tiene 1 producto" (singular/plural)
let mensajeCarrito = `Tu carrito tiene ${cantidadProductos === 1 ? "1 producto" : `${cantidadProductos} productos`}`;
// 👉 Paso 16: Mostrá el mensaje en consola
console.log(mensajeCarrito);