const {
  auto,
  crearLibro,
  actualizarPropiedad,
  eliminarPropiedad,
  contarPropiedades,
  respuestaObj1,
  respuestaObj2,
} = require('./2-manipulacion-objetos');

describe('Creación y Manipulación Básica de Objetos 🛠️', () => {
  // Test para el objeto auto
  test('1. El objeto "auto" debe tener las propiedades correctas y los valores actualizados', () => {
    expect(auto).toBeDefined();
    expect(auto.marca).toBe('Toyota');
    expect(auto.año).toBe(2023);
    expect(auto.color).toBe('rojo');
    expect(auto.modelo).toBeUndefined();
  });

  // Test para crearLibro
  test('2. La función crearLibro debe crear un objeto libro con las propiedades correctas', () => {
    const libro = crearLibro('1984', 'George Orwell', 1949);
    expect(libro).toEqual({
      titulo: '1984',
      autor: 'George Orwell',
      año: 1949,
    });
  });

  // Test para actualizarPropiedad
  test('3. La función actualizarPropiedad debe actualizar la propiedad indicada', () => {
    const libro = { titulo: '1984', año: 1949 };
    actualizarPropiedad(libro, 'año', 1950);
    expect(libro.año).toBe(1950);
  });

  // Test para eliminarPropiedad
  test('4. La función eliminarPropiedad debe eliminar la propiedad indicada', () => {
    const libro = { titulo: '1984', autor: 'George Orwell', año: 1949 };
    eliminarPropiedad(libro, 'autor');
    expect(libro.autor).toBeUndefined();
    expect(Object.keys(libro)).not.toContain('autor');
  });

  // Test para contarPropiedades
  test('5. La función contarPropiedades debe retornar la cantidad de propiedades del objeto', () => {
    const libro = { titulo: '1984', año: 1950 };
    expect(contarPropiedades(libro)).toBe(2);
  });

  // Test para selección de opción correcta sobre acceso a propiedades
  test('6. La respuesta sobre cómo acceder a una propiedad debe ser "C"', () => {
    expect(respuestaObj1).toBe('C');
  });

  // Test para selección de opción correcta sobre eliminar propiedad
  test('7. La respuesta sobre cómo eliminar una propiedad debe ser "A"', () => {
    expect(respuestaObj2).toBe('A');
  });

  // Test para la práctica combinada (Paso 12)
  test('8. Práctica combinada: crear, actualizar, eliminar y contar propiedades', () => {
    const libro = crearLibro("El Principito", "Antoine de Saint-Exupéry", 1943);
    actualizarPropiedad(libro, "año", 1950);
    eliminarPropiedad(libro, "autor");
    expect(libro).toEqual({ titulo: "El Principito", año: 1950 });
    expect(contarPropiedades(libro)).toBe(2);
  });
});