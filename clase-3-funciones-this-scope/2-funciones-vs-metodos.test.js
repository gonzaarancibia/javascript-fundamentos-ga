const { respuestaTeoria1, saludar, persona } = require('./2-funciones-vs-metodos');

describe('Ejercicios de Funciones vs Métodos', () => {
  test('Paso 1: respuestaTeoria1 debe ser la opción correcta', () => {
    expect(respuestaTeoria1 === 'B').toBeTruthy(); // Verifica que la respuesta sea la opción correcta
  });

  test('Paso 2 y 3: saludar debe retornar un saludo con el nombre proporcionado', () => {
    expect(typeof saludar).toBe('function'); // Verifica que saludar sea una función

    const resultado = saludar('Juan');
    expect(resultado).toBe('Hola, Juan!'); // Verifica el saludo correcto

    // Verifica que la función use el parámetro proporcionado
    const resultadoOtroNombre = saludar('María');
    expect(resultadoOtroNombre).toBe('Hola, María!');
  });

  test('Paso 4 y 5: persona debe tener un método saludar que use la propiedad nombre', () => {
    expect(persona).toHaveProperty('nombre', 'Ana'); // Verifica que el objeto tenga la propiedad nombre
    expect(typeof persona.saludar).toBe('function'); // Verifica que saludar sea un método

    // Verifica que el método use la propiedad nombre del objeto
    const resultado = persona.saludar();
    expect(resultado).toBe('Hola, soy Ana!');

    // Cambia la propiedad nombre y verifica que el método refleje el cambio
    persona.nombre = 'Carlos';
    const resultadoNuevo = persona.saludar();
    expect(resultadoNuevo).toBe('Hola, soy Carlos!');
  });
});
