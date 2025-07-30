// 02-tipos-de-datos.test.js

// Este script verifica si has completado correctamente los ejercicios de tipos de datos

const fs = require('fs');
const path = require('path');

// Función para leer el archivo de ejercicios
function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, '02-tipos-de-datos.js');
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
  const patron = new RegExp(`(let|const|var)\\s+${nombreVariable}\\b`, 'g');
  return patron.test(codigoLimpio);
}

// Función para verificar el tipo de valor asignado a una variable
function verificarTipoVariable(codigo, nombreVariable, tipo) {
  // Eliminar comentarios
  const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
  
  switch(tipo) {
    case 'string':
      // Busca strings con comillas simples o dobles
      const patronString = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*(['"].*?['"])`, 'g');
      return patronString.test(codigoLimpio);
    
    case 'number':
      // Busca números (enteros o decimales)
      const patronNumber = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*([0-9]+(\\.?[0-9]*)?)(?!['"\\w])`, 'g');
      return patronNumber.test(codigoLimpio);
    
    case 'boolean':
      // Busca true o false
      const patronBoolean = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*(true|false)(?!['"\\w])`, 'g');
      return patronBoolean.test(codigoLimpio);
    
    case 'undefined':
      // Busca una declaración sin asignación o con undefined explícito
      const patronUndefined1 = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*;`, 'g');
      const patronUndefined2 = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*$`, 'g');
      const patronUndefined3 = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*undefined`, 'g');
      return patronUndefined1.test(codigoLimpio) || patronUndefined2.test(codigoLimpio) || patronUndefined3.test(codigoLimpio);
    
    case 'null':
      // Busca null
      const patronNull = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*null`, 'g');
      return patronNull.test(codigoLimpio);
    
    case 'array':
      // Busca arrays (cualquier cosa entre corchetes)
      const patronArray = new RegExp(`(let|const|var)\\s+\\w+\\s*=\\s*\\[`, 'g');
      return patronArray.test(codigoLimpio);
    
    case 'object':
      // Busca objetos (cualquier cosa entre llaves)
      const patronObject = new RegExp(`(let|const|var)\\s+${nombreVariable}\\s*=\\s*\\{`, 'g');
      return patronObject.test(codigoLimpio);
    
    default:
      return false;
  }
}

// Función para verificar si una opción está descomentada y tiene el valor correcto
function verificarOpcionDescomentada(codigo, lineaPatron, valorEsperado) {
  const lineas = codigo.split('\n');
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].includes(lineaPatron) && !lineas[i].trim().startsWith('//')) {
      // Verificar si la línea contiene el valor esperado
      if (valorEsperado) {
        return lineas[i].includes(`= '${valorEsperado}'`);
      }
      return true;
    }
  }
  return false;
}

// Función para verificar si una función o operador está siendo usado (no solo mencionado en comentarios)
function verificarUsoReal(codigo, patron) {
  // Eliminar comentarios
  const codigoSinComentarios = codigo.replace(/\/\/.*$/gm, '');
  
  // Buscar el patrón en el código sin comentarios
  return new RegExp(patron).test(codigoSinComentarios);
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 02-tipos-de-datos.js...\n');
  
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const totalPruebas = 23; // Actualizado para incluir las nuevas verificaciones
  
  // Verificar variables de tipos primitivos y sus tipos
  if (verificarVariable(codigo, 'nombre') && verificarTipoVariable(codigo, 'nombre', 'string')) {
    console.log('✅ Paso 1: Variable "nombre" declarada correctamente como string');
    aciertos++;
  } else {
    console.log('❌ Paso 1: La variable "nombre" no está declarada como string');
  }
  
  if (verificarVariable(codigo, 'edad') && verificarTipoVariable(codigo, 'edad', 'number')) {
    console.log('✅ Paso 2: Variable "edad" declarada correctamente como number');
    aciertos++;
  } else {
    console.log('❌ Paso 2: La variable "edad" no está declarada como number');
  }
  
  if (verificarVariable(codigo, 'esEstudiante') && verificarTipoVariable(codigo, 'esEstudiante', 'boolean')) {
    console.log('✅ Paso 3: Variable "esEstudiante" declarada correctamente como boolean');
    aciertos++;
  } else {
    console.log('❌ Paso 3: La variable "esEstudiante" no está declarada como boolean');
  }
  
  if (verificarVariable(codigo, 'direccion') && verificarTipoVariable(codigo, 'direccion', 'undefined')) {
    console.log('✅ Paso 4: Variable "direccion" declarada correctamente como undefined');
    aciertos++;
  } else {
    console.log('❌ Paso 4: La variable "direccion" no está declarada como undefined');
  }
  
  if (verificarVariable(codigo, 'nulo') && verificarTipoVariable(codigo, 'nulo', 'null')) {
    console.log('✅ Paso 5: Variable "nulo" declarada correctamente como null');
    aciertos++;
  } else {
    console.log('❌ Paso 5: La variable "nulo" no está declarada como null');
  }
  
  // Verificar uso de typeof
  if (codigo.includes('typeof nombre') && 
      codigo.includes('typeof edad') && 
      codigo.includes('typeof esEstudiante') && 
      codigo.includes('typeof direccion') && 
      codigo.includes('typeof nulo')) {
    console.log('✅ Paso 6: Se usó typeof para verificar tipos');
    aciertos++;
  } else {
    console.log('❌ Paso 6: No se usó typeof para verificar todos los tipos');
  }
  
  // Verificar conversión a número
  if (codigo.includes('Number(') && codigo.match(/Number\((.*?)\)/)) {
    console.log('✅ Paso 7: Se intentó convertir una palabra a número');
    aciertos++;
  } else {
    console.log('❌ Paso 7: No se encontró la conversión a número');
  }
  
  // Verificar uso de isNaN
  if (verificarUsoReal(codigo, 'isNaN\\(')) {
    console.log('✅ Paso 8: Se usó isNaN() correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 8: No se encontró el uso de isNaN()');
  }
  
  // Verificar creación de array
  if (codigo.includes('[') && codigo.includes(']')) {
    // Buscar arrays en el código
    const arrayMatch = codigo.match(/\[(.*?)\]/g);
    if (arrayMatch) {
      // Verificar si algún array tiene al menos 3 elementos
      let tieneArrayCon3Elementos = false;
      for (const arr of arrayMatch) {
        // Contar elementos separados por coma
        const elementos = arr.split(',').length;
        if (elementos >= 3) {
          tieneArrayCon3Elementos = true;
          break;
        }
      }
      
      if (tieneArrayCon3Elementos) {
        console.log('✅ Paso 9: Se creó un array correctamente con al menos 3 elementos');
        aciertos++;
      } else {
        console.log('❌ Paso 9: Se creó un array, pero debe tener al menos 3 elementos');
      }
    } else {
      console.log('❌ Paso 9: No se encontró la creación de un array válido');
    }
  } else {
    console.log('❌ Paso 9: No se encontró la creación de un array');
  }
  
  // Verificar creación de objeto
  if (codigo.includes('persona') && codigo.includes('{') && codigo.includes('}')) {
    // Verificar si el objeto persona tiene las propiedades requeridas
    // Usamos codigoLimpio para ignorar líneas comentadas
    const codigoLimpio = codigo.replace(/\/\/.*$/gm, '');
    
    const tieneNombre = codigoLimpio.match(/persona\s*=\s*\{[^}]*nombre\s*:/);
    const tieneEdad = codigoLimpio.match(/persona\s*=\s*\{[^}]*edad\s*:/);
    const tieneCiudad = codigoLimpio.match(/persona\s*=\s*\{[^}]*ciudad\s*:/);
    
    if (tieneNombre && tieneEdad && tieneCiudad) {
      console.log('✅ Paso 10: Se creó un objeto "persona" correctamente con todas las propiedades requeridas');
      aciertos++;
    } else {
      console.log('❌ Paso 10: El objeto "persona" no tiene todas las propiedades requeridas (nombre, edad y ciudad)');
    }
  } else {
    console.log('❌ Paso 10: No se encontró la creación del objeto "persona"');
  }
  
  // Verificar uso de typeof con array y objeto
  if (codigo.includes('typeof') && 
      (codigo.match(/typeof\s+\w+\s*(\[\]|\{.*\})/) || 
       codigo.includes('typeof persona') || 
       codigo.match(/typeof\s+\w+\s*\/\/.*array/i))) {
    console.log('✅ Paso 11: Se verificó el tipo de array y objeto');
    aciertos++;
  } else {
    console.log('❌ Paso 11: No se verificó el tipo de array y objeto');
  }
  
  // Verificar variables para comparación
  if (verificarVariable(codigo, 'numero') && verificarVariable(codigo, 'texto')) {
    console.log('✅ Paso 12: Variables "numero" y "texto" declaradas correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 12: No se encontraron las variables "numero" y "texto"');
  }
  
  // Verificar comparación con == y ===
  if (verificarUsoReal(codigo, '==') && verificarUsoReal(codigo, '===')) {
    console.log('✅ Paso 13: Se realizaron comparaciones con == y ===');
    aciertos++;
  } else {
    console.log('❌ Paso 13: No se encontraron las comparaciones con == y ===');
  }
  
  // Verificar opciones descomentadas con valores correctos
  if (verificarOpcionDescomentada(codigo, 'const representacionVehiculo =', 'objeto')) {
    console.log('✅ Paso 14: Se descomentó la opción correcta para representación de vehículo');
    aciertos++;
  } else {
    console.log('❌ Paso 14: No se descomentó la opción correcta para representación de vehículo');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const estructuraListaCompras =', 'array')) {
    console.log('✅ Paso 15: Se descomentó la opción correcta para lista de compras');
    aciertos++;
  } else {
    console.log('❌ Paso 15: No se descomentó la opción correcta para lista de compras ');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const tipoUsuarioLogueado =', 'boolean')) {
    console.log('✅ Paso 16: Se descomentó la opción correcta para usuario logueado');
    aciertos++;
  } else {
    console.log('❌ Paso 16: No se descomentó la opción correcta para usuario logueado');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const tipoPrecioProducto =', 'number')) {
    console.log('✅ Paso 17: Se descomentó la opción correcta para precio de producto');
    aciertos++;
  } else {
    console.log('❌ Paso 17: No se descomentó la opción correcta para precio de producto');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const estructuraFormulario =', 'objeto')) {
    console.log('✅ Paso 18: Se descomentó la opción correcta para formulario de contacto');
    aciertos++;
  } else {
    console.log('❌ Paso 18: No se descomentó la opción correcta para formulario de contacto');
  }
  
  // Verificar características de tipos de datos con valores correctos
  if (verificarOpcionDescomentada(codigo, 'const caracteristicaString =', 'Son inmutables (no se pueden modificar después de creados)')) {
    console.log('✅ Paso 19 (parte 1): Se descomentó la opción correcta para característica de string');
    aciertos++;
  } else {
    console.log('❌ Paso 19 (parte 1): No se descomentó la opción correcta para característica de string');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const caracteristicaArray =', 'Pueden contener elementos de diferentes tipos')) {
    console.log('✅ Paso 19 (parte 2): Se descomentó la opción correcta para característica de array');
    aciertos++;
  } else {
    console.log('❌ Paso 19 (parte 2): No se descomentó la opción correcta para característica de array');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const caracteristicaNumero =', 'Son todos del mismo tipo (no hay distinción entre enteros y decimales)')) {
    console.log('✅ Paso 19 (parte 3): Se descomentó la opción correcta para característica de número');
    aciertos++;
  } else {
    console.log('❌ Paso 19 (parte 3): No se descomentó la opción correcta para característica de número');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const caracteristicaObjeto =', 'Se pueden agregar o eliminar propiedades después de creados')) {
    console.log('✅ Paso 19 (parte 4): Se descomentó la opción correcta para característica de objeto');
    aciertos++;
  } else {
    console.log('❌ Paso 19 (parte 4): No se descomentó la opción correcta para característica de objeto');
  }
  
  if (verificarOpcionDescomentada(codigo, 'const caracteristicaBoolean =', 'Solo pueden ser true o false')) {
    console.log('✅ Paso 19 (parte 5): Se descomentó la opción correcta para característica de boolean');
    aciertos++;
  } else {
    console.log('❌ Paso 19 (parte 5): No se descomentó la opción correcta para característica de boolean');
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