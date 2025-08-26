const mod = require('../04-complejidad-espacial');

describe('04-complejidad-espacial', () => {
  test('respuestaAlgoritmo1', () => {
    expect(mod.respuestaAlgoritmo1).toBe('B');
  });
  test('respuestaAlgoritmo2', () => {
    expect(mod.respuestaAlgoritmo2).toBe('A');
  });
  test('respuestaAlgoritmo3', () => {
    expect(mod.respuestaAlgoritmo3).toBe('B');
  });
  test('respuestaAlgoritmo4', () => {
    expect(mod.respuestaAlgoritmo4).toBe('A');
  });
  test('respuestaTeoria1', () => {
    expect(mod.respuestaTeoria1).toBe('A');
  });
  test('respuestaTeoria2', () => {
    expect(mod.respuestaTeoria2).toBe('A');
  });
});
