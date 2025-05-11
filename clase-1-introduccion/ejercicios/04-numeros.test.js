// 04-numeros.test.js

// Este script verifica si has completado correctamente los ejercicios de números

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '04-numeros.js');
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

// Función para verificar si un método de Math está siendo usado
function verificarMetodoMath(codigo, metodo, valorEsperado = null, ignorarComentarios = true) {
  // Eliminar comentarios si se solicita
  let codigoLimpio = codigo;
  if (ignorarComentarios) {
    codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  }
  
  // Buscar uso del método de Math
  const patron = new RegExp(`Math\\.${metodo}\\(`, 'g');
  
  // Si no se especifica un valor esperado, solo verificamos que se use el método
  if (valorEsperado === null) {
    return patron.test(codigoLimpio);
  }
  
  // Si se especifica un valor esperado, verificamos que se use el método con ese valor
  const patronConValor = new RegExp(`Math\\.${metodo}\\(\\s*${valorEsperado}`, 'g');
  return patronConValor.test(codigoLimpio);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 04-numeros.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 13;
  
  // Verificar variables básicas
  if (verificarVariable(codigo, 'a') && verificarVariable(codigo, 'b')) {
    console.log('✅ Paso 1: Variables "a" y "b" declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: No se encontraron las variables "a" y "b"');
  }
  
  // Verificar operaciones básicas
  const operaciones = [
    { nombre: 'suma', patron: '\\+' },
    { nombre: 'resta', patron: '\\-' },
    { nombre: 'multiplicación', patron: '\\*' },
    { nombre: 'división', patron: '\\/' }
  ];
  
  let operacionesCompletadas = 0;
  for (const op of operaciones) {
    if (verificarUso(codigo, op.patron)) {
      operacionesCompletadas++;
    }
  }
  
  if (operacionesCompletadas >= 4) {
    console.log('✅ Paso 2: Se realizaron las operaciones básicas correctamente');
    aciertos++;
  } else {
    console.log(`❌ Paso 2: Solo se encontraron ${operacionesCompletadas} de 4 operaciones básicas`);
  }
  
  // Verificar módulo
  if (verificarUso(codigo, '%')) {
    console.log('✅ Paso 3: Se calculó el resto (módulo) correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se encontró el cálculo del resto (módulo)');
  }
  
  // Verificar potencia
  if (verificarUso(codigo, '\\*\\*') || verificarMetodoMath(codigo, 'pow')) {
    console.log('✅ Paso 4: Se calculó la potencia correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: No se encontró el cálculo de potencia');
  }
  
  // Verificar métodos de Math para redondeo
  if (verificarMetodoMath(codigo, 'round', '9\\.7')) {
    console.log('✅ Paso 5: Se redondeó 9.7 correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: No se encontró el redondeo correcto de 9.7');
  }
  
  // Verificar que se use un método distinto al del paso 5
  const metodosPaso6 = ['floor', 'ceil', 'trunc'];
  let paso6Completado = false;
  
  for (const metodo of metodosPaso6) {
    if (verificarMetodoMath(codigo, metodo, '9\\.2')) {
      paso6Completado = true;
      break;
    }
  }
  
  if (paso6Completado && !verificarMetodoMath(codigo, 'round', '9\\.2')) {
    console.log('✅ Paso 6: Se usó un método de redondeo alternativo correctamente con 9.2');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se encontró el uso correcto de un método de redondeo alternativo con 9.2');
  }
  
  // Verificar uso de métodos para valores máximos y mínimos
  if (verificarMetodoMath(codigo, 'max')) {
    console.log('✅ Paso 7: Se encontró el valor máximo correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: No se encontró la búsqueda del valor máximo');
  }
  
  if (verificarMetodoMath(codigo, 'min')) {
    console.log('✅ Paso 8: Se encontró el valor mínimo correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se encontró la búsqueda del valor mínimo');
  }
  
  // Verificar cálculo de raíz cuadrada
  if (verificarMetodoMath(codigo, 'sqrt')) {
    console.log('✅ Paso 9: Se calculó la raíz cuadrada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 9: No se encontró el cálculo de la raíz cuadrada');
  }
  
  // Verificar generación de números aleatorios
  if (verificarMetodoMath(codigo, 'random')) {
    console.log('✅ Paso 10: Se generó un número aleatorio correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 10: No se encontró la generación de un número aleatorio');
  }
  
  // Verificar simulaciones con números aleatorios
  if (verificarUso(codigo, 'Math\\.random\\(\\).*\\*.*10') || 
      verificarUso(codigo, 'Math\\.floor\\(Math\\.random\\(\\).*\\*.*10.*\\+.*1\\)') ||
      verificarUso(codigo, 'Math\\.ceil\\(Math\\.random\\(\\).*\\*.*10\\)')) {
    console.log('✅ Paso 11: Se generó un número aleatorio en el rango correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 11: No se encontró la generación de número aleatorio en el rango solicitado');
  }
  
  if (verificarUso(codigo, 'Math\\.random\\(\\).*\\*.*51') || 
      verificarUso(codigo, 'Math\\.random\\(\\).*\\*.*50.*\\+.*50') ||
      verificarUso(codigo, 'Math\\.floor\\(Math\\.random\\(\\).*\\*.*51.*\\+.*50\\)') ||
      verificarUso(codigo, 'Math\\.ceil\\(Math\\.random\\(\\).*\\*.*50.*\\+.*49\\)')) {
    console.log('✅ Paso 12: Se generó un número aleatorio en el rango correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 12: No se encontró la generación de número aleatorio en el rango solicitado');
  }
  
  if (verificarUso(codigo, 'Math\\.round\\(Math\\.random\\(\\)\\)') || 
      verificarUso(codigo, 'Math\\.floor\\(Math\\.random\\(\\).*\\*.*2\\)')) {
    console.log('✅ Paso 13: Se simuló correctamente el evento aleatorio');
    aciertos++;
  } else {
    console.log('❌ Paso 13: No se encontró la simulación del evento aleatorio');
  }
  
  // Verificar desafío extra (opcional)
  if (verificarUso(codigo, 'function\\s+tirarDado')) {
    console.log('✅ Desafío extra: Se implementó la función solicitada');
  } else {
    console.log('⚠️ Desafío extra (opcional): No se implementó la función solicitada');
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