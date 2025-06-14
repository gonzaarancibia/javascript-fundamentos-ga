const {
  mensajeGlobal,
  mostrarMensajeGlobal,
  mostrarMensajeLocal,
  mostrarMensajeBloque,
  respuestaScope1,
  respuestaScope2,
  respuestaScope3,
  respuestaScope4,
  respuestaScope5,
} = require('./5-scope');

describe('Ejercicios de Scope (Ámbito) en JavaScript 🔒', () => {
  // Test para el Global Scope (Paso 1, 2 y 3)
  test('1. La variable "mensajeGlobal" debe estar definida y accesible globalmente', () => {
    expect(mensajeGlobal).toBe('Hola desde el ámbito global');
  });

  test('2. La función "mostrarMensajeGlobal" debe mostrar el valor de "mensajeGlobal"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mostrarMensajeGlobal();
    expect(consoleSpy).toHaveBeenCalledWith('Hola desde el ámbito global');
    consoleSpy.mockRestore();
  });

  // Test para el Function Scope (Paso 4 y 5)
  test('3. La función "mostrarMensajeLocal" debe mostrar el valor de "mensajeLocal" dentro de la función', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mostrarMensajeLocal();
    expect(consoleSpy).toHaveBeenCalledWith('Hola desde el ámbito de función');
    consoleSpy.mockRestore();
  });

  test('4. La variable "mensajeLocal" no debe estar accesible fuera de la función', () => {
    expect(() => mensajeLocal).toThrow(ReferenceError);
  });

  // Test para el Block Scope (Paso 6 y 7)
  test('5. La función "mostrarMensajeBloque" debe mostrar el valor de "mensajeBloque" dentro del bloque', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mostrarMensajeBloque();
    expect(consoleSpy).toHaveBeenCalledWith('Hola desde el ámbito de bloque');
    consoleSpy.mockRestore();
  });

  test('6. La variable "mensajeBloque" no debe estar accesible fuera del bloque', () => {
    expect(() => mensajeBloque).toThrow(ReferenceError);
  });

  // Test para la selección de opción correcta (Paso 8, 9 y 10)
  test('7. La respuesta correcta sobre el Global Scope', () => {
    expect(respuestaScope1 === 'A').toBeTruthy();
  });

  test('8. La respuesta correcta sobre el Function Scope', () => {
    expect(respuestaScope2 === 'B').toBeTruthy();
  });

  test('9. La respuesta correcta sobre el Block Scope"', () => {
    expect(respuestaScope3 === 'B').toBeTruthy();
  });

  // Test para la pregunta "¿Qué es el Scope?" (Paso 11)
  test('10. La respuesta correcta sobre qué es el Scope', () => {
    expect(respuestaScope4 === 'A').toBeTruthy();
  });

  // Test para la diferencia práctica entre los tipos de Scope (Paso 12)
  test('11. La respuesta correcta sobre la diferencia práctica entre los tipos de Scope', () => {
    expect(respuestaScope5 === 'B').toBeTruthy();
  });
});