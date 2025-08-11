// 🧠 Tema: Operadores de asignación lógica (&&=, ||=, ??=)

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 06-asignacion-logica.js

//--------------------------------------------------
// 1. Operador de asignación AND lógico (&&=)
//--------------------------------------------------

// 👉 Paso 1: Declará una variable llamada 'tienePermiso' con un valor booleano
let tienePermiso = true;

// 👉 Paso 2: Usá el operador &&= para asignar "Acceso concedido" solo si tienePermiso es verdadero
// Antes de ES2021 se hacía así:

// if (condicion) {
//   condicion = nuevoValor;
// }

// Ahora puedes usar el operador &&= para hacer lo mismo:
// Escribe tu código aquí
tienePermiso &&= "Acceso concedido";

// 👉 Paso 3: Mostrá el resultado en consola
// Escribe tu código aquí
console.log(tienePermiso);


// 👉 Paso 4: Declará una variable llamada 'otroPermiso' con valor false y probá el operador &&=
let otroPermiso = false;
// Escribe tu código aquí
otroPermiso &&= "Acceso concedido";

//--------------------------------------------------
// 2. Operador de asignación OR lógico (||=)
//--------------------------------------------------

// 👉 Paso 5: Declará las variables 'nombre' (vacía) y 'nombrePredeterminado' con valor "Invitado"
let nombre = "";
let nombrePredeterminado = "Invitado";

// 👉 Paso 6: Usá el operador ||= para asignar un nombrePredeterminado a nombre  si la variable nombre es falsy
// Antes de ES2021:
 //if (!condicion) {
//   condicion = valorPredeterminado;
 //}

// Con el operador ||=:
// Escribe tu código aquí
nombre ||= nombrePredeterminado;

// 👉 Paso 7: Mostrá el resultado en consola
// Escribe tu código aquí
console.log(nombre); 


// 👉 Paso 8: Declará una variable 'usuario' con valor "admin" y probá el operador ||=
let usuario = "admin";
// Escribe tu código aquí
usuario ||= "Invitado";
console.log(usuario);
//--------------------------------------------------
// 3. Operador de asignación de coalescencia nula (??=)
//--------------------------------------------------

// 👉 Paso 9: Declará un objeto 'config' con las propiedades indicadas
let config = {
  tema: "claro",
  notificaciones: null,
  idioma: undefined
};

// 👉 Paso 10: Usá el operador ??= para asignar valores predeterminados solo si son null o undefined
// Escribe tu código aquí para asignar:
// - "oscuro" como tema predeterminado
// - true como valor predeterminado para notificaciones
// - "español" como idioma predeterminado
// - "valor predeterminado" para una nueva propiedad llamada "nuevaPropiedad"
config.tema ??= "oscuro";
config.notificaciones ??= true;
config.idioma ??= "español";
config.nuevaPropiedad ??= "valor predeterminado";

// 👉 Paso 11: Mostrá el objeto resultante en consola
// Escribe tu código aquí
console.log(config);

