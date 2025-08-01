// 🧠 Tema: Manipulación de Strings

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 03-strings.js

//--------------------------------------------------
// 1. Concatenación de strings
//--------------------------------------------------

// 👉 Paso 1: Crear dos variables: "nombre" y "apellido"
let nombre = "Williams";
let apellido = "Valle";

// 👉 Paso 2: Concatenarlos en una variable "nombreCompleto" usando el operador +
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
// 👉 Paso 3: Crear otra variable "nombreCompleto2" usando template literals
 let nombreCompleto2 = `Mi nombre es: ${nombre} ${apellido}`;
 
//--------------------------------------------------
// 2. Propiedad .length
//--------------------------------------------------

// 👉 Paso 4: Mostrá cuántos caracteres tiene "nombreCompleto"
console.log(nombreCompleto.length);

//--------------------------------------------------
// 3. Métodos de transformación (investiga y utiliza los métodos que más te gusten)
//--------------------------------------------------

// 👉 Paso 5: Convertí "nombreCompleto" a mayúsculas.
let nombreComleto = "williams valle"
console.log(nombreCompleto.toUpperCase());


// 👉 Paso 6: Convertí "nombreCompleto" a minúsculas.
let nombreComleto3 = "Wlliams Valle"
console.log(nombreCompleto.toLowerCase());

// 👉 Paso 7: Obtené los primeros 5 caracteres.
let nombreCaracteres = "Wlliams Valle";
let primeros5 = nombreCaracteres.slice(0, 5);
console.log(primeros5);

// 👉 Paso 8: Reemplazá todas las vocales 'a' por '@'.

let vocales = "Wlliams Valle";
let vocalesModificado = vocales.replace(/a/g, "@");
console.log(vocalesModificado); 

// 👉 Paso 9: Eliminá los espacios en blanco al inicio y final.

let texto = "   Williams Valle   ";
let textoSinEspacios = texto.trim();
console.log(textoSinEspacios); 

// 👉 Paso 10: Dividí "nombreCompleto" en un array.

let partes = nombreCompleto.split(" ");

console.log(partes); 


//--------------------------------------------------
// 4. Métodos de búsqueda
//--------------------------------------------------

// 👉 Paso 7: Verificá si "apellido" está incluido en "nombreCompleto"
let estaIncluido = nombreCompleto.includes(apellido);

// 👉 Paso 8: Mostrá en consola un mensaje que diga si fue encontrado o no

console.log(nombreCompleto.includes("Valle"));
//--------------------------------------------------
// Desafío extra (opcional)
//--------------------------------------------------
// - Crear una función que reciba un string y devuelva el mismo string con la primera letra en mayúscula.
// - Ejemplo: capitalizar("gonzalo") → "Gonzalo"

function capitalizar(texto) {
  if (!texto) return; 
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

console.log(capitalizar("gonzalo"));

//habia subido mal, puse ejercicios variables terminado, y hera jercicios STRINGS terminados gonza.
