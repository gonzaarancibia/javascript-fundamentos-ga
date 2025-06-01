// 1-operadores-comparacion.test.js

// Este script verifica si has completado correctamente los ejercicios de operadores de comparación

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '1-operadores-comparacion.js');
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

// Función para verificar si un operador o método está siendo usado
function verificarUso(codigo, patron, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar el patrón en el código
  return new RegExp(patron).test(codigoLimpio);
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

// Función para verificar el uso exacto de un operador
function verificarOperadorExacto(codigo, nombreVariable, operador) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  const patronExacto = new RegExp(`${nombreVariable}\\s*=\\s*numero\\s*${operador}(?!${operador[0]})\\s*textoNumero|${nombreVariable}\\s*=\\s*textoNumero\\s*${operador}(?!${operador[0]})\\s*numero`, 'g');
  return patronExacto.test(codigoLimpio);
}

// Función para verificar la explicación correcta
function verificarExplicacionCorrecta(codigo, nombreVariable, textoEsperado) {
  const lineas = codigo.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].includes(`${nombreVariable} =`) && 
        !lineas[i].trim().startsWith('//') && 
        lineas[i].includes(textoEsperado)) {
      return true;
    }
  }
  return false;
}

// Función para verificar el uso exacto de un operador de comparación
function verificarOperadorComparacionExacto(codigo, nombreVariable, operador) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Usamos un patrón que verifica exactamente el operador deseado
  const patronExacto = new RegExp(`${nombreVariable}\\s*=\\s*miEdad\\s*${operador}(?!=|>|<)\\s*edadMinima|${nombreVariable}\\s*=\\s*edadMinima\\s*${operador.replace('<', '>').replace('>', '<')}(?!=|>|<)\\s*miEdad`, 'g');
  return patronExacto.test(codigoLimpio);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 1-operadores-comparacion.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 20;
  
  // 1. Comparación de igualdad (== vs ===)
  if (verificarVariable(codigo, 'numero') && verificarVariable(codigo, 'textoNumero')) {
    console.log('✅ Paso 1: Variables declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: No se encontraron las variables necesarias');
  }
  
  // Verificar que se use == y no ===
  if (verificarVariable(codigo, 'comparacionSimple') && verificarOperadorExacto(codigo, 'comparacionSimple', '==')) {
    console.log('✅ Paso 2: Comparación simple realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Revisa la comparación simple');
  }
  
  // Verificar que se use === y no ==
  if (verificarVariable(codigo, 'comparacionEstricta') && verificarOperadorExacto(codigo, 'comparacionEstricta', '===')) {
    console.log('✅ Paso 3: Comparación estricta realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Revisa la comparación estricta');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*comparacionSimple') && 
      verificarUso(codigo, 'console\\.log\\(.*comparacionEstricta')) {
    console.log('✅ Paso 4: Se mostraron los resultados de las comparaciones');
    aciertos++;
  } else {
    console.log('❌ Paso 4: No se mostraron los resultados de las comparaciones');
  }
  
  if (verificarOpcionDescomentada(codigo, 'explicacionIgualdadSimple =') && 
      verificarExplicacionCorrecta(codigo, 'explicacionIgualdadSimple', 'solo compara el valor, no el tipo de dato')) {
    console.log('✅ Paso 5: Se seleccionó la explicación correcta sobre igualdad simple');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Revisa la explicación seleccionada sobre igualdad simple');
  }
  
  // 2. Comparación de desigualdad (!= vs !==)
  if (verificarVariable(codigo, 'desigualdadSimple') && verificarOperadorExacto(codigo, 'desigualdadSimple', '!=')) {
    console.log('✅ Paso 6: Comparación de desigualdad simple realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Revisa la comparación de desigualdad simple');
  }
  
  if (verificarVariable(codigo, 'desigualdadEstricta') && verificarOperadorExacto(codigo, 'desigualdadEstricta', '!==')) {
    console.log('✅ Paso 7: Comparación de desigualdad estricta realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Revisa la comparación de desigualdad estricta');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*desigualdadSimple') && 
      verificarUso(codigo, 'console\\.log\\(.*desigualdadEstricta')) {
    console.log('✅ Paso 8: Se mostraron los resultados de las comparaciones de desigualdad');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se mostraron los resultados de las comparaciones de desigualdad');
  }
  
  if (verificarOpcionDescomentada(codigo, 'explicacionDesigualdadEstricta =') && 
      verificarExplicacionCorrecta(codigo, 'explicacionDesigualdadEstricta', 'compara tanto el valor como el tipo de dato')) {
    console.log('✅ Paso 9: Se seleccionó la explicación correcta sobre desigualdad estricta');
    aciertos++;
  } else {
    console.log('❌ Paso 9: Revisa la explicación seleccionada sobre desigualdad estricta');
  }
  
  // 3. Comparaciones mayor/menor que
  if (verificarVariable(codigo, 'miEdad') && verificarVariable(codigo, 'edadMinima')) {
    console.log('✅ Paso 10: Variables de edad declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 10: No se encontraron las variables de edad');
  }
  
  if (verificarVariable(codigo, 'puedoConducir') && verificarUso(codigo, 'miEdad.*>=.*edadMinima|edadMinima.*<=.*miEdad')) {
    console.log('✅ Paso 11: Verificación de edad mínima realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 11: Revisa la verificación de edad mínima');
  }
  
  if (verificarVariable(codigo, 'necesitoCumplirAnios') && verificarOperadorComparacionExacto(codigo, 'necesitoCumplirAnios', '<')) {
    console.log('✅ Paso 12: Verificación de edad pendiente realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 12: Revisa la verificación de edad pendiente');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*puedoConducir') && 
      verificarUso(codigo, 'console\\.log\\(.*necesitoCumplirAnios')) {
    console.log('✅ Paso 13: Se mostraron los resultados de las comparaciones de edad');
    aciertos++;
  } else {
    console.log('❌ Paso 13: No se mostraron los resultados de las comparaciones de edad');
  }
  
  if (verificarOpcionDescomentada(codigo, 'explicacionComparadores =') && 
      verificarExplicacionCorrecta(codigo, 'explicacionComparadores', 'mayor o igual que')) {
    console.log('✅ Paso 14: Se seleccionó la explicación correcta sobre operadores de comparación');
    aciertos++;
  } else {
    console.log('❌ Paso 14: Revisa la explicación seleccionada sobre operadores de comparación');
  }
  
  // 4. Aplicación práctica: Sistema de calificaciones
  if (verificarVariable(codigo, 'calificacion')) {
    console.log('✅ Paso 15: Variable de calificación declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 15: No se encontró la variable de calificación');
  }
  
  // Combinar las tres partes del paso 16 en una sola verificación
  if (verificarVariable(codigo, 'esAprobatoria') && 
      verificarUso(codigo, 'calificacion.*>=.*[0-9]|[0-9].*<=.*calificacion') &&
      verificarVariable(codigo, 'esPerfecta') && 
      verificarUso(codigo, 'calificacion.*===.*10|10.*===.*calificacion') &&
      verificarVariable(codigo, 'esInsuficiente') && 
      verificarUso(codigo, 'calificacion.*<.*[0-9]|[0-9].*>.*calificacion')) {
    console.log('✅ Paso 16: Variables de calificación declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 16: Revisa las variables de calificación');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*esAprobatoria') && 
      verificarUso(codigo, 'console\\.log\\(.*esPerfecta') &&
      verificarUso(codigo, 'console\\.log\\(.*esInsuficiente')) {
    console.log('✅ Paso 17: Se mostraron los resultados de las calificaciones');
    aciertos++;
  } else {
    console.log('❌ Paso 17: No se mostraron todos los resultados de las calificaciones');
  }
  
  if (verificarOpcionDescomentada(codigo, 'explicacionBooleanas =')) {
    // Verificar que la explicación seleccionada sea la correcta
    if (verificarExplicacionCorrecta(codigo, 'explicacionBooleanas', 'siempre devuelven un valor booleano')) {
      console.log('✅ Paso 18: Se seleccionó la explicación correcta sobre expresiones booleanas');
      aciertos++;
    } else {
      console.log('❌ Paso 18: Revisa la explicación seleccionada sobre expresiones booleanas');
    }
  } else {
    console.log('❌ Paso 18: No se seleccionó ninguna explicación sobre expresiones booleanas');
  }
  
  // 5. Desafío: Comparación de fechas
  if (verificarVariable(codigo, 'fechaActual') && verificarVariable(codigo, 'fechaFutura')) {
    console.log('✅ Paso 19: Variables de fechas declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 19: No se encontraron las variables de fechas');
  }
  
  if (verificarVariable(codigo, 'esAnterior') && verificarUso(codigo, 'fechaActual.*<.*fechaFutura|fechaFutura.*>.*fechaActual')) {
    console.log('✅ Paso 20: Comparación de fechas realizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 20: Revisa la comparación de fechas');
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