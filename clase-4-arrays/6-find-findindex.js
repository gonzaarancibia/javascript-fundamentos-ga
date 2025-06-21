// 🧠 Tema: Buscar elementos en Arrays: find() y findIndex() 🔎

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 6-find-findindex.js

//--------------------------------------------------
// 1. find(): Encontrar el primer elemento que cumple una condición
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'productos' con objetos que tengan las propiedades 'nombre' y 'precio' (con diferentes valores):
// Agrega el primero: {nombre: "Telefono", precio: 1200}


// 👉 Paso 2: Usando find(), encontrá el primer producto que cueste menos de 400
// y guardalo en una variable llamada 'productoEconomico'.


// 👉 Paso 3: Usando find(), encontrá el producto llamado "telefono"
// y guardalo en una variable llamada 'productoBuscado'.


//--------------------------------------------------
// 2. findIndex(): Encontrar la posición de un elemento
//--------------------------------------------------

// 👉 Paso 4: Usando findIndex(), encontrá la posición del producto que cuesta 500
// y guardala en una variable llamada 'posicionProducto'.


// 👉 Paso 5: Usando findIndex(), encontrá la posición de un producto que cueste 1000
// y guardala en una variable llamada 'posicionNoEncontrada'.


//--------------------------------------------------
// 3. Práctica combinada
//--------------------------------------------------

// 👉 Paso 6: Creá una función llamada 'buscarProducto' que reciba como parámetros:
// - Un array de productos
// - Un precio máximo
// La función debe retornar un objeto con dos propiedades:
// - producto: el primer producto que cueste menos que el precio máximo (usando find())
// - posicion: la posición de ese producto en el array (usando findIndex())


//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 7: Seleccioná la opción correcta sobre find():
// Guardá la letra de la opción correcta en la variable 'respuestaFind'.
// Opción A: Retorna todos los elementos que cumplen la condición.
// Opción B: Retorna el primer elemento que cumple la condición.
// Opción C: Modifica el array original.
let respuestaFind = '';

// 👉 Paso 8: Seleccioná la opción correcta sobre findIndex():
// Guardá la letra de la opción correcta en la variable 'respuestaFindIndex'.
// Opción A: Retorna el último índice encontrado.
// Opción B: Retorna -1 si no encuentra el elemento.
// Opción C: Retorna null si no encuentra el elemento.
let respuestaFindIndex = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre cuándo usar find() vs findIndex():
// Guardá la letra de la opción correcta en la variable 'respuestaUso'.
// Opción A: Usar find() cuando necesitamos el elemento y findIndex() cuando necesitamos su posición.
// Opción B: Usar findIndex() siempre es mejor que usar find().
// Opción C: Da lo mismo cuál usar, hacen lo mismo.
let respuestaUso = '';

// No modifiques el código debajo de este comentario
module.exports = {
  productos,
  productoEconomico,
  productoBuscado,
  posicionProducto,
  posicionNoEncontrada,
  buscarProducto,
  respuestaFind,
  respuestaFindIndex,
  respuestaUso,
};