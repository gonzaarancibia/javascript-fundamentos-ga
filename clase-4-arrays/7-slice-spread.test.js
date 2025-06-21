const {
  frutas,
  tresPrimerasFrutas,
  dosUltimasFrutas,
  frutasDelMedio,
  copiaFrutas,
  masFrutas,
  todasLasFrutas,
  frutasConNueva,
  respuestaSlice,
  respuestaSpread,
  respuestaDiferencia,
} = require('./7-slice-spread');

describe('Ejercicios de slice() y Spread Operator ✂️🚀', () => {
  // Tests para slice() (Pasos 1-4)
  test('1. slice() debe extraer las tres primeras frutas correctamente', () => {
    expect(tresPrimerasFrutas).toEqual(['manzana', 'banana', 'naranja']);
  });

  test('2. slice() debe extraer las dos últimas frutas correctamente', () => {
    expect(dosUltimasFrutas).toEqual(['pera', 'mango']);
  });

  test('3. slice() debe extraer las frutas del medio correctamente', () => {
    expect(frutasDelMedio).toEqual(['banana', 'naranja', 'pera']);
  });

  // Tests para spread operator (Pasos 5-8)
  test('4. spread debe crear una copia correcta del array', () => {
    expect(copiaFrutas).toEqual(frutas);
    expect(copiaFrutas).not.toBe(frutas); // Verifica que sea una copia nueva
  });

  test('5. spread debe combinar arrays correctamente', () => {
    expect(todasLasFrutas).toEqual([...frutas, ...masFrutas]);
  });

  test('6. spread debe agregar un elemento al final correctamente', () => {
    expect(frutasConNueva).toEqual([...frutas, 'sandía']);
  });

  // Tests para las respuestas de opción múltiple
  test('7. La respuesta sobre slice() debe ser correcto', () => {
    expect(respuestaSlice === 'B').toBeTruthy();
  });

  test('8. La respuesta sobre spread debe ser correcto', () => {
    expect(respuestaSpread === 'C').toBeTruthy();
  });

  test('9. La respuesta sobre la diferencia debe ser correcto', () => {
    expect(respuestaDiferencia === 'A').toBeTruthy();
  });
});