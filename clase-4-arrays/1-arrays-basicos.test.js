const {
  numeros,
  mixto,
  datos,
  primerNumero,
  ultimoNumero,
  numeroMedio,
  respuestaArray1,
  respuestaArray2,
  respuestaArray3,
} = require('./1-arrays-basicos');

describe('Ejercicios de Arrays Básicos 📦', () => {
  // Test para la creación de arrays (Paso 1)
  test('1. El array "numeros" debe contener los números del 1 al 5', () => {
    expect(numeros).toEqual([1, 2, 3, 4, 5]);
  });

  // Test para array con diferentes tipos de datos (Paso 2)
  test('2. El array "mixto" debe contener diferentes tipos de datos', () => {
    expect(mixto).toHaveLength(5);
    expect(mixto.some(item => typeof item === 'number')).toBeTruthy();
    expect(mixto.some(item => typeof item === 'string')).toBeTruthy();
    expect(mixto.some(item => typeof item === 'boolean')).toBeTruthy();
    expect(mixto.some(item => typeof item === 'object' && !Array.isArray(item))).toBeTruthy();
    expect(mixto.some(item => Array.isArray(item))).toBeTruthy();
  });

  // Test para el array de datos específicos (Paso 7)
  test('3. El array "datos" debe contener los elementos específicos en el orden correcto', () => {
    expect(datos).toEqual(['Hola', 42, true, [1, 2, 3]]);
  });

  // Test para las respuestas de opción múltiple
  test('4. La respuesta sobre qué es un Array debe ser correcta', () => {
    expect(respuestaArray1 === 'A').toBeTruthy();
  });

  test('5. La respuesta sobre los índices en Arrays debe ser correcta', () => {
    expect(respuestaArray2 === 'B').toBeTruthy();
  });

  test('6. La respuesta sobre el acceso a elementos debe ser correcta', () => {
    expect(respuestaArray3 === 'C').toBeTruthy();
  });

  // Test para el acceso a elementos (Paso 3)
  test('3. Las variables deben contener los elementos correctos del array "numeros"', () => {
    expect(primerNumero).toBe(1);
    expect(ultimoNumero).toBe(5);
    expect(numeroMedio).toBe(3);
  });
});