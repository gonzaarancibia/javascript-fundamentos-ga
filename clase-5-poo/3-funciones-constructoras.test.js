const {
  Mascota,
  mascota1,
  mascota2,
  Libro,
  biblioteca,
  respuestaConstructor1,
  respuestaConstructor2,
  crearMascotasDesdeArray,
  resumenesLibros
} = require('./3-funciones-constructoras');

describe('Funciones Constructoras 🚧', () => {
  // Test para Mascota y sus instancias
  test('1. Mascota debe ser una función constructora y crear instancias correctamente', () => {
    expect(typeof Mascota).toBe('function');
    expect(mascota1).toBeInstanceOf(Mascota);
    expect(mascota2).toBeInstanceOf(Mascota);
    expect(mascota1.nombre).toBe('Luna');
    expect(mascota1.especie).toBe('perro');
    expect(mascota2.nombre).toBe('Milo');
    expect(mascota2.especie).toBe('gato');
  });

  // Test para el método presentarse
  test('2. El método presentarse debe funcionar correctamente en Mascota', () => {
    expect(typeof mascota1.presentarse).toBe('function');
    expect(mascota1.presentarse()).toBe('Hola, soy Luna y soy un perro');
    expect(mascota2.presentarse()).toBe('Hola, soy Milo y soy un gato');
  });

  // Test para Libro y su método resumen
  test('3. Libro debe ser una función constructora y su método resumen debe funcionar', () => {
    expect(typeof Libro).toBe('function');
    const libro = new Libro('1984', 'George Orwell', 1949);
    expect(libro.titulo).toBe('1984');
    expect(libro.autor).toBe('George Orwell');
    expect(libro.año).toBe(1949);
    expect(typeof libro.resumen).toBe('function');
    expect(libro.resumen()).toBe('El libro 1984 de George Orwell fue publicado en 1949');
  });

  // Test para biblioteca y resumenesLibros
  test('4. La biblioteca debe contener al menos 3 libros y resumenesLibros debe tener los resúmenes correctos', () => {
    expect(Array.isArray(biblioteca)).toBe(true);
    expect(biblioteca.length).toBeGreaterThanOrEqual(3);
    biblioteca.forEach(libro => {
      expect(libro).toBeInstanceOf(Libro);
      expect(typeof libro.resumen()).toBe('string');
    });
    expect(Array.isArray(resumenesLibros)).toBe(true);
    expect(resumenesLibros.length).toBe(biblioteca.length);
    resumenesLibros.forEach((res, i) => {
      expect(res).toBe(biblioteca[i].resumen());
    });
  });

  // Test para selección de opción correcta
  test('5. La respuesta sobre funciones constructoras debe ser "A"', () => {
    expect(respuestaConstructor1).toBe('A');
  });

  test('6. La respuesta sobre this en funciones constructoras debe ser "B"', () => {
    expect(respuestaConstructor2).toBe('B');
  });

  // Test para crearMascotasDesdeArray
  test('7. crearMascotasDesdeArray debe retornar instancias de Mascota correctamente', () => {
    const arr = [
      { nombre: 'Rocky', especie: 'perro' },
      { nombre: 'Pelusa', especie: 'gato' }
    ];
    const mascotas = crearMascotasDesdeArray(arr);
    expect(Array.isArray(mascotas)).toBe(true);
    expect(mascotas.length).toBe(2);
    expect(mascotas[0]).toBeInstanceOf(Mascota);
    expect(mascotas[0].nombre).toBe('Rocky');
    expect(mascotas[0].especie).toBe('perro');
    expect(mascotas[1].nombre).toBe('Pelusa');
    expect(mascotas[1].especie).toBe('gato');
  });
});