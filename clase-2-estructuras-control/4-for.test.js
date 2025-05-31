// 4-for.test.js
// Test para los ejercicios de bucle for

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './4-for.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarForBasico(codigo) {
  // Busca un for que imprima del 1 al 5
  return /for\s*\(\s*let\s+[a-zA-Z_$][\w$]*\s*=\s*1;[^{;]*<=\s*5;[^{;]*\+\+/.test(codigo);
}

function verificarForPares(codigo) {
  // Busca un for que imprima del 2 al 10 solo pares (i=2; i<=10; i+=2)
  // y que NO acepte for con i++
  // Elimina comentarios antes de buscar
  const codigoSinComentarios = codigo
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  // Solo acepta incremento de a 2
  return /for\s*\(\s*let\s+[a-zA-Z_$][\w$]*\s*=\s*2;[^;]*<=\s*10;[^;]*\+=\s*2/.test(codigoSinComentarios);
}

function verificarSumaFor(codigo) {
  // Busca una suma con for del 1 al 10
  return /let\s+suma\s*=\s*0/.test(codigo) && /for\s*\(.*<=\s*10/.test(codigo) && /suma\s*\+=/.test(codigo);
}

function verificarArrayFrutas(codigo) {
  // Busca la declaración de frutas como array
  return /let\s+frutas\s*=\s*\[.*\]/.test(codigo);
}

function verificarForFrutas(codigo) {
  // Busca un for que recorra frutas
  return /for\s*\(.*frutas\.length/.test(codigo);
}

function verificarBusquedaManzana(codigo) {
  // Busca un for que busque "manzana" y haga break
  return /for\s*\(.*frutas\.length/.test(codigo) && /if\s*\(.*frutas\[.*\]\s*===\s*["']manzana["']/.test(codigo) && /break/.test(codigo);
}

function verificarTabla7(codigo) {
  // Busca un for que imprima la tabla del 7
  return /for\s*\(.*<=\s*10/.test(codigo) && /console\.log\(\s*`?7\s*[xX]\s*\$?\{?\w+\}?\s*=\s*\$?\{?7\s*\*\s*\w+\}?`?/.test(codigo);
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 4-for.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 7;

  if (verificarForBasico(codigo)) {
    console.log('✅ Paso 1: Bucle for básico del 1 al 5 correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta o es incorrecto el bucle for del 1 al 5');
  }

  if (verificarForPares(codigo)) {
    console.log('✅ Paso 2: Bucle for de pares del 2 al 10 correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el bucle for de pares del 2 al 10');
  }

  if (verificarSumaFor(codigo)) {
    console.log('✅ Paso 3: Suma de números del 1 al 10 con for correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta o es incorrecta la suma de números del 1 al 10 con for');
  }

  if (verificarArrayFrutas(codigo)) {
    console.log('✅ Paso 4: Array frutas declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta declarar el array frutas');
  }

  if (verificarForFrutas(codigo)) {
    console.log('✅ Paso 5: Bucle for para recorrer frutas correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta o es incorrecto el bucle for para recorrer frutas');
  }

  if (verificarBusquedaManzana(codigo)) {
    console.log('✅ Paso 6: Búsqueda de "manzana" en frutas correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Falta o es incorrecta la búsqueda de "manzana" en frutas');
  }

  if (verificarTabla7(codigo)) {
    console.log('✅ Paso 7: Tabla de multiplicar del 7 correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Falta o es incorrecta la tabla de multiplicar del 7');
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
