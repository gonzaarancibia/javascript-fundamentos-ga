// 4-typeof.test.js

// Este script verifica si has completado correctamente los ejercicios de typeof

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '4-typeof.js');
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
  // Modificado para detectar variables sin asignación explícita
  const patron = new RegExp(`(let|const|var)\\s+${nombreVariable}(\\s*=|\\s*;|\\s*$)`, 'g');
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

// Función para verificar si hay comentarios entre dos secciones
function verificarComentariosEntreSecciones(codigo, seccionInicio, seccionFin) {
  const lineas = codigo.split('\n');
  let enSeccion = false;
  let hayComentarios = false;
  
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    
    // Detectar inicio de sección
    if (!enSeccion && linea.includes(seccionInicio)) {
      enSeccion = true;
      continue;
    }
    
    // Detectar fin de sección
    if (enSeccion && (linea.includes(seccionFin) || linea.startsWith('//--'))) {
      break;
    }
    
    // Verificar si hay comentarios en la sección
    if (enSeccion && linea.startsWith('//') && !linea.startsWith('// 👉') && linea.length > 20) {
      hayComentarios = true;
    }
  }
  
  return hayComentarios;
}

// Función para verificar si una línea específica está descomentada
function verificarLineaEspecificaDescomentada(codigo, lineaPatron) {
  const lineas = codigo.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    if (linea.includes(lineaPatron) && !linea.startsWith('//')) {
      return true;
    }
  }
  return false;
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 4-typeof.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 6;
  
  // 1. Operador typeof
  // Paso 1: Verificar que se hayan declarado las variables de diferentes tipos
  const variablesRequeridas = ['nombre', 'edad', 'esEstudiante', 'hobbies', 'persona', 'sinValor', 'nulo', 'funcionSaludar'];
  const variablesDeclaradas = variablesRequeridas.filter(variable => verificarVariable(codigo, variable));
  
  if (variablesDeclaradas.length === variablesRequeridas.length) {
    console.log('✅ Paso 1: Todas las variables de diferentes tipos han sido declaradas correctamente');
    aciertos++;
  } else {
    const faltantes = variablesRequeridas.filter(variable => !variablesDeclaradas.includes(variable));
    console.log(`❌ Paso 1: Faltan declarar las siguientes variables: ${faltantes.join(', ')}`);
  }
  
  // Paso 2: Verificar que se haya usado typeof para cada variable
  const typeofUsos = variablesRequeridas.filter(variable => 
    verificarUso(codigo, `console\\.log\\(typeof\\s+${variable}\\)`) || 
    verificarUso(codigo, `console\\.log\\(typeof\\(${variable}\\)\\)`)
  );
  
  if (typeofUsos.length === variablesRequeridas.length) {
    console.log('✅ Paso 2: Se ha usado typeof para verificar el tipo de todas las variables');
    aciertos++;
  } else {
    const faltantes = variablesRequeridas.filter(variable => !typeofUsos.includes(variable));
    console.log(`❌ Paso 2: Falta usar typeof para las siguientes variables: ${faltantes.join(', ')}`);
  }
  
  // Paso 3: Verificar que haya un comentario analizando los resultados
  if (verificarComentariosEntreSecciones(codigo, "// 👉 Paso 3:", "//--------------------------------------------------")) {
    console.log('✅ Paso 3: Se ha añadido un comentario analizando los resultados de typeof');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se ha añadido un comentario analizando los resultados de typeof. Deberías comentar sobre los resultados obtenidos.');
  }
  
  // 2. Limitaciones de typeof
  // Paso 4: Verificar que se haya usado typeof con arrays y objetos en la sección específica
  const lineaHobbies = 'console.log("Tipo de hobbies:", typeof hobbies)';
  const lineaPersona = 'console.log("Tipo de persona:", typeof persona)';
  
  if (verificarLineaEspecificaDescomentada(codigo, lineaHobbies)) {
    if (verificarLineaEspecificaDescomentada(codigo, lineaPersona)) {
      console.log('✅ Paso 4: Se ha verificado el tipo de arrays y objetos con typeof');
      aciertos++;
    } else {
      console.log('❌ Paso 4: No se ha verificado el tipo del objeto "persona" con typeof');
    }
  } else {
    console.log('❌ Paso 4: No se ha verificado el tipo del array "hobbies" con typeof');
  }
  
  // Paso 5: Verificar que se haya usado typeof con null en la sección específica
  const lineaNulo = 'console.log("Tipo de nulo:", typeof nulo)';
  
  if (verificarLineaEspecificaDescomentada(codigo, lineaNulo)) {
    console.log('✅ Paso 5: Se ha verificado el tipo de null con typeof');
    aciertos++;
  } else {
    console.log('❌ Paso 5: No se ha verificado el tipo de null con typeof');
  }
  
  // Paso 6: Verificar que haya un comentario sobre las limitaciones de typeof
  if (verificarComentariosEntreSecciones(codigo, "// 👉 Paso 6:", "// Fin del archivo")) {
    console.log('✅ Paso 6: Se ha comentado sobre las limitaciones de typeof');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se ha comentado adecuadamente sobre las limitaciones de typeof. Deberías explicar por qué typeof no es suficiente para distinguir arrays de objetos o detectar null.');
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