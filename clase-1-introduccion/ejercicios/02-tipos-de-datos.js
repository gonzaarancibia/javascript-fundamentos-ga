// 🧠 Tema: Tipos de datos

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `typeof` para verificar el tipo de dato cuando se pida.
// - Ejecutá este archivo con el comando: node 02-tipos-de-datos.js

//--------------------------------------------------
// 1. Tipos de datos primitivos
//--------------------------------------------------

// 👉 Paso 1: Crear una variable "nombre" de tipo string

let nombre = "williams";

// 👉 Paso 2: Crear una variable "edad" de tipo number

let edad = 33;

// 👉 Paso 3: Crear una variable "esEstudiante" de tipo boolean

let esEstudiante = true;

// 👉 Paso 4: Crear una variable "direccion" sin valor (undefined)

let direccion;

// 👉 Paso 5: Crear una variable "nulo" con valor null

let nulo = null;

// 👉 Paso 6: Mostrá en consola el tipo de cada variable usando typeof

console.log("Tipo string", typeof nombre);    
console.log("Tipo number", typeof edad); 
console.log("Tipo boolean", typeof esEstudiante); 
console.log("Tipo undefined", typeof direccion); 
console.log("Tipo null", typeof nulo); 
//--------------------------------------------------
// 2. Tipo NaN (Not a Number)
//--------------------------------------------------

// 👉 Paso 7: Intentá convertir una palabra a número usando Number()

let palabra = "gato";           
let convertido = Number(palabra); 

console.log(convertido);          

// 👉 Paso 8: Mostrá en consola si el resultado es NaN usando isNaN()

console.log("¿Es NaN?:", isNaN(convertido)); 

//--------------------------------------------------
// 3. Tipos de datos complejos
//--------------------------------------------------

// 👉 Paso 9: Crear un array con al menos 3 elementos que sean colores

let miArray = ["red", "blue", "blak"];

// 👉 Paso 10: Crear un objeto "persona" con propiedades: nombre, edad y ciudad
 let persona = {
  nombre: "Juan",
  edad: 33,
  ciudad: "Buenos Aires"
};

// 👉 Paso 11: Mostrá en consola el tipo de ambos con typeof

console.log(typeof persona); 
console.log(typeof miArray); 

// ¿Qué tipo devuelve typeof en un array?
 
      // DEVUELVE UN OBJETO TAMBIEN 

//--------------------------------------------------
// 4. Comparación de tipos
//--------------------------------------------------

// 👉 Paso 12: Crear dos variables:
 let numero = 5
 let texto = '5'

// 👉 Paso 13: Compará ambas usando == y luego usando ===

console.log(numero == texto);  
console.log(numero === texto); 
// Mostrá en consola ambos resultados y explicá la diferencia en un comentario (investiga sobre el operador de igualdad)
console.log(numero == texto);  
console.log(numero === texto); 
   // El operador de comparacion (==) es un orprador que compara dos tipos de datos, pero es un tipo de comparador
   // mas felxible o debil.
   
   // El comparador (===) en un operador que compra dos tipos de datos, pero a su vez compara que sean iguales es decir
   // que de eso depense si es true o false, aparte que es una comparacion mas extricta y es la que mas se recominda
   //usar para no tener problemas a futuro en un software de calidad y escalable.

//--------------------------------------------------
// 5. Preguntas conceptuales - Descomentá la opción correcta
//--------------------------------------------------

// 👉 Paso 14: ¿Cómo representarías un vehículo en JavaScript?
 const representacionVehiculo = 'objeto'
// const representacionVehiculo = 'array'
// const representacionVehiculo = 'string'

// 👉 Paso 15: ¿Qué estructura usarías para almacenar una lista de compras?
// const estructuraListaCompras = 'objeto'
 const estructuraListaCompras = 'array'
// const estructuraListaCompras = 'string'

// 👉 Paso 16: ¿Qué tipo de dato usarías para representar si un usuario está logueado?
// const tipoUsuarioLogueado = 'string'
// const tipoUsuarioLogueado = 'number'
 const tipoUsuarioLogueado = 'boolean'

// 👉 Paso 17: ¿Qué tipo de dato usarías para guardar el precio de un producto?
// const tipoPrecioProducto = 'string'
 const tipoPrecioProducto = 'number'
// const tipoPrecioProducto = 'boolean'

// 👉 Paso 18: ¿Qué estructura usarías para representar los datos de un formulario de contacto?
// const estructuraFormulario = 'array'
const estructuraFormulario = 'objeto'
//const estructuraFormulario = 'number'

//--------------------------------------------------
// 6. Características de tipos de datos - Descomentá la opción correcta
//--------------------------------------------------

// 👉 Paso 19: Descomentá la característica correcta para cada tipo de dato.

// Los strings en JavaScript:
// const caracteristicaString = 'Son mutables (se pueden modificar después de creados)'
 const caracteristicaString = 'Son inmutables (no se pueden modificar después de creados)'
// const caracteristicaString = 'Solo pueden contener letras'

// Los arrays en JavaScript:
// const caracteristicaArray = 'Solo pueden contener elementos del mismo tipo'
// const caracteristicaArray = 'Tienen un tamaño fijo que no se puede cambiar'
 const caracteristicaArray = 'Pueden contener elementos de diferentes tipos'

// Los números en JavaScript:
// const caracteristicaNumero = 'Distinguen entre enteros y decimales como tipos diferentes'
 const caracteristicaNumero = 'Son todos del mismo tipo (no hay distinción entre enteros y decimales)'
// const caracteristicaNumero = 'Solo pueden ser positivos'

// Los objetos en JavaScript:
// const caracteristicaObjeto = 'Se accede a sus propiedades solo con notación de corchetes'
// const caracteristicaObjeto = 'No pueden contener funciones como valores'
 const caracteristicaObjeto = 'Se pueden agregar o eliminar propiedades después de creados'

// Los booleanos en JavaScript:
 const caracteristicaBoolean = 'Solo pueden ser true o false'
// const caracteristicaBoolean = 'Pueden tener tres valores: true, false o maybe'
// const caracteristicaBoolean = 'Son lo mismo que los números 1 y 0'

// 👉 Paso 20: Mostrá en consola al menos dos de estas variables.

console.log(caracteristicaObjeto, caracteristicaBoolean);

// Preguntas para reflexionar (no hace falta responder con código)
//--------------------------------------------------
// - ¿Cuál es la diferencia entre undefined y null?

     //undefined es el valor predeterminado para variables no inicializadas, 
     // mientras que null se asigna explícitamente para representar la ausencia de valor.

// - ¿Por qué typeof null devuelve "object"? (Investigá sobre este "bug" histórico)

     //Este fue un error en la implementación original de JavaScript y 
     // se ha mantenido para no romper el código existente en la web. 
     //En los primeros motores de JavaScript, los tipos de datos se representaban mediante etiquetas de tipo de 32 bits.
     //La etiqueta para null se configuró para que coincidiera con la de un objeto, lo que provocó que typeof null devolviera "object".

// - ¿En qué situaciones usarías un array y en cuáles un objeto?

  //Usaria un array cuando necesitaria recorre o acceder a una lista de lementos por ejemplo una lista
  //de nombres de personas.

  //Usaria un Objeto para poder crear datos con estructuras especificas y unicas, por ejemplo si necesito crear una
  //persona con sus diferentes caracteristicas o un vehiculo con sus caracteristicas.