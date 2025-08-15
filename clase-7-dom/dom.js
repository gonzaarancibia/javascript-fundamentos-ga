// 🧠 Tema: DOM y Manipulación de Elementos 🖥️
// Instrucciones:
// - Abrí index.html en tu navegador y trabajá sobre este archivo.
// - Completá los pasos y respondé en comentarios donde se indique.
// - Este ejercicio no tiene test

//--------------------------------------------------
// 1. Fundamentos del DOM
//--------------------------------------------------

// 👉 Paso 1: ¿Qué es el DOM?
// Explicá qué significa "DOM" y qué representa dentro de una página web.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 2: Diferencia entre window y document
// - Explicá qué representa cada uno y para qué se usan.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 3: ¿Qué es un nodo y cuáles son sus tipos más comunes?
// Ej: elemento, texto, comentario, etc.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 4: ¿Qué es el Event Bubbling y Capturing?
// - Explicá en qué se diferencian y cómo afecta a los eventos en el DOM.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 5: Diferencia entre Local Storage y Session Storage
// - ¿Qué guardan? ¿Cuánto dura? ¿Para qué sirve cada uno?

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 5: ¿Cuál es la diferencia entre innerText, textContent e innerHTML?
// Explicá cuándo usarías cada uno.

// TU RESPUESTA AQUÍ ⬇️


// 👉 Paso 6: ¿Qué son los atributos y cómo podemos modificarlos con JS?
// Ejemplo: class, id, src, href, etc.

// TU RESPUESTA AQUÍ ⬇️


//--------------------------------------------------
// 2. Seleccionar y Modificar Elementos
//--------------------------------------------------

// 👉 Paso 7: Seleccioná el elemento con id "titulo" y cambiá su texto por "Mi Lista de Compras".
// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 8: Seleccioná todos los elementos con clase "item" y cambiá el texto del primero.
// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 9: Cambiá el color del título a azul y poné en negrita el segundo item.
// ✅ Tip: style.color / classList.add()
// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 10: Agregá la clase "activo" al primer ítem
// TU CÓDIGO AQUÍ ⬇️



//--------------------------------------------------
// 3. Crear y Eliminar Elementos
//--------------------------------------------------

// 👉 Paso 11: Creá un nuevo elemento <li> con el texto "Pan" y agregalo al final de la lista con id "lista-compras".
// ✅ Tip: document.createElement(), appendChild()

// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 12: Eliminá el primer elemento <li> de la lista.
// ✅ Tip: removeChild()

// TU CÓDIGO AQUÍ ⬇️


//--------------------------------------------------
// 4. Manejar Eventos
//--------------------------------------------------

// 👉 Paso 13: Seleccioná un botón con id "btn-cambiar-fondo" y al hacer click, cambiá el color de fondo del body.
// ✅ Tip: addEventListener("click", fn)

// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 14: Prevení que un enlace con id "link-google" navegue, y en cambio mostrale un alert().
// ✅ Tip: event.preventDefault()

// TU CÓDIGO AQUÍ ⬇️


// 👉 Paso 15: Usá delegación de eventos para que al hacer click en cualquier <li> de la lista, se elimine.
// ✅ Tip: event.target.tagName

// TU CÓDIGO AQUÍ ⬇️

//--------------------------------------------------
// 5. Consumo de API y mostrar datos en el DOM
//--------------------------------------------------

const formContacto = document.getElementById("form-ejemplo");

// 👉 Paso 16: Al enviar el formulario, prevení el comportamiento por defecto
// Obtené el nombre y el email, hacé un POST ficticio a https://jsonplaceholder.typicode.com/posts
// y mostrá la respuesta en un <p> debajo del formulario
// ✅ Tip: Puedes chequear la pagina para ejemplos en: https://jsonplaceholder.typicode.com/
// ✅ Tip: Usá fetch con método POST, escucha el evento submit, y envia por body con JSON.stringify()
// ✅ Tip: Envia en el body el nombre y email, y mostrá la respuesta en un <p> debajo del formulario.
// ✅ Tip: La respuesta deberas parsearla con .json()
// ✅ Tip: Envia un headers así:  headers: { 'Content-type': 'application/json; charset=UTF-8' }
// TU CÓDIGO AQUÍ ⬇️


//--------------------------------------------------
// 6. Bonus: Guardar datos en Local Storage
//--------------------------------------------------

// 👉 Paso 17: Guardá en localStorage el último color de fondo elegido para la página
// Al recargar, restaurá ese color automáticamente
// TU CÓDIGO AQUÍ ⬇️


//--------------------------------------------------
// 7. Aplicación en tu Proyecto de Formularios
//--------------------------------------------------

// 👉 Paso 18: Abrí tu proyecto de formulario hecho en clases previas.
// - Cambiá el color del título principal usando JavaScript.
// - Cambiá el texto de al menos un label.
// - Cuando el usuario complete todos los campos y haga click en enviar, mostrá un mensaje en pantalla con los datos de los campos.
// - Agregá un botón que, al clickear, cambie el fondo del formulario.

// ✅ Tip: No modifiques el HTML original, hacé todos los cambios con JS.

// TU CÓDIGO AQUÍ ⬇️


//--------------------------------------------------
// 8. Multiple Choice sobre DOM
//--------------------------------------------------

// 👉 Paso 19: ¿Cuál de estas afirmaciones sobre el DOM es verdadera?
// Comentá la opción correcta y guardá la letra en `respuestaDOM1`

let respuestaDOM1;
// respuestaDOM1 = 'A'; El DOM es un archivo separado que el navegador descarga.
// respuestaDOM1 = 'B'; El DOM es una representación en memoria de la estructura HTML.
// respuestaDOM1 = 'C'; El DOM solo existe en Node.js.
// respuestaDOM1 = 'D'; El DOM no puede modificarse con JavaScript.


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------

module.exports = { respuestaDOM1 };
