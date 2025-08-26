const mod = require('../03-complejidad-temporal');

describe('03-complejidad-temporal', () => {
  test('respuestaAlgoritmo1', () => {
    expect(mod.respuestaAlgoritmo1).toBe('B');
  });
  test('respuestaAlgoritmo2', () => {
    expect(mod.respuestaAlgoritmo2).toBe('B');
  });
  test('respuestaAlgoritmo3', () => {
    expect(mod.respuestaAlgoritmo3).toBe('A');
  });
  test('respuestaAlgoritmo4', () => {
    expect(mod.respuestaAlgoritmo4).toBe('B');
  });
  test('respuestaVF1', () => {
    expect([true, 'true', 'Verdadero', 'verdadero']).toContain(mod.respuestaVF1);
  });
  test('respuestaVF2', () => {
    expect([false, 'false', 'Falso', 'falso']).toContain(mod.respuestaVF2);
  });
  test('respuestaVF3', () => {
    expect([false, 'false', 'Falso', 'falso']).toContain(mod.respuestaVF3);
  });
});
