const {
  saludar,
  saludarArrow,
  alCuadrado,
  persona,
  respuestaArrow1,
  respuestaArrow2,
  respuestaArrow3,
} = require('./4-arrow-functions-this');

describe('Ejercicios de Arrow Functions & Enlace Léxico de this 🎯', () => {
  // Test para la función tradicional y Arrow Function (Paso 1 y 2)
  test('1. La función "saludarArrow" debe retornar el saludo correctamente', () => {
    expect(saludar('Mundo')).toBe('Hola, Mundo!');
    expect(saludarArrow('Mundo')).toBe('Hola, Mundo!');
  });

  // Test para la Arrow Function con un solo parámetro (Paso 3 y 4)
  test('2. La función "alCuadrado" debe retornar el cuadrado del número', () => {
    expect(alCuadrado(4)).toBe(16);
    expect(alCuadrado(5)).toBe(25);
    expect(alCuadrado(0)).toBe(0);
  });

  // Test para el enlace léxico de this (Paso 5, 6 y 7)
  test('3. Las funciones "saludar" y "saludarArrow" en el objeto "persona" deben comportarse correctamente', () => {
    expect(persona.saludar()).toBe('Hola, soy Juan y tengo 30 años.');
    expect(persona.saludarArrow()).toBe('Hola, soy Juan y tengo 30 años.');
  });

  // Test para la selección de opción correcta sobre Arrow Functions (Paso 8)
  test('4. La respuesta correcta sobre el contexto de this en Arrow Functions', () => {
    expect(respuestaArrow1 === 'B').toBeTruthy();
  });

  // Test para la selección de opción correcta sobre cuándo usar Arrow Functions (Paso 9)
  test('5. La respuesta correcta sobre cuándo usar Arrow Functions', () => {
    expect(respuestaArrow2 === 'B').toBeTruthy();
  });

  // Test para la diferencia práctica entre funciones tradicionales y Arrow Functions (Paso 10)
  test('6. La respuesta correcta sobre la diferencia práctica entre funciones tradicionales y Arrow Functions', () => {
    expect(respuestaArrow3 === 'B').toBeTruthy();
  });
});