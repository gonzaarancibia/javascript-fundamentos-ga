// 2-operadores-logicos.test.js

// Este script verifica si has completado correctamente los ejercicios de operadores lógicos

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '2-operadores-logicos.js');
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

// Función para verificar el uso exacto de un operador lógico
function verificarOperadorLogicoExacto(codigo, nombreVariable, operador) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  let patronExacto;
  
  switch(operador) {
    case '&&':
      patronExacto = new RegExp(`${nombreVariable}\\s*=\\s*\\w+\\s*&&\\s*\\w+`, 'g');
      break;
    case '||':
      patronExacto = new RegExp(`${nombreVariable}\\s*=\\s*\\w+\\s*\\|\\|\\s*\\w+`, 'g');
      break;
    case '!':
      patronExacto = new RegExp(`${nombreVariable}\\s*=\\s*!\\w+`, 'g');
      break;
    default:
      return false;
  }
  
  return patronExacto.test(codigoLimpio);
}

// Función para verificar el uso de operadores lógicos combinados
function verificarOperadoresCombinados(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Verifica si hay una combinación de OR y AND en la misma expresión
  const patronCombinado = new RegExp(`${nombreVariable}\\s*=\\s*\\(.*\\|\\|.*\\)\\s*&&|${nombreVariable}\\s*=\\s*.*&&\\s*\\(.*\\|\\|.*\\)`, 'g');
  return patronCombinado.test(codigoLimpio);
}

// Función para verificar condiciones múltiples con AND
function verificarCondicionesMultiples(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Modificamos el patrón para que acepte expresiones más complejas con paréntesis
  // y operadores de comparación como ===, >, etc.
  const patronMultiple = new RegExp(`${nombreVariable}\\s*=\\s*.*&&.*&&.*`, 'g');
  return patronMultiple.test(codigoLimpio);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 2-operadores-logicos.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 17;
  
  // 1. Operador AND (&&)
  if (verificarVariable(codigo, 'esMayorDeEdad') && verificarVariable(codigo, 'tieneLicencia')) {
    console.log('✅ Paso 1: Variables para operador AND declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: No se encontraron las variables necesarias para operador AND');
  }
  
  if (verificarVariable(codigo, 'puedeConducir') && verificarOperadorLogicoExacto(codigo, 'puedeConducir', '&&')) {
    console.log('✅ Paso 2: Operador AND utilizado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 2: No se utilizó correctamente el operador AND');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*puedeConducir')) {
    console.log('✅ Paso 3: Se mostró el resultado del operador AND en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se mostró el resultado del operador AND en consola');
  }
  
  // 2. Operador OR (||)
  if (verificarVariable(codigo, 'tieneEfectivo') && verificarVariable(codigo, 'tieneTarjeta')) {
    console.log('✅ Paso 4: Variables para operador OR declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: No se encontraron las variables necesarias para operador OR');
  }
  
  if (verificarVariable(codigo, 'puedePagar') && verificarOperadorLogicoExacto(codigo, 'puedePagar', '||')) {
    console.log('✅ Paso 5: Operador OR utilizado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 5: No se utilizó correctamente el operador OR');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*puedePagar')) {
    console.log('✅ Paso 6: Se mostró el resultado del operador OR en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se mostró el resultado del operador OR en consola');
  }
  
  // 3. Operador NOT (!)
  if (verificarVariable(codigo, 'esFinDeSemana')) {
    console.log('✅ Paso 7: Variable para operador NOT declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: No se encontró la variable necesaria para operador NOT');
  }
  
  if (verificarVariable(codigo, 'esDiaLaboral') && verificarOperadorLogicoExacto(codigo, 'esDiaLaboral', '!')) {
    console.log('✅ Paso 8: Operador NOT utilizado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se utilizó correctamente el operador NOT');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*esDiaLaboral')) {
    console.log('✅ Paso 9: Se mostró el resultado del operador NOT en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 9: No se mostró el resultado del operador NOT en consola');
  }
  
  // 4. Combinación de operadores lógicos
  if (verificarVariable(codigo, 'tieneReserva') && 
      verificarVariable(codigo, 'esSocio') && 
      verificarVariable(codigo, 'hayLugarDisponible')) {
    console.log('✅ Paso 10: Variables para combinación de operadores declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 10: No se encontraron todas las variables necesarias para combinación de operadores');
  }
  
  if (verificarVariable(codigo, 'puedeIngresar') && verificarOperadoresCombinados(codigo, 'puedeIngresar')) {
    console.log('✅ Paso 11: Combinación de operadores lógicos utilizada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 11: No se utilizó correctamente la combinación de operadores lógicos');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*puedeIngresar')) {
    console.log('✅ Paso 12: Se mostró el resultado de la combinación de operadores en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 12: No se mostró el resultado de la combinación de operadores en consola');
  }
  
  // 5. Aplicación práctica: Sistema de autenticación
  if (verificarVariable(codigo, 'usuarioIngresado') && 
      verificarVariable(codigo, 'contrasenaIngresada') && 
      verificarVariable(codigo, 'usuarioCorrecto') && 
      verificarVariable(codigo, 'contraseniaCorrecta') && 
      verificarVariable(codigo, 'intentosRestantes') && 
      verificarVariable(codigo, 'cuentaBloqueada')) {
    console.log('✅ Paso 13: Variables para sistema de autenticación declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 13: No se encontraron todas las variables necesarias para el sistema de autenticación');
  }
  
  // Función para verificar el resultado correcto del login
  function verificarLoginCorrecto(codigo) {
    const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
    
    // Extraer los valores de las variables
    let usuarioIngresado, contrasenaIngresada, usuarioCorrecto, contraseniaCorrecta, intentosRestantes, cuentaBloqueada;
    
    // Buscar las asignaciones de variables
    const matchUsuarioIngresado = codigoLimpio.match(/usuarioIngresado\s*=\s*["']([^"']*)["']/);
    const matchContrasenaIngresada = codigoLimpio.match(/contrasenaIngresada\s*=\s*["']([^"']*)["']/);
    const matchUsuarioCorrecto = codigoLimpio.match(/usuarioCorrecto\s*=\s*["']([^"']*)["']/);
    const matchContraseniaCorrecta = codigoLimpio.match(/contraseniaCorrecta\s*=\s*["']([^"']*)["']/);
    const matchIntentosRestantes = codigoLimpio.match(/intentosRestantes\s*=\s*(\d+)/);
    const matchCuentaBloqueada = codigoLimpio.match(/cuentaBloqueada\s*=\s*(true|false)/);
    
    if (matchUsuarioIngresado && matchContrasenaIngresada && matchUsuarioCorrecto && 
        matchContraseniaCorrecta && matchIntentosRestantes && matchCuentaBloqueada) {
      
      usuarioIngresado = matchUsuarioIngresado[1];
      contrasenaIngresada = matchContrasenaIngresada[1];
      usuarioCorrecto = matchUsuarioCorrecto[1];
      contraseniaCorrecta = matchContraseniaCorrecta[1];
      intentosRestantes = parseInt(matchIntentosRestantes[1]);
      cuentaBloqueada = matchCuentaBloqueada[1] === 'true';
      
      // Calcular el resultado esperado
      const resultadoEsperado = (usuarioIngresado === usuarioCorrecto) && 
                               (contrasenaIngresada === contraseniaCorrecta) && 
                               !cuentaBloqueada && 
                               intentosRestantes > 0;
      
      // Extraer el valor de loginExitoso
      const matchLoginExitoso = codigoLimpio.match(/loginExitoso\s*=\s*([^;]*)/);
      if (matchLoginExitoso) {
        // Evaluar la expresión para obtener el resultado real
        try {
          // Crear un contexto con las variables
          const contexto = {
            usuarioIngresado,
            contrasenaIngresada,
            usuarioCorrecto,
            contraseniaCorrecta,
            intentosRestantes,
            cuentaBloqueada
          };
          
          // Reemplazar las variables en la expresión
          let expresion = matchLoginExitoso[1];
          for (const [variable, valor] of Object.entries(contexto)) {
            expresion = expresion.replace(new RegExp(variable, 'g'), 
              typeof valor === 'string' ? `"${valor}"` : valor);
          }
          
          // Evaluar la expresión
          const resultadoReal = eval(expresion);
          
          // Comparar con el resultado esperado
          return resultadoReal === resultadoEsperado;
        } catch (error) {
          return false;
        }
      }
    }
    
    return false;
  }
  
  // Modificar la verificación del paso 14
  if (verificarVariable(codigo, 'loginExitoso') && verificarCondicionesMultiples(codigo, 'loginExitoso') && verificarLoginCorrecto(codigo)) {
    console.log('✅ Paso 14: Verificación de login implementada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 14: La verificación de login no es correcta. Asegúrate de que la lógica sea correcta.');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*loginExitoso')) {
    console.log('✅ Paso 15: Se mostró el resultado del login en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 15: No se mostró el resultado del login en consola');
  }
  
  // 6. Desafío: Evaluación de cortocircuito
  if (verificarVariable(codigo, 'nombre') && verificarVariable(codigo, 'nombrePredeterminado')) {
    console.log('✅ Paso 16: Variables para evaluación de cortocircuito declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 16: No se encontraron las variables necesarias para evaluación de cortocircuito');
  }
  
  if (verificarVariable(codigo, 'nombreMostrado') && verificarUso(codigo, 'nombre\\s*\\|\\|\\s*nombrePredeterminado')) {
    console.log('✅ Paso 17: Evaluación de cortocircuito implementada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 17: No se implementó correctamente la evaluación de cortocircuito');
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