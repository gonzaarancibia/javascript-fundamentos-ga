// 1-funciones.test.js
// Test para los ejercicios de funciones (clase 3)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './1-funciones.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarVariableConValor(codigo, nombre, valor) {
  // Busca la declaración de la variable con el valor específico
  const regex = new RegExp(`let\\s+${nombre}\\s*=\\s*["']${valor}["']`, 'i');
  return regex.test(codigo);
}

function verificarFuncionDeclarada(codigo, nombre) {
  // Busca function <nombre>() con espacios flexibles
  const regex = new RegExp(`function\\s+${nombre}\\s*\\([^)]*\\)\\s*{`);
  return regex.test(codigo.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, ''));
}

function verificarFuncionExpresion(codigo, nombre) {
  // Busca asignación de función a una variable
  const regex = new RegExp(`(let|const|var)\\s+${nombre}\\s*=\\s*function\\s*\\([^)]*\\)`);
  return regex.test(codigo.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, ''));
}

function verificarArrowFunction(codigo, nombre) {
  // Busca arrow functions
  const regex = new RegExp(`(let|const|var)\\s+${nombre}\\s*=\\s*\\(?[^)]*\\)?\\s*=>`);
  return regex.test(codigo.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, ''));
}

function obtenerContexto() {
  const ruta = path.join(__dirname, './1-funciones.js');
  const codigo = fs.readFileSync(ruta, 'utf8');
  
  // Crear un contexto seguro para ejecutar el código
  const contexto = {
    console: {
      log: (...args) => {},
      error: (...args) => {}
    },
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    __dirname: __dirname,
    require: require,
    process: process,
    Buffer: Buffer,
    Error: Error,
    global: global
  };
  
  try {
    const script = new vm.Script(codigo);
    const context = vm.createContext(contexto);
    script.runInContext(context);
    return context;
  } catch (error) {
    console.error('Error al ejecutar el código:', error.message);
    return contexto;
  }
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 1-funciones.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 10; // Total de pasos en el ejercicio
  const contexto = obtenerContexto();

  // Paso 1: Verificar respuesta teórica correcta
  if (contexto.respuestaTeoria1 === "B" || verificarVariableConValor(codigo, 'respuestaTeoria1', 'B')) {
    console.log('✅ Paso 1: Opción correcta de teoría seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta seleccionar la opción correcta de teoría (respuestaTeoria1)');
  }

  // Paso 2: Verificar función saludar declarada
  if (verificarFuncionDeclarada(codigo, 'saludar')) {
    console.log('✅ Paso 2: Función saludar declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta declarar la función saludar');
  }

  // Paso 3: Verificar que se llama a la función saludar
  if (codigo.includes('saludar();')) {
    console.log('✅ Paso 3: Función saludar llamada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta llamar a la función saludar');
  }

  // Paso 4: Verificar función sumar declarada
  if (verificarFuncionDeclarada(codigo, 'sumar')) {
    console.log('✅ Paso 4: Función sumar declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta declarar la función sumar');
  }

  // Paso 5: Verificar que se muestra el resultado de sumar
  if (codigo.includes('console.log(sumar(3, 7))')) {
    console.log('✅ Paso 5: Se muestra el resultado de sumar correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta mostrar el resultado de sumar');
  }

  // Paso 6: Verificar respuesta teórica sobre return
  if (contexto.respuestaTeoria2 === "A") {
    console.log('✅ Paso 6: Opción correcta sobre return seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Falta seleccionar la opción correcta sobre return (respuestaTeoria2)');
  }

  // Paso 7: Verificar función expresión multiplicar
  if (verificarFuncionExpresion(codigo, 'multiplicar')) {
    console.log('✅ Paso 7: Función expresión multiplicar declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Falta declarar la función expresión multiplicar');
  }

  // Paso 8: Verificar que se muestra el resultado de multiplicar
  if (codigo.includes('console.log(multiplicar(4, 5))')) {
    console.log('✅ Paso 8: Se muestra el resultado de multiplicar correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 8: Falta mostrar el resultado de multiplicar');
  }

  // Paso 9: Verificar arrow function restar
  if (verificarArrowFunction(codigo, 'restar')) {
    console.log('✅ Paso 9: Arrow function restar declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 9: Falta declarar la arrow function restar');
  }

  // Paso 10: Verificar que se muestra el resultado de restar
  if (codigo.includes('console.log(restar(10, 6))')) {
    console.log('✅ Paso 10: Se muestra el resultado de restar correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 10: Falta mostrar el resultado de restar');
  }

  // Resultado final
  console.log(`\n🏆 Resultado: ${aciertos}/${total} ejercicios completados correctamente`);
  if (aciertos === total) {
    console.log('🎉 ¡Felicitaciones! Has completado todos los ejercicios correctamente.');
  } else if (aciertos >= total * 0.7) {
    console.log('👍 ¡Buen trabajo! Has completado la mayoría de los ejercicios. Revisá los que faltan.');
  } else {
    console.log('💪 Seguí practicando. Revisá los ejercicios marcados con ❌ y volvé a intentarlo.');
  }
}

ejecutarPruebas();
