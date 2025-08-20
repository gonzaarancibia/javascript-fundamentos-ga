// 🧠 Tema: Creación y Manipulación Básica de Objetos 🛠️

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 2-manipulacion-objetos.js

//--------------------------------------------------
// 1. Sintaxis y acceso a propiedades
//--------------------------------------------------

// 👉 Paso 1: Creá un objeto llamado 'auto' con las siguientes propiedades:
// - marca: "Toyota"
// - modelo: "Corolla"
// - año: 2020
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  "año": 2020
};

// 👉 Paso 2: Mostrá en consola la marca y el modelo del auto usando notación de punto.
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}`);
//--------------------------------------------------
// 2. Modificación y acceso dinámico
//--------------------------------------------------

// 👉 Paso 3: Cambiá el valor de la propiedad 'año' del auto a 2023.
auto["año"] = 2023; 
// 👉 Paso 4: Agregá una nueva propiedad llamada 'color' con el valor "rojo" usando notación de corchetes.
auto["color"] = "rojo";
// 👉 Paso 5: Eliminá la propiedad 'modelo' del objeto auto.
delete auto.modelo;
//--------------------------------------------------
// 3. Algoritmos y funciones con objetos
//--------------------------------------------------

// 👉 Paso 6: Creá una función llamada 'crearLibro' que reciba título, autor y año, y retorne un objeto libro con esas propiedades.
function crearLibro(titulo, autor, anio){
   return { titulo, autor, "año": anio };
}

// 👉 Paso 7: Creá una función llamada 'actualizarPropiedad' que reciba un objeto, el nombre de una propiedad y un nuevo valor, y actualice esa propiedad en el objeto.
function actualizarPropiedad(objeto, propiedad, nuevoValor) {
  objeto[propiedad] = nuevoValor;
  return objeto; // 
}

// 👉 Paso 8: Creá una función llamada 'eliminarPropiedad' que reciba un objeto y el nombre de una propiedad, y elimine esa propiedad del objeto.
function eliminarPropiedad(objeto, propiedad) {
  delete objeto[propiedad];
  return objeto;
 }

// 👉 Paso 9: Creá una función llamada 'contarPropiedades' que reciba un objeto y retorne la cantidad de propiedades que tiene.
function contarPropiedades(objeto) {
  return Object.keys(objeto).length;
}


//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 10: Seleccioná la opción correcta sobre cómo acceder a una propiedad de un objeto:
// Guardá la letra de la opción correcta en la variable 'respuestaObj1'.
// Opción A: obj[propiedad]
// Opción B: obj.propiedad
// Opción C: Ambas son correctas
let respuestaObj1 = 'C';

// 👉 Paso 11: Seleccioná la opción correcta sobre cómo eliminar una propiedad de un objeto:
// Guardá la letra de la opción correcta en la variable 'respuestaObj2'.
// Opción A: delete obj.propiedad
// Opción B: obj.eliminar(propiedad)
// Opción C: obj.propiedad = null
let respuestaObj2 = 'A';

//--------------------------------------------------
// 5. Práctica combinada
//--------------------------------------------------

// 👉 Paso 12: Usá las funciones anteriores para crear un libro, actualizar su año, eliminar el autor y contar sus propiedades.
// Guia paso a paso:
// 1. Crear un libro usando la función crearLibro (por ejemplo, título: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943).
// 2. Actualizar el año del libro a 1950 usando la función actualizarPropiedad.
// 3. Eliminar la propiedad 'autor' del libro usando la función eliminarPropiedad.
// 4. Contar cuántas propiedades tiene el libro usando la función contarPropiedades.
// Mostrá los resultados en consola.
function crearLibro(titulo, autor, anio) {
  return { titulo, autor, "año": anio };
}

function actualizarPropiedad(objeto, propiedad, nuevoValor) {
  objeto[propiedad] = nuevoValor;
  return objeto;
}

function eliminarPropiedad(objeto, propiedad) {
  delete objeto[propiedad];
  return objeto;
}

function contarPropiedades(objeto) {
  return Object.keys(objeto).length;
}

const libro = crearLibro(
  "El Principito",
  "Antoine de Saint-Exupéry",
  1943
);

console.log("1) Libro creado:", libro);
actualizarPropiedad(libro, "año", 1950);
console.log("2) Después de actualizar año:", libro);

eliminarPropiedad(libro, "autor");
console.log("3) Después de eliminar autor:", libro);

const cantidad = contarPropiedades(libro);
console.log("4) Cantidad de propiedades:", cantidad);

module.exports = {
  auto,
  crearLibro,
  actualizarPropiedad,
  eliminarPropiedad,
  contarPropiedades,
  respuestaObj1,
  respuestaObj2,
};