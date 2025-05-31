// 5-for-of.test.js
// Test para los ejercicios de for...of

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './5-for-of.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarDeclaracionArray(codigo, nombre) {
  // Busca la declaración de un array
  return new RegExp(`let\\s+${nombre}\\s*=\\s*\\[.*\\]`).test(codigo);
}

function verificarForOfArray(codigo, nombre) {
  // Busca un for...of sobre el array y que el console.log muestre la variable de iteración, no un string fijo
  // Elimina comentarios antes de buscar
  const codigoSinComentarios = codigo
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  // Busca el for...of y que el console.log muestre la variable de iteración
  // Ejemplo: for (let animal of animales) { console.log(animal); }
  const forOfMatch = codigoSinComentarios.match(new RegExp('for\\s*\\(\\s*let\\s+(\\w+)\\s+of\\s+' + nombre + '\\s*\\)[^{]*{([^}]*)}'));
  if (!forOfMatch) return false;
  const variable = forOfMatch[1];
  const cuerpo = forOfMatch[2];
  // Debe haber un console.log(variable) en el cuerpo
  const patronLog = new RegExp(`console\\.log\\(\\s*${variable}\\s*\\)`);
  return patronLog.test(cuerpo);
}

function verificarDeclaracionString(codigo, nombre) {
  // Busca la declaración de un string
  return new RegExp(`let\\s+${nombre}\\s*=\\s*['\"].{5,}['\"]`).test(codigo);
}

function verificarForOfString(codigo, nombre) {
  // Busca un for...of sobre el string y que el console.log muestre la variable de iteración, no un string fijo
  // Elimina comentarios antes de buscar
  const codigoSinComentarios = codigo
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  // Busca el for...of y que el console.log muestre la variable de iteración
  // Ejemplo: for (let letra of palabra) { console.log(letra); }
  const forOfMatch = codigoSinComentarios.match(/for\s*\(\s*let\s+(\w+)\s+of\s+palabra\s*\)[^{]*{([^}]*)}/);
  if (!forOfMatch) return false;
  const variable = forOfMatch[1];
  const cuerpo = forOfMatch[2];
  // Debe haber un console.log(variable) en el cuerpo
  const patronLog = new RegExp(`console\\.log\\(\\s*${variable}\\s*\\)`);
  return patronLog.test(cuerpo);
}

function verificarDeclaracionNumeros(codigo) {
  return /let\s+numeros\s*=\s*\[.*\]/.test(codigo);
}

function verificarSumaForOf(codigo) {
  // Busca una suma con for...of sobre numeros
  return /for\s*\(\s*let\s+\w+\s+of\s+numeros\s*\)/.test(codigo) && /suma\s*\+=/.test(codigo);
}

function verificarBusquedaGato(codigo) {
  // Busca un for...of sobre animales y break si encuentra "gato" y que el console.log NO esté comentado
  // Elimina comentarios de línea y bloque antes de buscar el for y el break
  const codigoSinComentarios = codigo
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  // Busca el for...of, el if, el break y el console.log activo
  return /for\s*\(\s*let\s+\w+\s+of\s+animales\s*\)/.test(codigoSinComentarios) &&
    /if\s*\(.*===\s*["']gato["']/.test(codigoSinComentarios) &&
    /console\.log\(\s*['"]¡Gato encontrado!['"]\s*\)/.test(codigoSinComentarios) &&
    /break/.test(codigoSinComentarios);
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 5-for-of.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 7;

  if (verificarDeclaracionArray(codigo, 'animales')) {
    console.log('✅ Paso 1: Array animales declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta declarar el array animales');
  }

  if (verificarForOfArray(codigo, 'animales')) {
    console.log('✅ Paso 2: for...of para mostrar animales correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el for...of para mostrar animales');
  }

  if (verificarDeclaracionString(codigo, 'palabra')) {
    console.log('✅ Paso 3: String palabra declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta declarar la variable palabra con al menos 5 letras');
  }

  if (verificarForOfString(codigo, 'palabra')) {
    console.log('✅ Paso 4: for...of para mostrar letras de palabra correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta o es incorrecto el for...of para mostrar letras de palabra');
  }

  if (verificarDeclaracionNumeros(codigo)) {
    console.log('✅ Paso 5: Array numeros declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta declarar el array numeros');
  }

  if (verificarSumaForOf(codigo)) {
    console.log('✅ Paso 6: Suma de números con for...of correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Falta o es incorrecta la suma de números con for...of');
  }

  if (verificarBusquedaGato(codigo)) {
    console.log('✅ Paso 7: Búsqueda de "gato" en animales correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Falta o es incorrecta la búsqueda de "gato" en animales');
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
