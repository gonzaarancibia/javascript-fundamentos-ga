// 3-operador-ternario.test.js

// Este script verifica si has completado correctamente los ejercicios de operador ternario

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '3-operador-ternario.js');
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

// Función para verificar el uso del operador ternario
function verificarOperadorTernario(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador ternario (condición ? valor1 : valor2)
  const patronTernario = new RegExp(`${nombreVariable}\\s*=\\s*[^;?:]+\\?[^;?:]+:[^;?:]+`, 'g');
  return patronTernario.test(codigoLimpio);
}

// Función para verificar el uso de operadores ternarios anidados
function verificarTernariosAnidados(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar ternarios anidados (puede contener otro signo ? dentro del ternario)
  const patronAnidado = new RegExp(`${nombreVariable}\\s*=\\s*[^;]+\\?[^;]*\\?[^;]*:[^;]*:[^;]*|${nombreVariable}\\s*=\\s*[^;]+\\?[^;]*:[^;]*\\?[^;]*:[^;]*`, 'g');
  return patronAnidado.test(codigoLimpio);
}

// Función para verificar el uso del operador ternario en template literals
function verificarTernarioEnTemplateLiteral(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  // Patrón para detectar el operador ternario dentro de template literals
  const patronTernarioTemplate = new RegExp(`${nombreVariable}\\s*=\\s*\\\`[^\\\`]*\\$\\{[^}]*\\?[^}]*:[^}]*\\}[^\\\`]*\\\``, 'g');
  return patronTernarioTemplate.test(codigoLimpio);
}

// Función para verificar el cálculo correcto del precio final
function verificarCalculoPrecioFinal(codigo) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  
  // Extraer los valores de las variables
  let precioProducto, esSocio, esFeriado, precioFinal;
  
  // Buscar las asignaciones de variables
  const matchPrecioProducto = codigoLimpio.match(/precioProducto\s*=\s*(\d+)/);
  const matchEsSocio = codigoLimpio.match(/esSocio\s*=\s*(true|false)/);
  const matchEsFeriado = codigoLimpio.match(/esFeriado\s*=\s*(true|false)/);
  
  if (matchPrecioProducto && matchEsSocio && matchEsFeriado) {
    precioProducto = parseInt(matchPrecioProducto[1]);
    esSocio = matchEsSocio[1] === 'true';
    esFeriado = matchEsFeriado[1] === 'true';
    
    // Calcular el resultado esperado
    let resultadoEsperado;
    if (esSocio) {
      resultadoEsperado = precioProducto * 0.8; // 20% de descuento
    } else if (esFeriado) {
      resultadoEsperado = precioProducto * 0.9; // 10% de descuento
    } else {
      resultadoEsperado = precioProducto; // Sin descuento
    }
    
    // Extraer el valor de precioFinal
    const matchPrecioFinal = codigoLimpio.match(/precioFinal\s*=\s*([^;]*)/);
    if (matchPrecioFinal) {
      try {
        // Crear un contexto con las variables
        const contexto = {
          precioProducto,
          esSocio,
          esFeriado
        };
        
        // Reemplazar las variables en la expresión
        let expresion = matchPrecioFinal[1];
        for (const [variable, valor] of Object.entries(contexto)) {
          expresion = expresion.replace(new RegExp(variable, 'g'), 
            typeof valor === 'string' ? `"${valor}"` : valor);
        }
        
        // Evaluar la expresión
        const resultadoReal = eval(expresion);
        
        // Verificar si el resultado está dentro de un margen de error aceptable (para evitar problemas con decimales)
        const margenError = 0.001;
        return Math.abs(resultadoReal - resultadoEsperado) < margenError;
      } catch (error) {
        return false;
      }
    }
  }
  
  return false;
}

// Función para verificar el uso del operador ternario en template literals con valor correcto
function verificarTernarioEnTemplateLiteralConValorCorrecto(codigo, nombreVariable) {
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  
  // Extraer el valor de cantidadProductos
  const matchCantidadProductos = codigoLimpio.match(/cantidadProductos\s*=\s*(\d+)/);
  if (!matchCantidadProductos) return false;
  
  const cantidadProductos = parseInt(matchCantidadProductos[1]);
  
  // Extraer el template literal
  const matchMensajeCarrito = codigoLimpio.match(/mensajeCarrito\s*=\s*`([^`]*)`/);
  if (!matchMensajeCarrito) return false;
  
  const mensajeCarrito = matchMensajeCarrito[1];
  
  // Verificar que el mensaje contiene la cantidad correcta de productos
  const contieneCantidadCorrecta = mensajeCarrito.includes(`\${cantidadProductos`);
  
  // Verificar que el ternario maneja correctamente singular/plural
  const contieneOperadorTernario = mensajeCarrito.includes('?') && mensajeCarrito.includes(':');
  
  // Verificar que el mensaje final sería correcto
  let mensajeFinal = mensajeCarrito;
  try {
    // Reemplazar ${cantidadProductos} con su valor real
    mensajeFinal = mensajeFinal.replace(/\${cantidadProductos([^}]*)}/g, function(match, expr) {
      // Evaluar la expresión del ternario
      if (expr.includes('?')) {
        // Extraer condición, valor verdadero y valor falso
        const partes = expr.match(/\s*([^?]+)\s*\?\s*([^:]+)\s*:\s*([^}]+)/);
        if (partes) {
          const condicion = partes[1].trim();
          const valorVerdadero = partes[2].trim().replace(/['"]/g, '');
          const valorFalso = partes[3].trim().replace(/['"]/g, '');
          
          // Evaluar condición básica (solo soporta comparaciones simples)
          let resultado;
          if (condicion.includes('>=')) {
            const valorComparacion = parseInt(condicion.split('>=')[1].trim());
            resultado = cantidadProductos >= valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('==')) {
            const valorComparacion = parseInt(condicion.split('==')[1].trim());
            resultado = cantidadProductos == valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('===')) {
            const valorComparacion = parseInt(condicion.split('===')[1].trim());
            resultado = cantidadProductos === valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('<=')) {
            const valorComparacion = parseInt(condicion.split('<=')[1].trim());
            resultado = cantidadProductos <= valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('>')) {
            const valorComparacion = parseInt(condicion.split('>')[1].trim());
            resultado = cantidadProductos > valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('<')) {
            const valorComparacion = parseInt(condicion.split('<')[1].trim());
            resultado = cantidadProductos < valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('!=')) {
            const valorComparacion = parseInt(condicion.split('!=')[1].trim());
            resultado = cantidadProductos != valorComparacion ? valorVerdadero : valorFalso;
          } else if (condicion.includes('!==')) {
            const valorComparacion = parseInt(condicion.split('!==')[1].trim());
            resultado = cantidadProductos !== valorComparacion ? valorVerdadero : valorFalso;
          } else {
            // Si no hay comparación, evaluar el valor de cantidadProductos como booleano
            resultado = cantidadProductos ? valorVerdadero : valorFalso;
          }
          return resultado;
        }
      }
      return cantidadProductos; // Si no hay ternario, devolver el valor directamente
    });
    
    // Verificar que el mensaje contiene la cantidad correcta y usa singular/plural correctamente
    const esPlural = cantidadProductos !== 1;
    const contienePalabra = esPlural ? 
      mensajeFinal.includes('productos') : 
      mensajeFinal.includes('producto') && !mensajeFinal.includes('productos');
    
    // Verificar que el mensaje contiene la cantidad correcta
    const contieneNumero = mensajeFinal.includes(cantidadProductos.toString());
    
    return contieneCantidadCorrecta && contieneOperadorTernario && contienePalabra && contieneNumero;
  } catch (error) {
    return false;
  }
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 3-operador-ternario.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 12; // Ajustamos el total de pruebas para no contar los opcionales
  
  // 1. Sintaxis básica del operador ternario
  if (verificarVariable(codigo, 'edad')) {
    console.log('✅ Paso 1: Variable de edad declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: No se encontró la variable de edad');
  }
  
  if (verificarVariable(codigo, 'estado') && verificarOperadorTernario(codigo, 'estado')) {
    console.log('✅ Paso 2: Operador ternario utilizado correctamente para determinar mayoría de edad');
    aciertos++;
  } else {
    console.log('❌ Paso 2: No se utilizó correctamente el operador ternario para determinar mayoría de edad');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*estado')) {
    console.log('✅ Paso 3: Se mostró el resultado del operador ternario en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 3: No se mostró el resultado del operador ternario en consola');
  }
  
  // 2. Operador ternario con strings
  if (verificarVariable(codigo, 'estaLloviendo')) {
    console.log('✅ Paso 4: Variable de lluvia declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 4: No se encontró la variable de lluvia');
  }
  
  if (verificarVariable(codigo, 'mensaje') && verificarOperadorTernario(codigo, 'mensaje')) {
    console.log('✅ Paso 5: Operador ternario utilizado correctamente para mensaje de lluvia');
    aciertos++;
  } else {
    console.log('❌ Paso 5: No se utilizó correctamente el operador ternario para mensaje de lluvia');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*mensaje')) {
    console.log('✅ Paso 6: Se mostró el mensaje de lluvia en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se mostró el mensaje de lluvia en consola');
  }
  
  // 3. Operadores ternarios con múltiples condiciones
  if (verificarVariable(codigo, 'calificacion')) {
    console.log('✅ Paso 7: Variable de calificación declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 7: No se encontró la variable de calificación');
  }
  
  if (verificarVariable(codigo, 'resultado') && verificarOperadorTernario(codigo, 'resultado')) {
    console.log('✅ Paso 8: Operador ternario utilizado correctamente para evaluar calificación');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se utilizó correctamente el operador ternario para evaluar calificación');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*resultado')) {
    console.log('✅ Paso 9: Se mostró el resultado de la evaluación en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 9: No se mostró el resultado de la evaluación en consola');
  }
  
  // Paso 10 es opcional, verificamos si está implementado pero no lo contamos en el total
  if (verificarVariable(codigo, 'resultadoDetallado')) {
    if (verificarTernariosAnidados(codigo, 'resultadoDetallado')) {
      console.log('✅ Paso 10 (Opcional): Operadores ternarios anidados implementados correctamente');
      // No sumamos al contador de aciertos para ejercicios opcionales
    } else {
      console.log('❓ Paso 10 (Opcional): Se encontró la variable resultadoDetallado pero no usa ternarios anidados');
    }
  } else {
    console.log('❓ Paso 10 (Opcional): No se implementó la clasificación detallada');
  }
  
  // 4. Aplicación práctica: Calculadora de descuentos (opcional)
  let ejercicioDescuentosImplementado = false;
  
  if (verificarVariable(codigo, 'precioProducto') && 
      verificarVariable(codigo, 'esSocio') && 
      verificarVariable(codigo, 'esFeriado')) {
    console.log('✅ Paso 11 (Opcional): Variables para calculadora de descuentos declaradas correctamente');
    ejercicioDescuentosImplementado = true;
  } else {
    console.log('❓ Paso 11 (Opcional): No se encontraron todas las variables para calculadora de descuentos');
  }
  
  if (verificarVariable(codigo, 'precioFinal')) {
    if (verificarTernariosAnidados(codigo, 'precioFinal')) {
      if (verificarCalculoPrecioFinal(codigo)) {
        console.log('✅ Paso 12 (Opcional): Cálculo de descuentos implementado correctamente');
      } else {
        console.log('❌ Paso 12 (Opcional): El cálculo de descuentos no es correcto. Recuerda: 20% de descuento = multiplicar por 0.8');
      }
    } else {
      console.log('❓ Paso 12 (Opcional): Se encontró la variable precioFinal pero no usa ternarios anidados');
    }
  } else {
    console.log('❓ Paso 12 (Opcional): No se implementó el cálculo de precio final');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*precioFinal')) {
    console.log('✅ Paso 13 (Opcional): Se mostró el precio final en consola');
  } else {
    console.log('❓ Paso 13 (Opcional): No se mostró el precio final en consola');
  }
  
  // 5. Desafío: Operador ternario en template literals
  if (verificarVariable(codigo, 'cantidadProductos')) {
    console.log('✅ Paso 14: Variable de cantidad de productos declarada correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 14: No se encontró la variable de cantidad de productos');
  }
  
  if (verificarVariable(codigo, 'mensajeCarrito') && 
      verificarTernarioEnTemplateLiteral(codigo, 'mensajeCarrito') &&
      verificarTernarioEnTemplateLiteralConValorCorrecto(codigo, 'mensajeCarrito')) {
    console.log('✅ Paso 15: Operador ternario utilizado correctamente en template literal');
    aciertos++;
  } else {
    console.log('❌ Paso 15: No se utilizó correctamente el operador ternario en template literal. Debe mostrar la cantidad exacta de productos y usar singular/plural correctamente.');
  }
  
  if (verificarUso(codigo, 'console\\.log\\(.*mensajeCarrito') || verificarUso(codigo, 'log\\(.*mensajeCarrito')) {
    console.log('✅ Paso 16: Se mostró el mensaje del carrito en consola');
    aciertos++;
  } else {
    console.log('❌ Paso 16: No se mostró el mensaje del carrito en consola');
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