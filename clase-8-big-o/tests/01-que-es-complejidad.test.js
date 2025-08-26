const mod = require('../01-que-es-complejidad');

describe('01-que-es-complejidad', () => {
  test('respuestaMC1', () => {
    expect(mod.respuestaMC1).toBe('A');
  });
  test('respuestaVF1', () => {
    expect([false, 'false', 'Falso', 'falso']).toContain(mod.respuestaVF1);
  });
  test('respuestaVF2', () => {
    expect([true, 'true', 'Verdadero', 'verdadero']).toContain(mod.respuestaVF2);
  });
});
