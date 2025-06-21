const {
  numeros,
  sumaTotal,
  numerosJuntos,
  numerosDuplicados,
  numerosComoCadenas,
  procesarArray,
  respuestaForEach,
  respuestaMap,
  respuestaUso,
} = require('./4-foreach-map');

describe('Ejercicios de forEach() vs map() 🔄', () => {
  // Test para forEach() (Pasos 1, 2 y 3)
  test('1. forEach() debe calcular la suma total correctamente', () => {
    expect(sumaTotal).toBe(15);
  });

  test('2. forEach() debe concatenar los números correctamente', () => {
    expect(numerosJuntos).toBe('1-2-3-4-5');
  });

  // Test para map() (Pasos 4 y 5)
  test('3. map() debe duplicar los números correctamente', () => {
    expect(numerosDuplicados).toEqual([2, 4, 6, 8, 10]);
  });

  test('4. map() debe convertir los números a strings', () => {
    expect(numerosComoCadenas).toEqual(['1', '2', '3', '4', '5']);
  });

  // Test para la función procesarArray (Paso 6)
  test('5. procesarArray debe funcionar correctamente con map y forEach', () => {
    const arrayPrueba = [1, 2, 3];
    expect(procesarArray(arrayPrueba, true)).toEqual([3, 6, 9]);
    expect(procesarArray(arrayPrueba, false)).toBe(6);
  });

  // Test para las respuestas de opción múltiple
  test('6. La respuesta sobre forEach() debe ser "B"', () => {
    expect(respuestaForEach).toBe('B');
  });

  test('7. La respuesta sobre map() debe ser "C"', () => {
    expect(respuestaMap).toBe('C');
  });

  test('8. La respuesta sobre cuándo usar cada método debe ser "B"', () => {
    expect(respuestaUso).toBe('B');
  });
});