// 🧠 Tema: Nullish Coalescing (??)

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 05-nullish-coalescing.js

//--------------------------------------------------
// 1. Introducción al operador ??
//--------------------------------------------------

// 👉 Paso 1: Declará variables con diferentes valores, incluyendo null y undefined
 let nombre = null;
 let nombrePredeterminado = "Invitado";
 let edad = undefined;
 let edadPredeterminada = 18;
 let puntuacion = 0;
 let puntuacionPredeterminada = 10;
 let mensaje = "";
 let mensajePredeterminado = "Sin mensaje";

// 👉 Paso 2: Usá el operador ?? para asignar valores predeterminados
 let nombreMostrado = nombre ?? nombrePredeterminado;
 let edadMostrada = edad ?? edadPredeterminada;
 let puntuacionMostrada = puntuacion ?? puntuacionPredeterminada;
 let mensajeMostrado = mensaje ?? mensajePredeterminado;

// 👉 Paso 3: Mostrá los resultados en consola

console.log("Nombre:", nombreMostrado);
console.log("Edad:", edadMostrada);
console.log("Puntuación:", puntuacionMostrada);
console.log("Mensaje:", mensajeMostrado);
//--------------------------------------------------
// 2. Comparación con el operador OR (||)
//--------------------------------------------------

// 👉 Paso 4: Usá el operador || para las mismas variables
// let nombreConOR = 
// let edadConOR = 
// let puntuacionConOR = 
// let mensajeConOR = 

 nombre = null;
 nombrePredeterminado = "Invitado";
 nombreConOR = nombre || nombrePredeterminado;

 edad = undefined;
 edadPredeterminada = 18;
 edadConOR = edad || edadPredeterminada;

 puntuacion = 0;
 puntuacionPredeterminada = 10;
 puntuacionConOR = puntuacion || puntuacionPredeterminada;

 mensaje = "";
 mensajePredeterminado = "Sin mensaje";
 mensajeConOR = mensaje || mensajePredeterminado;

// 👉 Paso 5: Mostrá los resultados en consola
console.log("Nombre (OR):", nombreConOR); 
console.log("Edad (OR):", edadConOR); 
console.log("Puntuación (OR):", puntuacionConOR); 
console.log("Mensaje (OR):", mensajeConOR); 

// 👉 Paso 6: Compará los resultados de ?? y || y explica la diferencia en un comentario


// 👉 Paso 6: Compará los resultados de ?? y || y explica la diferencia en un comentario

 nombre = null;
 edad = undefined;
 puntuacion = 0;
 mensaje = "";

let nombreConNullish = nombre ?? "Invitado"; 
let edadConNullish = edad ?? 18; 
let puntuacionConNullish = puntuacion ?? 10; 
let mensajeConNullish = mensaje ?? "Sin mensaje"; 

let nombreConOR = nombre || "Invitado"; 
let edadConOR = edad || 18; 
let puntuacionConOR = puntuacion || 10;
let mensajeConOR = mensaje || "Sin mensaje"; 

console.log("--- Resultados con ?? (Fusión Nula) ---");
console.log("Nombre:", nombreConNullish);
console.log("Edad:", edadConNullish);
console.log("Puntuación:", puntuacionConNullish);
console.log("Mensaje:", mensajeConNullish);

console.log("\n--- Resultados con || (OR Lógico) ---");
console.log("Nombre:", nombreConOR);
console.log("Edad:", edadConOR);
console.log("Puntuación:", puntuacionConOR);
console.log("Mensaje:", mensajeConOR);

/*
EXPLICACIÓN:
El operador de fusión nula (??) solo devuelve el valor predeterminado si la variable original es 'null' o 'undefined'.
Por eso, en los casos de 'puntuacion' (0) y 'mensaje' (""), que no son ni 'null' ni 'undefined', el operador ?? mantiene sus valores originales.

En cambio, el operador OR lógico (||) devuelve el valor predeterminado si la variable original es "falsy" (falsa).
Los valores "falsy" incluyen: null, undefined, 0, "" (cadena vacía) y false.
Por esta razón, 'puntuacion' (0) y 'mensaje' ("") son considerados falsos y el operador || asigna los valores predeterminados.
*/

//--------------------------------------------------
// 3. Encadenamiento de operador ?? (Opción múltiple)
//--------------------------------------------------
// 👉 Paso 7: Declará las siguientes variables:
 let opcion1 = null;
 let opcion2 = undefined;
 let opcion3 = "Valor disponible";
 let valorPredeterminado = "Valor final";

// 👉 Paso 8: ¿Cuál de las siguientes opciones devolverá "Valor disponible"?
// Descomentá SOLO la opción que consideres correcta:

// OPCIÓN A:
 let resultado = opcion1 ?? opcion2 ?? opcion3 ?? valorPredeterminado;

// OPCIÓN B:
// let resultado = opcion1 || opcion2 || valorPredeterminado || opcion3;

// OPCIÓN C:
// let resultado = opcion2 ?? opcion1 ?? valorPredeterminado ?? opcion3;

// OPCIÓN D:
 //let resultado = valorPredeterminado ?? opcion3 ?? opcion1 ?? opcion2;

// 👉 Paso 9: Mostrá el resultado en consola
  console.log("El resultado es:", resultado);

// 👉 Paso 10: Explicá en un comentario por qué la opción que elegiste es la correcta
// y qué valor devolvería cada una de las otras opciones.

/* Opción B: let resultado = opcion1 || opcion2 || valorPredeterminado || opcion3;

Esta opción utiliza el operador OR lógico (||), que busca el primer valor "truthy" (verdadero).

opcion1 (null) y opcion2 (undefined) son "falsy" (falsos).

valorPredeterminado ("Valor final") es una cadena de texto no vacía, por lo tanto, es "truthy".

Resultado: "Valor final"

Opción C: let resultado = opcion2 ?? opcion1 ?? valorPredeterminado ?? opcion3;

Aquí, el orden de las variables es diferente. El operador ?? busca el primer valor que no sea null ni undefined.

opcion2 es undefined, se salta.

opcion1 es null, se salta.

valorPredeterminado es "Valor final". Como no es null ni undefined, este valor se asigna a resultado.

Resultado: "Valor final"

Opción D: let resultado = valorPredeterminado ?? opcion3 ?? opcion1 ?? opcion2;

En esta opción, valorPredeterminado se coloca al principio de la expresión.

valorPredeterminado es "Valor final". Como no es null ni undefined, este valor se asigna inmediatamente a resultado. La expresión no llega a evaluar las otras opciones.

Resultado: "Valor final"*/

// EXPLICACIÓN:
// En resumen, la clave para resolver este problema es entender la diferencia entre el operador de fusión nula
//  (??) y el operador OR lógico (||), así como el orden en el que se evalúan las variables.
