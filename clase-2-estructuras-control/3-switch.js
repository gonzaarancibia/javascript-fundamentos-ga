// 🧠 Tema: Switch

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 3-switch.js

console.log("Lo que haces en vida, resonara en la eternidad🚀");
//--------------------------------------------------
// 1. Switch simple
//--------------------------------------------------

// 👉 Paso 1: Declarar una variable llamada 'dia' con un valor numérico del 1 al 7
 let dia = 3;

// 👉 Paso 2: Usar una estructura switch para mostrar el nombre del día de la semana
// Si dia es 1, mostrar "Lunes"
// Si dia es 2, mostrar "Martes"
// Si dia es 3, mostrar "Miércoles"
// Si dia es 4, mostrar "Jueves"
// Si dia es 5, mostrar "Viernes"
// Si dia es 6, mostrar "Sábado"
// Si dia es 7, mostrar "Domingo"
// Si el valor no está entre 1 y 7, mostrar "Día inválido"
// Escribe tu código aquí
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}


//--------------------------------------------------
// 2. Switch con strings
//--------------------------------------------------

// 👉 Paso 3: Declarar una variable llamada 'color' con un valor string
 let color = "verde";

// 👉 Paso 4: Usar un switch para mostrar un mensaje según el color
// Si color es "rojo", mostrar "El color es rojo"
// Si color es "azul", mostrar "El color es azul"
// Si color es "verde", mostrar "El color es verde"
// Para cualquier otro valor, mostrar "Color no reconocido"
// Escribe tu código aquí
switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("Color no reconocido");
    break;
}

//--------------------------------------------------
// 3. Aplicación práctica: Calificación con switch
//--------------------------------------------------

// 👉 Paso 5: Crear una función llamada 'calificacionLetra' que reciba una letra (A, B, C, D, F)
// y retorne un mensaje según la calificación:
// "A": "Excelente"
// "B": "Muy bien"
// "C": "Bien"
// "D": "Suficiente"
// "F": "Reprobado"
// Para cualquier otra letra, retornar "Calificación inválida"
// Escribe tu código aquí
function calificacionLetra(letra) {
  switch (letra) {
    case "A":
      return "Excelente";
    case "B":
      return "Muy bien";
    case "C":
      return "Bien";
    case "D":
      return "Suficiente";
    case "F":
      return "Reprobado";
    default:
      return "Calificación inválida";
  }
}


// 👉 Paso 6: Probar la función con diferentes valores
// Descomenta estas líneas cuando hayas completado la función
//console.log(calificacionLetra("A"));
console.log(calificacionLetra("B"));
//console.log(calificacionLetra("C"));
//console.log(calificacionLetra("D"));
//console.log(calificacionLetra("F"));
//console.log(calificacionLetra("Z"));
