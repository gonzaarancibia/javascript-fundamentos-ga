# Clase 6 - Asincronismo y Promesas en JavaScript 🔄📦

¡Bienvenido a la sexta clase del curso de **Fundamentos de JavaScript**!  
En esta clase aprenderás los fundamentos del asincronismo en JavaScript: cómo el lenguaje maneja tareas asincrónicas, cómo funcionan las promesas, el método `fetch`, y cómo iterar sobre tareas asincrónicas con `for await...of`.

## 📺 Video de la Clase

Puedes ver la clase completa aquí: [Clase 6 - Asincronismo y Promesas en JavaScript](https://youtu.be/V1PKs5ABf0w?si=L9o1gmvnsJtJLQLo)


---

## 📚 Temas Principales

- **Event Loop, Call Stack y Task Queue**
- **El motor de JavaScript y cómo gestiona tareas**
- **Promesas:** creación, estados y métodos `.then()`, `.catch()`, `.finally()`
- **`fetch()`:** cómo hacer peticiones HTTP con métodos GET, POST, etc.
- **Iterar sobre Promesas:** `for await...of`, `Promise.all`, ejecución secuencial vs paralela

---

## 📖 Recursos Oficiales

- [MDN: Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [MDN: fetch()](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info: Promises](https://javascript.info/promise-basics)
- [JavaScript.info: Microtasks y el Event Loop](https://javascript.info/microtask-queue)
- [Visualizador del Event Loop](https://latentflip.com/loupe/)
- [MDN: async/await](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await)

---

## 🧪 Tests y Ejercicios

Cada ejercicio tiene su archivo y pruebas automatizadas. Para ejecutarlos:

1. **Instalá las dependencias:**
    ```bash
    npm install
    ```

2. **Ubicate en la carpeta de esta clase:**
    ```bash
    cd clase-6-asincronismo
    ```

3. **Ubicate en /tests y ejecutá los tests individualmente:**
   ```bash
    cd tests
    ```
    
    ```bash
    npm run test 1-event-loop.test.js
    npm run test 2-promesas.test.js
    npm run test 3-fetch.test.js
    npm run test 4-for-await-of.test.js
    ```

---

## 💡 Consejos para Resolver los Ejercicios

- Completá los archivos de ejercicios en orden.
- Leé atentamente las instrucciones y comentarios en el código.
- Usá `console.log()` para ver el comportamiento de tus funciones.
- Probá cada promesa en la consola de Node si lo necesitás.
- Revisá los tests y volvé a ejecutarlos para verificar si tu solución es correcta.
- Evitá copiar y pegar soluciones: ¡el objetivo es comprender cómo funciona!

---

## 🎯 Objetivos de Aprendizaje

- Comprender cómo funciona el Event Loop y su relación con el Call Stack y la Task Queue.
- Crear y manejar promesas correctamente.
- Usar `.then()`, `.catch()` y `.finally()` para controlar el flujo asincrónico.
- Hacer peticiones HTTP reales usando `fetch()`.
- Manejar múltiples tareas asincrónicas con `for await...of` y `Promise.all()`.
- Entender la diferencia entre ejecución secuencial y paralela de promesas.

---

## ❓ Preguntas Frecuentes

**¿Puedo modificar los tests?**  
No, los tests están diseñados para validar correctamente tus soluciones.

**¿Qué hago si un test falla?**  
Revisá el mensaje de error y verificá tu código línea por línea. Usá `console.log` para entender el flujo.

**¿Es obligatorio hacer todos los ejercicios?**  
Sí. Cada uno representa un concepto clave en asincronismo que necesitás dominar.

**¿Puedo usar ChatGPT o autocompletado?**  
Solo para mejorar el entendimiento, no para que te solucione los problemas, hacer copiar y pegar no es buena practica. Este módulo requiere práctica real y razonamiento paso a paso.

---

## 🔁 Archivos Incluidos

- `1-event-loop.js` → teoría sobre el Event Loop y Call Stack (con visual).
- `2-promesas.js` → estados de las promesas y manejo de errores.
- `3-fetch.js` → peticiones HTTP con fetch: GET, POST, headers, status codes.
- `4-for-await-of.js` → ejecución de promesas secuencial vs paralela.
- Archivos de tests para cada tema.

---

## 🤝 Soporte

Si tenés dudas:

- Releé la documentación y los ejemplos de clase.
- Consultá a Gonzalo si algo no te queda claro.
- Revisá los mensajes de error que te dan los tests.
