let {
    respuestaTeoria1,
    sumar,
    incrementarContador,
    estado,
    respuestaTeoria2
} = require('./3-funciones-puras-impuras');

describe('Ejercicios de Funciones Puras e Impuras 🌱🧪', () => {
  // Test para la teoría
  test('1. Teoría: La respuesta correcta', () => {
    expect(respuestaTeoria1 === 'A').toBeTruthy();
  });

  // Test para la función pura
  test('2. La función "sumar" debe ser pura y retornar la suma de dos números', () => {
    expect(sumar(5, 3)).toBe(8);
    expect(sumar(10, 20)).toBe(30);
    expect(sumar(0, 0)).toBe(0);
  });

  // Test para la función impura
  test('3. La función "incrementarContador" debe modificar la propiedad "contador" del objeto "estado"', () => {
    // Reiniciar el contador a 0 para pruebas
    estado.contador = 0;
    

    incrementarContador();
    expect(estado.contador).toBe(1);

    incrementarContador();
    expect(estado.contador).toBe(2);
  });

    // Test para la diferencia práctica entre funciones puras e impuras (Paso 7)
  test('4. Teoría: La respuesta correcta', () => {
    expect(respuestaTeoria2 === 'A').toBeTruthy();
  });
});