// 2-condicionales.test.js
// Test para los ejercicios de condicionales

const fs = require('fs');
const path = require('path');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './2-condicionales.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarDeclaracionVariable(codigo, nombre) {
  // Solo cuenta como declarada si la línea no está comentada
  const patron = new RegExp(`^\\s*let\\s+${nombre}\\s*=`, 'm');
  return patron.test(codigo);
}

function verificarUsoIfElse(codigo, condicion, mensaje) {
  const patron = new RegExp(`if\\s*\\(${condicion}\\)\\s*{[^}]*console\\.log\\(\\s*['\"]${mensaje}['\"]`, 's');
  return patron.test(codigo);
}

function verificarUsoElseIf(codigo, condicion, mensaje) {
  const patron = new RegExp(`else\\s+if\\s*\\(${condicion}\\)\\s*{[^}]*console\\.log\\(\\s*['\"]${mensaje}['\"]`, 's');
  return patron.test(codigo);
}

function verificarUsoElse(codigo, mensaje) {
  const patron = new RegExp(`else\\s*{[^}]*console\\.log\\(\\s*['\"]${mensaje}['\"]`, 's');
  return patron.test(codigo);
}

function verificarFuncionAcceso(codigo) {
  return /function\s+verificarAcceso\s*\(/.test(codigo);
}

function verificarFuncionAccesoCompleta(codigo) {
  // Debe tener los tres returns correctos
  const tieneAdmin = /if\s*\(\s*usuario\s*===\s*["']admin["']\s*\)\s*{[^}]*return\s*["']Acceso total["']/.test(codigo);
  const tieneEditor = /else\s*if\s*\(\s*usuario\s*===\s*["']editor["']\s*\)\s*{[^}]*return\s*["']Acceso limitado["']/.test(codigo);
  const tieneVisitante = /else\s*{[^}]*return\s*["']Acceso restringido["']/.test(codigo);
  return tieneAdmin && tieneEditor && tieneVisitante;
}

function obtenerFuncionAcceso() {
  // Ejecuta el código del archivo en un contexto aislado y obtiene la función
  const vm = require('vm');
  const fs = require('fs');
  const path = require('path');
  const ruta = path.join(__dirname, './2-condicionales.js');
  const codigo = fs.readFileSync(ruta, 'utf8');
  const contexto = {};
  vm.createContext(contexto);
  vm.runInContext(codigo, contexto);
  return contexto.verificarAcceso;
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 2-condicionales.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 7;

  // 1. Variable edad declarada
  if (verificarDeclaracionVariable(codigo, 'edad')) {
    console.log('✅ Paso 1: Variable "edad" declarada');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta declarar la variable "edad"');
  }

  // 2. Uso de if para mayor de edad
  if (verificarUsoIfElse(codigo, 'edad >= 18', 'Es mayor de edad')) {
    console.log('✅ Paso 2: Uso correcto de if para mayor de edad');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el if para mayor de edad');
  }

  // 3. Uso de if/else para menor/mayor de edad
  if (verificarUsoIfElse(codigo, 'edad < 18', 'Es menor de edad') && verificarUsoElse(codigo, 'Es mayor de edad')) {
    console.log('✅ Paso 3: Uso correcto de if/else para menor/mayor de edad');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta o es incorrecto el if/else para menor/mayor de edad');
  }

  // 4. Variable nota declarada
  if (verificarDeclaracionVariable(codigo, 'nota')) {
    console.log('✅ Paso 4: Variable "nota" declarada');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta declarar la variable "nota"');
  }

  // 5. Uso de if/else if/else para calificación
  if (
    verificarUsoIfElse(codigo, 'nota >= 90', 'Excelente') &&
    verificarUsoElseIf(codigo, 'nota >= 70', 'Bueno') &&
    verificarUsoElse(codigo, 'Necesita mejorar')
  ) {
    console.log('✅ Paso 5: Uso correcto de if/else if/else para calificación');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta o es incorrecto el if/else if/else para calificación');
  }

  // 6. Función verificarAcceso declarada y completa
  if (verificarFuncionAcceso(codigo) && verificarFuncionAccesoCompleta(codigo)) {
    console.log('✅ Paso 6: Función verificarAcceso declarada y completa');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Falta declarar la función verificarAcceso o está incompleta');
  }

  // 7. La función retorna los valores correctos
  let funcion = obtenerFuncionAcceso();
  if (typeof funcion === 'function' &&
    funcion('admin') === 'Acceso total' &&
    funcion('editor') === 'Acceso limitado' &&
    funcion('visitante') === 'Acceso restringido') {
    console.log('✅ Paso 7: La función verificarAcceso retorna los valores correctos');
    aciertos++;
  } else {
    console.log('❌ Paso 7: La función verificarAcceso no retorna los valores correctos');
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
