// 5-nullish-coalescing.test.js

// Este script verifica si has completado correctamente los ejercicios de nullish coalescing

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '5-nullish-coalescing.js');
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
    if (enSeccion && linea.startsWith('//') && !linea.startsWith('// 👉') && linea.length > 10) {
      hayComentarios = true;
    }
  }
  
  return hayComentarios;
}

// Función para verificar el uso del operador nullish coalescing
function verificarOperadorNullish(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador nullish coalescing (valor1 ?? valor2)
  const patronNullish = new RegExp(`${nombreVariable}\\s*=\\s*[^;]+\\?\\?[^;]+`, 'g');
  return patronNullish.test(codigoLimpio);
}

// Función para verificar el uso del operador OR
function verificarOperadorOR(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador OR (valor1 || valor2)
  const patronOR = new RegExp(`${nombreVariable}\\s*=\\s*[^;]+\\|\\|[^;]+`, 'g');
  return patronOR.test(codigoLimpio);
}


// Función para verificar si se ha descomentado solo una opción y que sea la correcta
function verificarSoloUnaOpcionCorrectaDescomentada(codigo, opciones, opcionCorrecta) {
    let opcionesDescomentadas = 0;
    let opcionEncontrada = null;
    
    for (const opcion of opciones) {
      if (verificarOpcionDescomentada(codigo, opcion)) {
        opcionesDescomentadas++;
        opcionEncontrada = opcion;
      }
    }
    
    return opcionesDescomentadas === 1 && opcionEncontrada === opcionCorrecta;
  }

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 5-nullish-coalescing.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 10;
  
  // 1. Introducción al operador ??
  // Paso 1: Verificar que se hayan declarado las variables con diferentes valores
  const variablesRequeridas = ['nombre', 'nombrePredeterminado', 'edad', 'edadPredeterminada', 
                              'puntuacion', 'puntuacionPredeterminada', 'mensaje', 'mensajePredeterminado'];
  const variablesDeclaradas = variablesRequeridas.filter(variable => 
    verificarLineaDescomentada(codigo, `let ${variable} =`)
  );
  
  if (variablesDeclaradas.length === variablesRequeridas.length) {
    console.log('✅ Paso 1: Todas las variables han sido declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Revisa la declaración de las variables.');
  }
  
  // Paso 2: Verificar que se haya usado el operador ?? para asignar valores predeterminados
  const variablesNullish = ['nombreMostrado', 'edadMostrada', 'puntuacionMostrada', 'mensajeMostrado'];
  const variablesConNullish = variablesNullish.filter(variable => 
    verificarOperadorNullish(codigo, variable)
  );
  
  if (variablesConNullish.length === variablesNullish.length) {
    console.log('✅ Paso 2: Uso correcto del operador ??');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Revisa el uso del operador ??');
  }
  
  // Paso 3: Verificar que se hayan mostrado los resultados en consola
  const variablesMostradas = variablesNullish.filter(variable => 
    verificarUso(codigo, `console\\.log\\(.*${variable}`)
  );
  
  if (variablesMostradas.length === variablesNullish.length) {
    console.log('✅ Paso 3: Resultados mostrados correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Revisa la salida de los resultados.');
  }
  
  // 2. Comparación con el operador OR (||)
  // Paso 4: Verificar que se haya usado el operador || para las mismas variables
  const variablesOR = ['nombreConOR', 'edadConOR', 'puntuacionConOR', 'mensajeConOR'];
  const variablesConOR = variablesOR.filter(variable => 
    verificarOperadorOR(codigo, variable)
  );
  
  if (variablesConOR.length === variablesOR.length) {
    console.log('✅ Paso 4: Uso correcto del operador ||');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Revisa el uso del operador ||');
  }
  
  // Paso 5: Verificar que se hayan mostrado los resultados en consola
  const variablesORMostradas = variablesOR.filter(variable => 
    verificarUso(codigo, `console\\.log\\(.*${variable}`)
  );
  
  if (variablesORMostradas.length === variablesOR.length) {
    console.log('✅ Paso 5: Resultados del operador || mostrados correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Revisa la salida de los resultados del operador ||.');
  }
  
  // Paso 6: Verificar que se haya comparado los resultados de ?? y ||
  if (verificarComentariosEntreSecciones(codigo, "// 👉 Paso 6:", "//--------------------------------------------------")) {
    console.log('✅ Paso 6: Comparación de operadores realizada');
    aciertos++;
  } else {
    console.log('❌ Paso 6: Falta la comparación de operadores.');
  }
  
  // 3. Encadenamiento de operador ?? (Opción múltiple)
  // Paso 7: Verificar que se hayan declarado las variables para el encadenamiento
  const variablesEncadenamiento = ['opcion1', 'opcion2', 'opcion3', 'valorPredeterminado'];
  const variablesEncadenamientoDeclaradas = variablesEncadenamiento.filter(variable => 
    verificarLineaDescomentada(codigo, `let ${variable} =`)
  );
  
  if (variablesEncadenamientoDeclaradas.length === variablesEncadenamiento.length) {
    console.log('✅ Paso 7: Variables para encadenamiento declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: Revisa la declaración de variables para encadenamiento.');
  }
  
  // Paso 8: Verificar que se haya descomentado solo una opción
  const opciones = [
    "let resultado = opcion1 ?? opcion2 ?? opcion3 ?? valorPredeterminado;",
    "let resultado = opcion1 || opcion2 || valorPredeterminado || opcion3;",
    "let resultado = opcion2 ?? opcion1 ?? valorPredeterminado ?? opcion3;",
    "let resultado = valorPredeterminado ?? opcion3 ?? opcion1 ?? opcion2;"
  ];
  
  const opcionCorrecta = "let resultado = opcion1 ?? opcion2 ?? opcion3 ?? valorPredeterminado;";

  if (verificarSoloUnaOpcionCorrectaDescomentada(codigo, opciones, opcionCorrecta)) {
    console.log('✅ Paso 8: Opción correcta descomentada');
    aciertos++;
  } else {
    console.log('❌ Paso 8: Revisa las opciones descomentadas.');
  }
  
  // Paso 9: Verificar que se haya mostrado el resultado en consola
  if (verificarUso(codigo, 'console\\.log\\(.*resultado')) {
    console.log('✅ Paso 9: Resultado del encadenamiento mostrado');
    aciertos++;
  } else {
    console.log('❌ Paso 9: Falta mostrar el resultado del encadenamiento.');
  }
  
  // Paso 10: Verificar que se haya explicado la opción elegida
  if (verificarComentariosEntreSecciones(codigo, "// EXPLICACIÓN:", "//--------------------------------------------------")) {
    console.log('✅ Paso 10: Explicación sobre la opción elegida añadida');
    aciertos++;
  } else {
    console.log('❌ Paso 10: Falta la explicación sobre la opción elegida.');
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