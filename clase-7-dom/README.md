*# Clase X - DOM y Manipulación de Elementos 🌐🖱️

¡Bienvenido a esta clase sobre **DOM en JavaScript**!  


## 📺 Video de la Clase

Puedes ver la clase completa aquí: [Clase 7 - Manipulación del DOM en JavaScript]()

En este módulo aprenderás qué es el DOM, cómo seleccionarlo y modificarlo, cómo manejar eventos, crear/eliminar elementos dinámicamente, consumir datos de APIs y almacenar información en el navegador.

---

## 📚 Temas Principales

- **Fundamentos del DOM**
  - Qué es el DOM y cómo se relaciona con HTML.
  - Diferencias entre `window` y `document`.
  - Tipos de nodos más comunes.
  - Event Bubbling y Event Capturing.
  - `LocalStorage` vs `SessionStorage`.
  - Diferencia entre `innerText`, `textContent` e `innerHTML`.
  - Atributos y cómo modificarlos desde JavaScript.

- **Selección y Modificación de Elementos**
  - Métodos como `getElementById`, `querySelector`, `querySelectorAll`.
  - Cambios de estilo y clases con `.style` y `.classList`.

- **Creación y Eliminación de Elementos**
  - `createElement`, `appendChild`, `removeChild`.

- **Manejo de Eventos**
  - `addEventListener` y delegación de eventos.
  - Prevenir comportamientos por defecto con `preventDefault()`.

- **Consumo de APIs**
  - Uso de `fetch()` para obtener y enviar datos.
  - Procesar respuestas con `.json()`.

- **Almacenamiento en el Navegador**
  - Guardar y leer datos en `localStorage`.

---

## 📖 Recursos Oficiales

- [MDN: Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [MDN: Element](https://developer.mozilla.org/es/docs/Web/API/Element)
- [MDN: addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [MDN: fetch()](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

---

## 🧪 Ejercicio

Este ejercicio está dividido en pasos y preguntas para que trabajes sobre el archivo **index.html** y escribas tu código en **script.js**.

1. **Fundamentos del DOM**
   - Preguntas teóricas sobre DOM, `window` vs `document`, nodos, propagación de eventos, almacenamiento, propiedades de texto (`innerText`, `textContent`, `innerHTML`) y atributos.
   
2. **Selección y Modificación de Elementos**
   - Cambiar textos y estilos de elementos usando JavaScript.

3. **Crear y Eliminar Elementos**
   - Agregar nuevos `<li>` y eliminarlos dinámicamente.

4. **Manejo de Eventos**
   - Clicks en botones, prevenir navegación de enlaces, delegación de eventos.

5. **Consumo de API**
   - Obtener y mostrar datos de usuarios desde una API.
   - Enviar datos usando `fetch()` con método POST.

6. **Almacenamiento en el Navegador**
   - Guardar preferencias (como el color de fondo) en `localStorage` y restaurarlas al recargar.

7. **Aplicación en tu Proyecto**
   - Aplicar cambios de DOM y eventos en tu formulario de clases anteriores.

8. **Multiple Choice**
   - Pregunta para validar conceptos aprendidos.

---

## 💡 Consejos para Resolver el Ejercicio

- Lee atentamente las instrucciones y comentarios del archivo `script.js`.
- Usá `console.log()` para inspeccionar elementos y valores.
- Probá en la consola del navegador cada parte antes de integrarla.
- Para manejar eventos, recuerda la diferencia entre **fase de captura** y **fase de burbuja**.
- Para manipular estilos, podés usar:
  ```js
  elemento.style.propiedad = "valor";
  elemento.classList.add("nombre-clase");
  ```

## Objetivos de Aprendizaje

- Comprender cómo el DOM representa una página web en memoria.
- Seleccionar y modificar elementos de forma dinámica.
- Crear, agregar y eliminar elementos HTML desde JavaScript.
- Manejar eventos en diferentes fases (captura y burbuja).
- Consumir y mostrar datos de APIs externas.
- Almacenar y recuperar información usando localStorage.
- Integrar manipulación de DOM en proyectos existentes.

## 🔁 Archivos Incluidos

- index.html → estructura base con lista de tareas, botones y formulario.
- styles.css → estilos básicos.
- script.js → archivo donde debes completar el ejercicio siguiendo los pasos.

## 🤝 Soporte

Si tenés dudas:

- Revisa la documentación enlazada.
- Consultame.
- Experimenta en la consola para ver el comportamiento en tiempo real.
