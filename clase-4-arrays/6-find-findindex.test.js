const {
  productos,
  productoEconomico,
  productoBuscado,
  posicionProducto,
  posicionNoEncontrada,
  buscarProducto,
  respuestaFind,
  respuestaFindIndex,
  respuestaUso,
} = require('./6-find-findindex');

describe('Ejercicios de find() y findIndex() 🔎', () => {
  // Tests para find() (Pasos 1-3)
  test('1. find() debe encontrar el primer producto económico', () => {
    expect(productoEconomico).toEqual({ nombre: "Tablet", precio: 300 });
  });

  test('2. find() debe encontrar el producto buscado por nombre', () => {
    expect(productoBuscado).toEqual({ nombre: "Telefono", precio: 500 });
  });

  // Tests para findIndex() (Pasos 4-5)
  test('3. findIndex() debe encontrar la posición correcta del producto', () => {
    expect(posicionProducto).toBe(1);
  });

  test('4. findIndex() debe retornar -1 para producto no encontrado', () => {
    expect(posicionNoEncontrada).toBe(-1);
  });

  // Test para la función combinada (Paso 6)
  test('5. buscarProducto debe encontrar producto y posición correctamente', () => {
    const resultado = buscarProducto(productos, 400);
    expect(resultado).toEqual({
      producto: { nombre: "Tablet", precio: 300 },
      posicion: 2
    });
  });

  // Tests para las respuestas de opción múltiple
  test('6. La respuesta sobre find() debe ser correcto', () => {
    expect(respuestaFind === 'B').toBeTruthy();
  });

  test('7. La respuesta sobre findIndex() debe ser correcto', () => {
    expect(respuestaFindIndex === 'B').toBeTruthy();
  });

  test('8. La respuesta sobre cuándo usar cada método debe ser correcto', () => {
    expect(respuestaUso === 'A').toBeTruthy();
  });
});