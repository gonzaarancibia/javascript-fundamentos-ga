const {
  promesaCumplida,
  usarAsyncAwait,
  promesaFallida,
  usarAsyncAwaitConError,
  respuestaMC1,
  respuestaMC2,
  respuestaP1,
  respuestaP2,
  respuestaP3,
} = require('../4-async-await');

describe('Ejercicios de Async/Await', () => {
  // Test para promesaCumplida
  test('promesaCumplida debe devolver una promesa que se resuelve con el mensaje esperado', async () => {
    const resultado = await promesaCumplida();
    expect(resultado).toBe('✅ Promesa cumplida con Async/Await');
  });

  // Test para usarAsyncAwait
  test('usarAsyncAwait debe ejecutar promesaCumplida e imprimir el resultado', async () => {
    console.log = jest.fn();
    await usarAsyncAwait();
    expect(console.log).toHaveBeenCalledWith('✅ Promesa cumplida con Async/Await');
  });

  // Test para promesaFallida
  test('promesaFallida debe devolver una promesa que se rechaza con el mensaje esperado', async () => {
    await expect(promesaFallida()).rejects.toBe('❌ Error capturado con Async/Await');
  });

  // Test para usarAsyncAwaitConError
  test('usarAsyncAwaitConError debe capturar y mostrar el error correctamente', async () => {
    console.log = jest.fn();
    await usarAsyncAwaitConError();
    expect(console.log).toHaveBeenCalledWith('❌ Error capturado con Async/Await');
  });

  // Multiple choice
  test('respuestas multiple choice deben ser correctas', () => {
    expect(respuestaMC1).toBe('A'); // async solo se usa en funciones que retornan promesas
    expect(respuestaMC2).toBe('A'); // await solo se puede usar dentro de funciones marcadas con async
  });

  // Verdadero o falso
  test('respuestas verdadero/falso deben ser correctas', () => {
    expect(respuestaP1).toBe(true);
    expect(respuestaP2).toBe(true);
    expect(respuestaP3).toBe(false);
  });
});
