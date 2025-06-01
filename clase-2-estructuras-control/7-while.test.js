// 7-while.test.js
// Test para los ejercicios de while y do...while

const fs = require('fs');
const path = require('path');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './7-while.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarWhileBasico(codigo) {
  // Busca un while que imprima del 1 al 5
  return /let\s+\w+\s*=\s*1/.test(codigo) && /while\s*\([^{;]*<=\s*5/.test(codigo) && /console\.log\(/.test(codigo);
}

function verificarWhilePares(codigo) {
  // Busca exactamente la secuencia esperada para el paso 2
  // let par = 2;\nwhile (par <= 10) {\n  console.log(par);\n  par += 2;\n}
  const patron = /let\s+par\s*=\s*2\s*;\s*while\s*\(\s*par\s*<=\s*10\s*\)\s*{[^}]*console\.log\(\s*par\s*\)[^}]*par\s*\+=\s*2\s*;[^}]*}/s;
  return patron.test(codigo);
}

function verificarSumaWhile(codigo) {
  // Busca una suma con while del 1 al 10
  return /let\s+suma\s*=\s*0/.test(codigo) && /while\s*\([^{;]*<=\s*10/.test(codigo) && /suma\s*\+=/.test(codigo);
}

function verificarDoWhileBasico(codigo) {
  // Busca un do...while que imprima del 1 al 5
  return /do\s*{[^}]*console\.log\(/s.test(codigo) && /while\s*\([^{;]*<=\s*5/.test(codigo);
}

function verificarLimiteDoWhile(codigo) {
  // Busca declaración de limite y un do...while que imprima hasta limite
  return /let\s+limite\s*=\s*\d+/.test(codigo) && /do\s*{[^}]*console\.log\(/s.test(codigo) && /while\s*\([^{;]*<=?\s*limite/.test(codigo);
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 7-while.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 5;

  if (verificarWhileBasico(codigo)) {
    console.log('✅ Paso 1: Bucle while básico del 1 al 5 correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta o es incorrecto el bucle while del 1 al 5');
  }

  if (verificarWhilePares(codigo)) {
    console.log('✅ Paso 2: Bucle while de pares del 2 al 10 correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el bucle while de pares del 2 al 10');
  }

  if (verificarSumaWhile(codigo)) {
    console.log('✅ Paso 3: Suma de números del 1 al 10 con while correcta');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta o es incorrecta la suma de números del 1 al 10 con while');
  }

  if (verificarDoWhileBasico(codigo)) {
    console.log('✅ Paso 4: Bucle do...while básico del 1 al 5 correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta o es incorrecto el bucle do...while del 1 al 5');
  }

  if (verificarLimiteDoWhile(codigo)) {
    console.log('✅ Paso 5: Bucle do...while hasta el límite correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta o es incorrecto el bucle do...while hasta el límite');
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
