// 🧠 Tema: Type Casting y Type Coercion

// Instrucciones:
// - Leé cada paso y completá el código.
// - Observá los resultados en consola y tratá de entender qué hizo JS.
// - Ejecutá este archivo con: node 05-type-casting-coercion.js

//--------------------------------------------------
// 1. Type Casting (Conversión explícita)
//--------------------------------------------------

// 👉 Paso 1: Convertir un número a string usando String()
 let numero = 123;
 let numeroComoTexto = String(numero);
console.log(typeof numero);
console.log(typeof numeroComoTexto); 

// 👉 Paso 2: Convertir un string de numeros a número usando Number()
let texto = "123";
let textoComoNumero = Number(texto);

console.log(textoComoNumero); 
console.log(typeof textoComoNumero); 

// 👉 Paso 3: Mostrar los tipos con typeof


//--------------------------------------------------
// 2. Casos prácticos de Casting
//--------------------------------------------------

// 👉 Paso 4: Convertir un string que NO es un número y ver qué pasa
let textoInvalido = "hola mundo"; 
let resultado = Number(textoInvalido);

console.log(resultado); // ¿Qué muestra?

//muestra NaN  "Not a Number" (No es un Número)

// 👉 Paso 5: Convertir un valor booleano a número
let valorBooleano = true;
let valorComoNumero = Number(valorBooleano);

console.log(valorComoNumero); //¿Que muestra?
// Muestra 1

// 👉 Paso 6: Convertir un valor null a número
let valorNulo = null;
let nuloComomNumero = Number(valorNulo);

console.log(nuloComomNumero); //¿Que muestra?
// Muestra 0

//--------------------------------------------------
// 3. Type Coercion (Conversión implícita)
//--------------------------------------------------

// 👉 Paso 7: Analizá el resultado de estas operaciones (no modifiques, solo descomentá una por una)

  console.log("5" + 2)   // Coercion a string
  console.log("5" - 2)   // Coercion a número
  console.log(true + 1)  // Coercion de boolean a número
  console.log(false + "3") // Coercion a string
  console.log(null + 1)  // null se convierte en 0
  console.log(undefined + 1) // undefined → NaN

//--------------------------------------------------
// 4. Descomentá la opción correcta
//--------------------------------------------------

// 👉 Paso 8: ¿Qué devuelve la expresión "10" + 5?
 const resultado1 = "105"
// const resultado1 = 15
//  const resultado1 = "15"

// 👉 Paso 9: ¿Qué devuelve la expresión "10" - 5?
// const resultado2 = "5"
 const resultado2 = 5
// const resultado2 = "105"

// 👉 Paso 10: ¿Qué devuelve la expresión Number("123abc")?
// const resultado3 = 123
 const resultado3 = NaN
// const resultado3 = "123abc"

// 👉 Paso 11: ¿Qué devuelve la expresión Boolean(0)?
// const resultado4 = true
 const resultado4 = false
// const resultado4 = null

// 👉 Paso 12: ¿Qué devuelve la expresión Boolean("false")?
 const resultado5 = true
// const resultado5 = false
// const resultado5 = "false"

//--------------------------------------------------
// 5. Casos especiales - Descomentá y observá los resultados
//--------------------------------------------------

// 👉 Paso 13: Valores que se convierten a false en contexto booleano
 console.log(Boolean(""))      // String vacío
 console.log(Boolean(0))       // Número cero
 console.log(Boolean(null))    // Valor nulo
 console.log(Boolean(undefined)) // Valor indefinido
 console.log(Boolean(NaN))     // Not a Number

// 👉 Paso 14: Valores que se convierten a true en contexto booleano
 console.log(Boolean("hola"))  // String no vacío
 console.log(Boolean(42))      // Número distinto de cero
 console.log(Boolean([]))      // Array vacío
 console.log(Boolean({}))      // Objeto vacío
 console.log(Boolean(function(){})) // Función

//--------------------------------------------------
// 6. Reflexión (comentá tu respuesta acá abajo)
//--------------------------------------------------

// 👉 ¿Qué diferencias notaste entre casting y coercion?
       //La diferencia que encuentro es que:

          //CASTING => es una covercion explicita, esto quiere decir que el programador manipula las converciones.
         //CASTING => es una covercion implicita, esto quiere decir que el programador NO puede manipular las converciones, si no que,
         //javascript le da la conversion por defecto.

// 👉 ¿Por qué crees que JavaScript convierte los tipos automáticamente?

    // Creo que la conversion sea mas flexible y fácil de usar, esto permite que el código sea más corto
    //  y que los programadores no tengan que convertir los tipos manualmente todo el tiempo.

// 👉 ¿Qué problemas podría causar la coerción de tipos en un programa?
   
       //La coerción de tipos, aunque es una característica diseñada para hacer el código más flexible, 
       // puede ser una fuente de problemas si no se maneja correctamente.
       //POR EJEMPLO: Los errores logicos, la coerción implícita puede hacer que comparaciones que parecen
       //  obvias se comporten de manera sorprendente, llevando a errores difíciles de detectar.

