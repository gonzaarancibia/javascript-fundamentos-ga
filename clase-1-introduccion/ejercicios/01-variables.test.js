const fs = require('fs');
const path = './01-variables.js';
let code = fs.readFileSync(path, 'utf8');

// Quitamos los comentarios de línea y bloque
code = code
  .replace(/\/\/.*$/gm, '') // comentarios //
  .replace(/\/\*[\s\S]*?\*\//g, ''); // comentarios /* */

/**
 * Verifica si una variable fue declarada
 */
function wasDeclared(varName, type) {
  // Escapamos caracteres especiales en el nombre de la variable
  const escapedVarName = varName.replace(/\$/g, '\\$');
  
  // Si se especifica el tipo (let o const), verificamos que se use ese tipo específico
  if (type) {
    const regex = new RegExp(`${type}\\s+${escapedVarName}\\b`);
    return regex.test(code);
  }
  // Si no se especifica, verificamos cualquiera de los dos
  const regex = new RegExp(`(let|const)\\s+${escapedVarName}\\b`);
  return regex.test(code);
}

/**
 * Verifica si una variable tiene un valor de tipo string
 */
function isString(varName) {
  // Buscamos la declaración de la variable y capturamos su valor
  const regex = new RegExp(`(let|const)\\s+${varName}\\s*=\\s*(['"].*?['"]|\\d+|true|false|null|undefined)`, 'g');
  const match = regex.exec(code);
  
  if (match && match[2]) {
    // Verificamos si el valor está entre comillas (simple o doble)
    return /^['"].*['"]$/.test(match[2]);
  }
  return false;
}

console.log('\n--- Test de variables ---\n');

const tests = [
  { name: 'nombre', mensaje: 'Debe declarar una variable llamada "nombre"', checkString: true, mensajeString: 'La variable "nombre" debe ser un string' },
  { name: 'edad', type: 'const', mensaje: 'Debe declarar una constante llamada "edad"' },
  { name: 'ciudad', mensaje: 'Debe declarar una variable llamada "ciudad"' },
  { name: 'esEstudiante', mensaje: 'Debe declarar una variable llamada "esEstudiante"' },
  { name: 'anio', mensaje: 'Debe declarar una variable llamada "anio"' },
  { name: 'apellidoDelUsuario', mensaje: 'Debe descomentar la variable correcta' },
  { name: '_contador', mensaje: 'Debe descomentar la variable correcta' },
  { name: '$total', mensaje: 'Debe descomentar la variable correcta' },
  { name: 'apiKey', type: 'const', mensaje: 'Debe declarar la variable "apiKey" correctamente' },
  { name: 'clicks', type: 'let', mensaje: 'Debe declarar la variable "clicks" correctamente' },
  { name: 'nombreUsuario', type: 'const', mensaje: 'Debe declarar la variable "nombreUsuario" correctamente' },
  { name: 'precio', type: 'let', mensaje: 'Debe declarar la variable "precio" correctamente' },
  { name: 'mensaje', type: 'const', mensaje: 'Debe declarar la variable "mensaje" correctamente' }
];

let passed = 0;

for (const test of tests) {
  if (wasDeclared(test.name, test.type)) {
    // Si la variable existe, verificamos si también debe ser string
    if (test.checkString && !isString(test.name)) {
      console.log(`❌ ${test.mensajeString}`);
    } else {
      console.log(`✅ ${test.name} fue declarada correctamente.`);
      passed++;
    }
  } else {
    console.log(`❌ ${test.mensaje}`);
  }
}

console.log(`\n${passed} de ${tests.length} tests pasaron.\n`);
