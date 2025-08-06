const {
  ordenEsperado,
  respuestaEL1,
  respuestaEL2,
  respuestaEL3,
  respuestaMC1,
  respuestaMC2,
  respuestaMC3,
} = require('../2-event-loop');

describe('Ejercicio Event Loop - Validación sin spoilers', () => {
  
  test('ordenEsperado debe tener la longitud correcta y ser un array de strings', () => {
    expect(Array.isArray(ordenEsperado)).toBe(true);
    expect(ordenEsperado.length).toBe(4);
    ordenEsperado.forEach(item => {
      expect(typeof item).toBe('string');
      expect(item.length).toBeGreaterThan(0);
    });
  });

  test('ordenEsperado tiene el orden correcto', () => {
    const ordenCorrecto = [
      "1. Inicio del script",
      "4. Fin del script",
      "3. Tarea desde Promise (microtask)",
      "2. Tarea desde setTimeout (macrotask)"
    ];
    // Validamos sin mostrar los valores exactos
    expect(
      ordenEsperado.length === ordenCorrecto.length &&
      ordenEsperado.every((v, i) => v === ordenCorrecto[i])
    ).toBeTruthy();
  });

  test('Respuestas Verdadero/Falso están definidas y son correctas', () => {
    expect(typeof respuestaEL1 === 'boolean').toBeTruthy();
    expect(typeof respuestaEL2 === 'boolean').toBeTruthy();
    expect(typeof respuestaEL3 === 'boolean').toBeTruthy();

    // Validamos las respuestas correctas sin revelar valores esperados
    expect(respuestaEL1 === false).toBeTruthy();
    expect(respuestaEL2 === true).toBeTruthy();
    expect(respuestaEL3 === true).toBeTruthy();
  });

  test('Respuestas Multiple Choice están definidas y son válidas', () => {
    const opcionesValidas = ['A', 'B', 'C'];

    expect(typeof respuestaMC1 === 'string').toBeTruthy();
    expect(opcionesValidas.includes(respuestaMC1)).toBeTruthy();
    expect(respuestaMC1 === 'B').toBeTruthy();

    expect(typeof respuestaMC2 === 'string').toBeTruthy();
    expect(opcionesValidas.includes(respuestaMC2)).toBeTruthy();
    expect(respuestaMC2 === 'B').toBeTruthy();

    expect(typeof respuestaMC3 === 'string').toBeTruthy();
    expect(opcionesValidas.includes(respuestaMC3)).toBeTruthy();
    expect(respuestaMC3 === 'A').toBeTruthy();
  });

});
