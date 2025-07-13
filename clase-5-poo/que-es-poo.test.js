const {
  respuestaPOO1,
  persona,
  respuestaPOO2,
  ejemploObjeto,
} = require('./que-es-poo');

describe('Ejercicios de Introducción a POO 🧱', () => {
  // Test para la selección de opción correcta sobre conceptos básicos
  test('1. La respuesta correcta sobre los conceptos básicos de POO debe ser "B"', () => {
    expect(respuestaPOO1).toBe('B');
  });

  // Test para el objeto persona
  test('2. El objeto "persona" debe tener las propiedades correctas y el método saludar()', () => {
    expect(persona).toBeDefined();
    expect(persona.nombre).toBe('Ana');
    expect(persona.edad).toBe(28);
    expect(typeof persona.saludar).toBe('function');
    expect(persona.saludar()).toBe('Hola, soy Ana');
  });

  // Test para la selección de opción correcta sobre utilidad de objetos
  test('3. La respuesta correcta sobre por qué es útil representar cosas del mundo real como objetos debe ser "A"', () => {
    expect(respuestaPOO2).toBe('A');
  });

  // Test para el ejemplo de objeto del mundo real
  test('4. El ejemplo de objeto debe tener al menos 3 propiedades', () => {
    expect(ejemploObjeto).toBeDefined();
    expect(typeof ejemploObjeto).toBe('object');
    expect(Object.keys(ejemploObjeto).length).toBeGreaterThanOrEqual(3);
  });
});