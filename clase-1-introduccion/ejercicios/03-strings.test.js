// 03-strings.test.js

// Este script verifica si has completado correctamente los ejercicios de strings

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '03-strings.js');
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

// Función para verificar si un método está siendo usado
function verificarMetodo(codigo, metodo, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar uso del método
  const patron = new RegExp(`\\.${metodo}\\(`, 'g');
  return patron.test(codigoLimpio);
}

// Función para verificar si un operador o función está siendo usado
function verificarUso(codigo, patron, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar el patrón en el código
  return new RegExp(patron).test(codigoLimpio);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 03-strings.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 13;
  
  // Verificar variables básicas
  if (verificarVariable(codigo, 'nombre')) {
    console.log('✅ Paso 1 (parte 1): Variable "nombre" declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1 (parte 1): No se encontró la variable "nombre"');
  }
  
  if (verificarVariable(codigo, 'apellido')) {
    console.log('✅ Paso 1 (parte 2): Variable "apellido" declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1 (parte 2): No se encontró la variable "apellido"');
  }
  
  // Verificar concatenación con +
  if (verificarVariable(codigo, 'nombreCompleto') && verificarUso(codigo, 'nombre\\s*\\+')) {
    console.log('✅ Paso 2: Se concatenaron las variables usando el operador +');
    aciertos++;
  } else {
    console.log('❌ Paso 2: No se encontró la concatenación con el operador +');
  }
  
  // Verificar template literals
  if (verificarVariable(codigo, 'nombreCompleto2') && verificarUso(codigo, '`.*\\$\\{.*\\}.*`')) {
    console.log('✅ Paso 3: Se usaron template literals correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se encontró el uso de template literals');
  }
  
  // Verificar uso de .length
  if (verificarUso(codigo, '\\.length')) {
    console.log('✅ Paso 4: Se usó la propiedad .length correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: No se encontró el uso de la propiedad correctamente');
  }
  
  // Verificar métodos de transformación
  if (verificarMetodo(codigo, 'toUpperCase')) {
    console.log('✅ Paso 5: Se usó el método correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: No se encontró el uso del método correctamente');
  }
  
  if (verificarMetodo(codigo, 'toLowerCase')) {
    console.log('✅ Paso 6: Se usó el método correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se encontró el uso del método');
  }
  
  if (verificarMetodo(codigo, 'substring') || verificarMetodo(codigo, 'slice') || verificarMetodo(codigo, 'substr')) {
    console.log('✅ Paso 7: Se usó un método para obtener los primeros caracteres');
    aciertos++;
  } else {
    console.log('❌ Paso 7: No se encontró el uso del metodo');
  }
  
  if (verificarMetodo(codigo, 'replace') || verificarMetodo(codigo, 'replaceAll')) {
    console.log('✅ Paso 8: Se usó un método para reemplazar caracteres');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se encontró el uso del metodo');
  }
  
  if (verificarMetodo(codigo, 'trim')) {
    console.log('✅ Paso 9: Se usó el método correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 9: No se encontró el uso del método');
  }
  
  if (verificarMetodo(codigo, 'split')) {
    console.log('✅ Paso 10: Se usó el método correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 10: No se encontró el uso del método');
  }
  
  // Verificar métodos de búsqueda
  if (verificarMetodo(codigo, 'includes') || verificarMetodo(codigo, 'indexOf') || verificarMetodo(codigo, 'search')) {
    // Verificar que se está usando correctamente (nombreCompleto.includes(apellido) y no al revés)
    const patronCorrecto = new RegExp('nombreCompleto\\s*\\.\\s*(includes|indexOf|search)\\s*\\(\\s*apellido\\s*\\)', 'g');
    const patronIncorrecto = new RegExp('apellido\\s*\\.\\s*(includes|indexOf|search)\\s*\\(\\s*nombreCompleto\\s*\\)', 'g');
    
    const usoCorrecto = patronCorrecto.test(codigo.replace(/\/\/.*$/gm, ''));
    const usoIncorrecto = patronIncorrecto.test(codigo.replace(/\/\/.*$/gm, ''));
    
    if (usoCorrecto && !usoIncorrecto) {
      console.log('✅ Paso 11: Se usó un método para verificar si un string incluye otro correctamente');
      aciertos++;
    } else if (usoIncorrecto) {
      console.log('❌ Paso 11: El método de búsqueda está invertido. Debe verificar si "apellido" está en "nombreCompleto", no al revés');
    } else {
      console.log('❌ Paso 11: No se encontró el uso correcto del método de búsqueda');
    }
  } else {
    console.log('❌ Paso 11: No se encontró el uso del metodo de búsqueda');
  }
  
  // Verificar desafío extra (opcional)
  if (verificarUso(codigo, 'function\\s+capitalizar')) {
    console.log('✅ Desafío extra: Se implementó la función capitalizar()');
    aciertos++;
  } else {
    console.log('⚠️ Desafío extra (opcional): No se implementó la función capitalizar()');
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