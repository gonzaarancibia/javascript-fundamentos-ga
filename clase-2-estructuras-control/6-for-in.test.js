// 6-for-in.test.js
// Test para los ejercicios de for...in

const fs = require('fs');
const path = require('path');

function leerArchivoEjercicios() {
  try {
    const rutaArchivo = path.join(__dirname, './6-for-in.js');
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.error('❌ Error al leer el archivo de ejercicios:', error.message);
    process.exit(1);
  }
}

function verificarDeclaracionObjeto(codigo, nombre) {
  // Busca la declaración de un objeto con al menos 3 propiedades
  const match = codigo.match(new RegExp(`let\\s+${nombre}\\s*=\\s*{([^}]*)}`));
  if (!match) return false;
  const props = match[1].split(',').map(s => s.trim()).filter(Boolean);
  return props.length >= 3;
}

function verificarForInClaves(codigo, nombre) {
  // Busca un for...in sobre el objeto y que el console.log muestre la clave
  const forInMatch = codigo.match(new RegExp('for\\s*\\(\\s*let\\s+(\\w+)\\s+in\\s+' + nombre + '\\s*\\)[^{]*{([^}]*)}'));
  if (!forInMatch) return false;
  const variable = forInMatch[1];
  const cuerpo = forInMatch[2];
  const patronLog = new RegExp(`console\\.log\\(\\s*${variable}\\s*\\)`);
  return patronLog.test(cuerpo);
}

function verificarForInValores(codigo, nombre) {
  // Busca un for...in sobre el objeto y que el console.log muestre el valor
  // Permite cualquier nombre de variable de iteración
  const forInRegex = new RegExp('for\\s*\\(\\s*let\\s+(\\w+)\\s+in\\s+' + nombre + '\\s*\\)[^{]*{([\\s\\S]*?)}', 'g');
  let match;
  while ((match = forInRegex.exec(codigo)) !== null) {
    const variable = match[1];
    const cuerpo = match[2];
    // Debe haber un console.log(persona[clave]) en el cuerpo, permitiendo espacios
    const patronLog = new RegExp(`console\\.log\\(\\s*${nombre}\\s*\\[\\s*${variable}\\s*\\]\\s*\\)`);
    if (patronLog.test(cuerpo)) return true;
  }
  return false;
}

function verificarForInClaveValor(codigo, nombre) {
  // Busca un for...in sobre el objeto y que el console.log muestre clave: valor
  // Permite cualquier nombre de variable de iteración
  const forInRegex = new RegExp('for\\s*\\(\\s*let\\s+(\\w+)\\s+in\\s+' + nombre + '\\s*\\)[^{]*{([\\s\\S]*?)}', 'g');
  let match;
  while ((match = forInRegex.exec(codigo)) !== null) {
    const variable = match[1];
    const cuerpo = match[2];
    // Permite console.log(clave + ": " + persona[clave]) o template string
    // Permite espacios opcionales
    const patronConcat = new RegExp(`console\\.log\\(\\s*${variable}\\s*\\+\\s*["']\\s*:\\s*["']\\s*\\+\\s*${nombre}\\s*\\[\\s*${variable}\\s*\\]\\s*\\)`);
    // Permite también console.log(`${clave}: ${persona[clave]}`) o variantes
    const patronTemplate = new RegExp('console\\.log\\(\\s*`?\\$?\\{?'+variable+'\\}?\\s*:?\\s*\\$?\\{?'+nombre+'\\s*\\[\\s*'+variable+'\\s*\\]\\s*\\}?`?\\s*\\)');
    // Permite también console.log(clave, ":", persona[clave])
    const patronArgs = new RegExp(`console\\.log\\(\\s*${variable}\\s*,\\s*["']\\s*:\\s*["']\\s*,\\s*${nombre}\\s*\\[\\s*${variable}\\s*\\]\\s*\\)`);
    if (patronConcat.test(cuerpo) || patronTemplate.test(cuerpo) || patronArgs.test(cuerpo)) return true;
  }
  return false;
}

function verificarConteoPropiedades(codigo, nombre) {
  // Busca un for...in que incremente un contador y luego lo muestre
  // Permite cualquier nombre de variable de iteración y de contador
  // Busca declaración de contador
  const contadorMatch = codigo.match(/let\s+(\w+)\s*=\s*0/);
  if (!contadorMatch) return false;
  const contador = contadorMatch[1];
  // Busca for...in sobre el objeto
  const forInRegex = new RegExp('for\\s*\\(\\s*let\\s+\\w+\\s+in\\s+'+nombre+'\\s*\\)[^{]*{([\\s\\S]*?)}', 'g');
  let match;
  let incremento = false;
  while ((match = forInRegex.exec(codigo)) !== null) {
    const cuerpo = match[1];
    // Busca incremento del contador
    const patronInc = new RegExp(contador+'\\s*\\+\\+');
    if (patronInc.test(cuerpo)) incremento = true;
  }
  if (!incremento) return false;
  // Busca console.log(contador) o console.log("Cantidad de propiedades:", contador)
  const patronLog = new RegExp('console\\.log\\(\\s*(["\"][^\)]*["\"]\\s*,\\s*)?'+contador+'\\s*\\)');
  return patronLog.test(codigo);
}

function ejecutarPruebas() {
  console.log('🧪 Ejecutando pruebas para 6-for-in.js...\n');
  const codigo = leerArchivoEjercicios();
  let aciertos = 0;
  const total = 5;

  if (verificarDeclaracionObjeto(codigo, 'persona')) {
    console.log('✅ Paso 1: Objeto persona declarado correctamente');
    aciertos++;
  } else {
    console.log('❌ Paso 1: Falta declarar el objeto persona con al menos 3 propiedades');
  }

  if (verificarForInClaves(codigo, 'persona')) {
    console.log('✅ Paso 2: for...in para mostrar claves correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 2: Falta o es incorrecto el for...in para mostrar claves');
  }

  if (verificarForInValores(codigo, 'persona')) {
    console.log('✅ Paso 3: for...in para mostrar valores correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 3: Falta o es incorrecto el for...in para mostrar valores');
  }

  if (verificarForInClaveValor(codigo, 'persona')) {
    console.log('✅ Paso 4: for...in para mostrar clave y valor correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 4: Falta o es incorrecto el for...in para mostrar clave y valor');
  }

  if (verificarConteoPropiedades(codigo, 'persona')) {
    console.log('✅ Paso 5: Conteo de propiedades correcto');
    aciertos++;
  } else {
    console.log('❌ Paso 5: Falta o es incorrecto el conteo de propiedades');
  }

  // Resultado final
  console.log(`\n🏆 Resultado: ${aciertos}/${total} ejercicios completados correctamente`);
  if (aciertos === total) {
    console.log('🎉 ¡Felicitaciones! Has completado todos los ejercicios correctamente.');
  } else if (aciertos >= total * 0.7) {
    console.log('👍 ¡Buen trabajo! Has completado la mayoría de los ejercicios. Revisá los que faltan.');
  } else {
    console.log('💪 Seguí practicando. Revisá los ejercicios marcados con ❌ y volvé a intentarlo.');
  }
}

ejecutarPruebas();
