const {
  numeros,
  numerosPares,
  personas,
  mayoresDeEdad,
  sumaTotal,
  maximo,
  resumenEdades,
  respuestaFilter,
  respuestaReduce,
  respuestaCombinada,
} = require('./5-filter-reduce');

describe('Ejercicios de filter() y reduce() 🔍📉', () => {
  // Tests para filter() (Pasos 1-4)
  test('1. filter() debe obtener correctamente los números pares', () => {
    expect(numerosPares).toEqual([2, 4, 6, 8, 10]);
  });

  test('2. filter() debe obtener correctamente las personas mayores de edad', () => {
    expect(mayoresDeEdad).toEqual([
      { nombre: "Ana", edad: 25 },
      { nombre: "Maria", edad: 30 }
    ]);
  });

  // Tests para reduce() (Pasos 5-7)
  test('3. reduce() debe calcular correctamente la suma total', () => {
    expect(sumaTotal).toBe(55);
  });

  test('4. reduce() debe encontrar correctamente el número máximo', () => {
    expect(maximo).toBe(10);
  });

  test('5. reduce() debe crear correctamente el resumen de edades', () => {
    expect(resumenEdades).toEqual({
      menores: 2,
      adultos: 2
    });
  });

  // Tests para las respuestas de opción múltiple
  test('6. La respuesta sobre filter() debe ser correcto', () => {
    expect(respuestaFilter === 'B').toBeTruthy();
  });

  test('7. La respuesta sobre reduce() debe ser correcto', () => {
    expect(respuestaReduce === 'C').toBeTruthy();
  });

  test('8. La respuesta sobre el uso combinado debe ser correcto', () => {
    expect(respuestaCombinada === 'B').toBeTruthy();
  });
});