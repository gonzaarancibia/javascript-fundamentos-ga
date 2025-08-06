const {
  respuesta1,
  respuesta2,
  respuesta3,
} = require('../1-introduccion-asincronismo');

describe('Paso 5: Evaluación de afirmaciones', () => {
  test('respuesta1 (es incorrecto que JS ejecute todo al mismo tiempo)', () => {
    expect(respuesta1 === false).toBeTruthy();
  });

  test('respuesta2 (setTimeout permite simular tareas asincrónicas)', () => {
    expect(respuesta2 === true).toBeTruthy();
  });

  test('respuesta3 (el código que sigue a setTimeout no se bloquea)', () => {
    expect(respuesta3 === false ).toBeTruthy();
  });
});
