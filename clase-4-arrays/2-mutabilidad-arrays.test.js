const {
  frutas,
  agregarFrutaInmutable,
  nuevoArrayFrutas,
  esArray,
  respuestaMutabilidad1,
  respuestaMutabilidad2,
  respuestaMutabilidad3,
} = require('./2-mutabilidad-arrays');

describe('Ejercicios de Mutabilidad vs Inmutabilidad en Arrays 🔁🧊', () => {
  // Test para mutación de arrays (Pasos 1, 2 y 3)
  test('1. El array "frutas" debe contener los elementos correctos después de las mutaciones', () => {
    expect(frutas).toEqual(['manzana', 'banana', 'pera']);
  });

  // Test para inmutabilidad (Pasos 4 y 5)
  test('2. La función "agregarFrutaInmutable" debe retornar un nuevo array sin modificar el original', () => {
    const arrayOriginal = ['manzana', 'banana'];
    const resultado = agregarFrutaInmutable(arrayOriginal, 'kiwi');
    
    expect(resultado).toEqual(['manzana', 'banana', 'kiwi']);
    expect(arrayOriginal).toEqual(['manzana', 'banana']);
    expect(nuevoArrayFrutas).toEqual(['manzana', 'banana', 'pera', 'kiwi']);
  });

  // Test para comprobación de arrays (Paso 6)
  test('3. La función "esArray" debe identificar correctamente los arrays', () => {
    expect(esArray([])).toBe(true);
    expect(esArray([1, 2, 3])).toBe(true);
    expect(esArray('no soy un array')).toBe(false);
    expect(esArray({ soy: 'un objeto' })).toBe(false);
  });

  // Test para las respuestas de opción múltiple
  test('4. La respuesta sobre mutabilidad debe ser correcto', () => {
    expect(respuestaMutabilidad1 === 'B').toBeTruthy();
  });

  test('5. La respuesta sobre inmutabilidad debe ser correcto', () => {
    expect(respuestaMutabilidad2 === 'C').toBeTruthy();
  });

  test('6. La respuesta sobre métodos de array debe ser correcto', () => {
    expect(respuestaMutabilidad3 === 'B')
  });
});