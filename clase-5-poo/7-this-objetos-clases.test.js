const {
  persona,
  Animal,
  animal1,
  Auto,
  auto1,
  calculadora,
  respuestaThis1,
  respuestaThis2,
} = require('./7-this-objetos-clases');

describe('Uso de this en Objetos y Clases 🔍', () => {
  // Test para this en objeto literal
  test('1. El método saludar de persona debe usar this y retornar el nombre correcto', () => {
    expect(persona).toBeDefined();
    expect(typeof persona.saludar).toBe('function');
    expect(persona.saludar()).toBe(`Hola, soy ${persona.nombre}`);
  });

  // Test para this en función constructora
  test('2. Animal debe ser una función constructora y animal1 debe funcionar', () => {
    expect(typeof Animal).toBe('function');
    expect(animal1).toBeInstanceOf(Animal);
    expect(typeof animal1.hablar).toBe('function');
    expect(animal1.hablar()).toBe(`${animal1.nombre} hace un sonido`);
  });

  // Test para this en clase
  test('3. Auto debe ser una clase y auto1 debe funcionar', () => {
    expect(typeof Auto).toBe('function');
    expect(auto1).toBeInstanceOf(Auto);
    expect(typeof auto1.mostrarMarca).toBe('function');
    expect(auto1.mostrarMarca()).toBe(`Marca: ${auto1.marca}`);
  });

  // Test para this en función normal y arrow function
  test('4. calculadora debe mostrar la diferencia entre this en función normal y arrow', () => {
    expect(calculadora).toBeDefined();
    expect(typeof calculadora.sumar).toBe('function');
    expect(typeof calculadora.sumarArrow).toBe('function');
    expect(calculadora.sumar()).toBe(15);
    // El resultado de sumarArrow depende del contexto global, normalmente NaN
    expect(Number.isNaN(calculadora.sumarArrow())).toBe(true);
  });

  // Test para selección de opción correcta
  test('5. La respuesta sobre this en arrow functions debe ser "B"', () => {
    expect(respuestaThis1).toBe('B');
  });

  test('6. La respuesta sobre this en métodos de clase debe ser "A"', () => {
    expect(respuestaThis2).toBe('A');
  });
});