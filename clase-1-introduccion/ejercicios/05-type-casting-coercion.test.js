// 05-type-casting-coercion.test.js

// Este script verifica si has completado correctamente los ejercicios de type casting y coercion

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '05-type-casting-coercion.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

// Función para verificar si una variable está declarada en el código
function verificarVariable(codigo, nombreVariable, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar declaraciones de variables (let, const, var)
  const patron = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=`, 'g');
  return patron.test(codigoLimpio);
}

// Función para verificar si un método o función está siendo usado
function verificarUso(codigo, patron, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar el patrón en el código
  return new RegExp(patron).test(codigoLimpio);
}

// Función para verificar si una variable usa una función específica
function verificarVariableUsaFuncion(codigo, nombreVariable, nombreFuncion, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar asignaciones que usen la función
  const patron = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*${nombreFuncion}\\(`, 'g');
  return patron.test(codigoLimpio);
}

// Función para verificar si una opción está descomentada
function verificarOpcionDescomentada(codigo, lineaPatron) {
  const lineas = codigo.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].includes(lineaPatron) && !lineas[i].trim().startsWith('//')) {
      return true;
    }
  }
  return false;
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 05-type-casting-coercion.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 14;
  
  // Verificar variables básicas de casting
  if (verificarVariable(codigo, 'numero') && verificarVariable(codigo, 'numeroComoTexto') && 
      verificarVariableUsaFuncion(codigo, 'numeroComoTexto', 'String')) {
    console.log('✅ Paso 1: Conversión de tipo realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: La conversión de tipo no es correcta');
  }
  
  if (verificarVariable(codigo, 'texto') && verificarVariable(codigo, 'textoComoNumero') && 
      verificarVariableUsaFuncion(codigo, 'textoComoNumero', 'Number')) {
    console.log('✅ Paso 2: Conversión de tipo realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 2: La conversión de tipo no es correcta');
  }
  
  if (verificarUso(codigo, 'typeof')) {
    console.log('✅ Paso 3: Verificación de tipos realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se verificaron los tipos correctamente');
  }
  
  if (verificarVariable(codigo, 'textoInvalido') && verificarVariable(codigo, 'resultado') && 
      verificarVariableUsaFuncion(codigo, 'resultado', 'Number')) {
    console.log('✅ Paso 4: Conversión de tipo realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: La conversión de tipo no es correcta');
  }
  
  if (verificarVariable(codigo, 'valorBooleano') && verificarVariable(codigo, 'valorComoNumero') && 
      verificarVariableUsaFuncion(codigo, 'valorComoNumero', 'Number')) {
    console.log('✅ Paso 5: Conversión de tipo realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: La conversión de tipo no es correcta');
  }
  
  if (verificarVariable(codigo, 'valorNulo') && verificarVariable(codigo, 'nuloComomNumero') && 
      verificarVariableUsaFuncion(codigo, 'nuloComomNumero', 'Number')) {
    console.log('✅ Paso 6: Conversión de tipo realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 6: La conversión de tipo no es correcta');
  }
  
  // Verificar coercion
  const operacionesCoercion = [
    '"5" \\+ 2',
    '"5" - 2',
    'true \\+ 1',
    'false \\+ "3"',
    'null \\+ 1',
    'undefined \\+ 1'
  ];
  
  let operacionesDescomentadas = 0;
  for (const op of operacionesCoercion) {
    if (verificarUso(codigo, op)) {
      operacionesDescomentadas++;
    }
  }
  
  if (operacionesDescomentadas >= 3) {
    console.log('✅ Paso 7: Operaciones de coerción analizadas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Faltan operaciones de coerción por analizar');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const resultado1 = "105"')) {
    console.log('✅ Paso 8: Respuesta correcta seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 8: La respuesta seleccionada no es correcta');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const resultado2 = 5')) {
    console.log('✅ Paso 9: Respuesta correcta seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 9: La respuesta seleccionada no es correcta');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const resultado3 = NaN')) {
    console.log('✅ Paso 10: Respuesta correcta seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 10: La respuesta seleccionada no es correcta');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const resultado4 = false')) {
    console.log('✅ Paso 11: Respuesta correcta seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 11: La respuesta seleccionada no es correcta');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const resultado5 = true')) {
    console.log('✅ Paso 12: Respuesta correcta seleccionada');
    aciertos++;
  } else {
    console.log('❌ Paso 12: La respuesta seleccionada no es correcta');
  }
  
  // Verificar casos especiales
  let casosEspecialesFalse = 0;
  const patronesFalse = [
    'Boolean\\(""\\)',
    'Boolean\\(0\\)',
    'Boolean\\(null\\)',
    'Boolean\\(undefined\\)',
    'Boolean\\(NaN\\)'
  ];
  
  for (const patron of patronesFalse) {
    if (verificarUso(codigo, patron)) {
      casosEspecialesFalse++;
    }
  }
  
  if (casosEspecialesFalse >= 3) {
    console.log('✅ Paso 13: Casos especiales analizados correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 13: Faltan casos especiales por analizar');
  }
  
  let casosEspecialesTrue = 0;
  const patronesTrue = [
    'Boolean\\("hola"\\)',
    'Boolean\\(42\\)',
    'Boolean\\(\\[\\]\\)',
    'Boolean\\(\\{\\}\\)',
    'Boolean\\(function\\(\\)\\{\\}\\)'
  ];
  
  for (const patron of patronesTrue) {
    if (verificarUso(codigo, patron)) {
      casosEspecialesTrue++;
    }
  }
  
  if (casosEspecialesTrue >= 3) {
    console.log('✅ Paso 14: Casos especiales analizados correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 14: Faltan casos especiales por analizar');
  }
  
  // Mostrar resultado final
  console.log(`\n🏆 Resultado: ${aciertos}/${totalPruebas} ejercicios completados correctamente`);
  
  if (aciertos === totalPruebas) {
    console.log('🎉 ¡Felicitaciones! Has completado todos los ejercicios correctamente.');
  } else if (aciertos >= totalPruebas * 0.7) {
    console.log('👍 ¡Buen trabajo! Has completado la mayoría de los ejercicios. Revisá los que faltan.');
  } else {
    console.log('💪 Seguí practicando. Revisá los ejercicios marcados con ❌ y volvé a intentarlo.');
  }
}

// Ejecutar las pruebas
ejecutarPruebas();