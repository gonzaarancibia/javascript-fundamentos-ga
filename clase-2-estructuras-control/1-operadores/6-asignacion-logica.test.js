// 6-asignacion-logica.test.js

// Este script verifica si has completado correctamente los ejercicios de operadores de asignación lógica

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '6-asignacion-logica.js');
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

// Función para verificar si una línea está descomentada
function verificarLineaDescomentada(codigo, lineaPatron) {
  const lineas = codigo.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].includes(lineaPatron) && !lineas[i].trim().startsWith('//')) {
      return true;
    }
  }
  return false;
}

// Función para verificar el uso del operador de asignación AND lógico
function verificarOperadorAND(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador &&= 
  const patronAND = new RegExp(`${nombreVariable}\\s*&&=\\s*[^;]+`, 'g');
  return patronAND.test(codigoLimpio);
}

// Función para verificar el uso del operador de asignación OR lógico
function verificarOperadorOR(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador ||=
  const patronOR = new RegExp(`${nombreVariable}\\s*\\|\\|=\\s*[^;]+`, 'g');
  return patronOR.test(codigoLimpio);
}

// Función para verificar el uso del operador de asignación de coalescencia nula
function verificarOperadorNullish(codigo, patron) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador ??=
  return new RegExp(patron).test(codigoLimpio);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 6-asignacion-logica.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 11;
  
  // 1. Operador de asignación AND lógico (&&=)
  // Paso 1: Verificar que se haya declarado la variable tienePermiso con un valor booleano
  if (verificarLineaDescomentada(codigo, 'let tienePermiso =') && 
      verificarUso(codigo, 'tienePermiso\\s*=\\s*(true|false)')) {
    console.log('✅ Paso 1: Variable tienePermiso declarada correctamente con un valor booleano');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Revisa la declaración de la variable tienePermiso.');
  }
  
  // Paso 2: Verificar que se haya usado el operador &&= para asignar "Acceso concedido"
  if (verificarOperadorAND(codigo, 'tienePermiso')) {
    console.log('✅ Paso 2: Uso correcto del operador &&=');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Revisa el uso del operador &&=');
  }
  
  // Paso 3: Verificar que se haya mostrado el resultado en consola
  if (verificarUso(codigo, 'console\\.log\\(.*tienePermiso')) {
    console.log('✅ Paso 3: Resultado mostrado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Revisa la salida del resultado.');
  }
  
  // Paso 4: Verificar que se haya usado el operador &&= con otroPermiso
  if (verificarOperadorAND(codigo, 'otroPermiso')) {
    console.log('✅ Paso 4: Uso correcto del operador &&= con otroPermiso');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Revisa el uso del operador &&= con otroPermiso');
  }
  
  // 2. Operador de asignación OR lógico (||=)
  // Paso 5: Verificar que se hayan declarado las variables nombre y nombrePredeterminado
  if (verificarLineaDescomentada(codigo, 'let nombre =') && 
      verificarLineaDescomentada(codigo, 'let nombrePredeterminado =')) {
    console.log('✅ Paso 5: Variables nombre y nombrePredeterminado declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Revisa la declaración de las variables nombre y nombrePredeterminado.');
  }
  
  // Paso 6: Verificar que se haya usado el operador ||= para asignar un valor predeterminado
  if (verificarOperadorOR(codigo, 'nombre')) {
    console.log('✅ Paso 6: Uso correcto del operador ||=');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Revisa el uso del operador ||=');
  }
  
  // Paso 7: Verificar que se haya mostrado el resultado en consola
  if (verificarUso(codigo, 'console\\.log\\(.*nombre')) {
    console.log('✅ Paso 7: Resultado mostrado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Revisa la salida del resultado.');
  }
  
  // Paso 8: Verificar que se haya usado el operador ||= con usuario
  if (verificarOperadorOR(codigo, 'usuario')) {
    console.log('✅ Paso 8: Uso correcto del operador ||= con usuario');
    aciertos++;
  } else {
    console.log('❌ Paso 8: Revisa el uso del operador ||= con usuario');
  }
  
  // 3. Operador de asignación de coalescencia nula (??=)
  // Paso 9: Verificar que se haya declarado el objeto config con las propiedades indicadas
  if (verificarLineaDescomentada(codigo, 'let config =') && 
      verificarUso(codigo, 'tema:\\s*"claro"') && 
      verificarUso(codigo, 'notificaciones:\\s*null') && 
      verificarUso(codigo, 'idioma:\\s*undefined')) {
    console.log('✅ Paso 9: Objeto config declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 9: Revisa la declaración del objeto config.');
  }
  
  // Paso 10: Verificar que se haya usado el operador ??= para asignar valores predeterminados
  if (verificarOperadorNullish(codigo, 'config\\.tema\\s*\\?\\?=\\s*"oscuro"') && 
      verificarOperadorNullish(codigo, 'config\\.notificaciones\\s*\\?\\?=\\s*true') && 
      verificarOperadorNullish(codigo, 'config\\.idioma\\s*\\?\\?=\\s*"español"') && 
      verificarOperadorNullish(codigo, 'config\\.nuevaPropiedad\\s*\\?\\?=\\s*"valor predeterminado"')) {
    console.log('✅ Paso 10: Uso correcto del operador ??=');
    aciertos++;
  } else {
    console.log('❌ Paso 10: Revisa el uso del operador ??=');
  }
  
  // Paso 11: Verificar que se haya mostrado el objeto resultante en consola
  if (verificarUso(codigo, 'console\\.log\\(.*config')) {
    console.log('✅ Paso 11: Objeto resultante mostrado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 11: Revisa la salida del objeto resultante.');
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