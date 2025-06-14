const {
  crearContador,
  crearSaludo,
  crearListaDeTareas,
  respuestaClosure1,
  respuestaClosure2,
  respuestaClosure3,
} = require('./6-clousure');

describe('Ejercicios de Closures y su Ámbito Léxico 🧠🔐', () => {
  // Test para el Closure del contador (Paso 1, 2 y 3)
  test('1. La función "crearContador" debe crear contadores independientes que mantengan su propio estado', () => {
    const contador1 = crearContador();
    const contador2 = crearContador();

    expect(contador1()).toBe(1);
    expect(contador1()).toBe(2);
    expect(contador1()).toBe(3);

    expect(contador2()).toBe(1);
    expect(contador2()).toBe(2);
  });

  // Test para el Closure con parámetros (Paso 4, 5 y 6)
  test('2. La función "crearSaludo" debe crear saludos personalizados, concatenando el saludo con el nombre, por ej: `${saludo}${nombre}', () => {
    const saludoEnEspañol = 'Hola, ';
    const saludoEnIngles = 'Hello, ';
    const saludarEnEspañol = crearSaludo(saludoEnEspañol);
    const saludarEnIngles = crearSaludo(saludoEnIngles);

    expect(saludarEnEspañol('Juan')).toBe(saludoEnEspañol + 'Juan');
    expect(saludarEnIngles('John')).toBe(saludoEnIngles + 'John');
  });

  // Test para el Closure avanzado: lista de tareas (Paso 11, 12, 13 y 14)
  test('3. La función "crearListaDeTareas" debe manejar una lista de tareas correctamente', () => {
    const miLista = crearListaDeTareas();

    // Agregar tareas
    miLista.agregarTarea('Estudiar JavaScript');
    miLista.agregarTarea('Hacer ejercicio');
    expect(miLista.listarTareas()).toEqual(['Estudiar JavaScript', 'Hacer ejercicio']);

    // Eliminar una tarea
    miLista.eliminarTarea('Hacer ejercicio');
    expect(miLista.listarTareas()).toEqual(['Estudiar JavaScript']);
  });

  // Test para la selección de opción correcta sobre qué es un Closure (Paso 7)
  test('4. La respuesta correcta sobre qué es un Closure debe ser "A"', () => {
    expect(respuestaClosure1).toBe('A');
  });

  // Test para la selección de opción correcta sobre el uso de Closures (Paso 8)
  test('5. La respuesta correcta sobre el uso de Closures debe ser "C"', () => {
    expect(respuestaClosure2).toBe('C');
  });

  // Test para la diferencia práctica entre Closures y funciones normales (Paso 9)
  test('6. La respuesta correcta sobre la diferencia práctica entre Closures y funciones normales debe ser "B"', () => {
    expect(respuestaClosure3).toBe('B');
  });
});