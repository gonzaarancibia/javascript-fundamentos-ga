// 3-switch.test.js
// Test para los ejercicios de switch

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './3-switch.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarDeclaracionVariable(codigo, nombre) {
  // Solo cuenta como declarada si la línea no está comentada y es let <nombre> =
  // Elimina comentarios de línea y bloque antes de buscar la declaración
  const codigoSinComentarios = codigo
    .replace(/\/\/.*$/gm, '') // comentarios de línea
    .replace(/\/\*[\s\S]*?\*\//g, ''); // comentarios de bloque
  const patron = new RegExp(`(^|\\n)\\s*let\\s+${nombre}\\s*=`, 'm');
  return patron.test(codigoSinComentarios);
}

function verificarSwitchDia(codigo) {
  // Debe haber un switch con la variable dia y los 7 casos y default
  return /switch\s*\(\s*dia\s*\)/.test(codigo) &&
    /case\s*1:/.test(codigo) &&
    /case\s*2:/.test(codigo) &&
    /case\s*3:/.test(codigo) &&
    /case\s*4:/.test(codigo) &&
    /case\s*5:/.test(codigo) &&
    /case\s*6:/.test(codigo) &&
    /case\s*7:/.test(codigo) &&
    /default:/.test(codigo);
}

function verificarSwitchColor(codigo) {
  return /switch\s*\(\s*color\s*\)/.test(codigo) &&
    /case\s*['\"]rojo['\"]:/.test(codigo) &&
    /case\s*['\"]azul['\"]:/.test(codigo) &&
    /case\s*['\"]verde['\"]:/.test(codigo) &&
    /default:/.test(codigo);
}

function obtenerFuncionCalificacionLetra() {
  const ruta = path.join(__dirname, './3-switch.js');
  const codigo = fs.readFileSync(ruta, 'utf8');
  const contexto = {};
  vm.createContext(contexto);
  vm.runInContext(codigo, contexto);
  return contexto.calificacionLetra;
}

function verificarFuncionCalificacionLetra(codigo) {
  // Debe haber una función calificacionLetra y un switch con los casos correctos
  return /function\s+calificacionLetra\s*\(/.test(codigo) &&
    /switch\s*\(\s*letra\s*\)/.test(codigo) &&
    /case\s*['\"]A['\"]:/.test(codigo) &&
    /case\s*['\"]B['\"]:/.test(codigo) &&
    /case\s*['\"]C['\"]:/.test(codigo) &&
    /case\s*['\"]D['\"]:/.test(codigo) &&
    /case\s*['\"]F['\"]:/.test(codigo) &&
    /default:/.test(codigo);
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 3-switch.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 6;

  // 1. Variable dia declarada
  if (verificarDeclaracionVariable(codigo, 'dia')) {
    console.log('✅ Paso 1: Variable "dia" declarada');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta declarar la variable "dia"');
  }

  // 2. Switch correcto para dia
  if (verificarSwitchDia(codigo)) {
    console.log('✅ Paso 2: Switch correcto para los días de la semana');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el switch para los días de la semana');
  }

  // 3. Variable color declarada
  if (verificarDeclaracionVariable(codigo, 'color')) {
    console.log('✅ Paso 3: Variable "color" declarada');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta declarar la variable "color"');
  }

  // 4. Switch correcto para color
  if (verificarSwitchColor(codigo)) {
    console.log('✅ Paso 4: Switch correcto para color');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta o es incorrecto el switch para color');
  }

  // 5. Función calificacionLetra declarada y con switch correcto
  if (verificarFuncionCalificacionLetra(codigo)) {
    console.log('✅ Paso 5: Función calificacionLetra declarada y con switch correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta o es incorrecta la función calificacionLetra');
  }

  // 6. La función retorna los valores correctos
  let funcion = obtenerFuncionCalificacionLetra();
  if (typeof funcion === 'function' &&
    funcion('A') === 'Excelente' &&
    funcion('B') === 'Muy bien' &&
    funcion('C') === 'Bien' &&
    funcion('D') === 'Suficiente' &&
    funcion('F') === 'Reprobado' &&
    funcion('Z') === 'Calificación inválida') {
    console.log('✅ Paso 6: La función calificacionLetra retorna los valores correctos');
    aciertos++;
  } else {
    console.log('❌ Paso 6: La función calificacionLetra no retorna los valores correctos');
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
