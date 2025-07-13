const {
  Mascota,
  mascota1,
  mascota2,
  Libro,
  biblioteca,
  resumenesLibros,
  librosDeFiccion,
  descripcionesCortas,
  respuestaClase1,
  respuestaClase2,
  crearMascotasDesdeArray,
} = require('./4-clases');

describe('Clases (Sintaxis Moderna) 🎓', () => {
  // Test para Mascota y sus métodos
  test('1. Mascota debe ser una clase y crear instancias correctamente', () => {
    expect(typeof Mascota).toBe('function');
    expect(mascota1).toBeInstanceOf(Mascota);
    expect(mascota2).toBeInstanceOf(Mascota);
    expect(mascota1.nombre).toBe('Luna');
    expect(mascota1.especie).toBe('perro');
    expect(mascota1.edad).toBe(4);
    expect(mascota2.nombre).toBe('Milo');
    expect(mascota2.especie).toBe('gato');
    expect(mascota2.edad).toBe(2);
    expect(typeof mascota1.presentarse).toBe('function');
    expect(mascota1.presentarse()).toBe('Hola, soy Luna, soy un perro y tengo 4 años');
    expect(mascota2.presentarse()).toBe('Hola, soy Milo, soy un gato y tengo 2 años');
    expect(typeof Mascota.esMascota).toBe('function');
    expect(Mascota.esMascota(mascota1)).toBe(true);
    expect(Mascota.esMascota({})).toBe(false);
  });

  // Test para Libro y sus métodos/getters
  test('2. Libro debe ser una clase con método resumen y getter descripcionCorta', () => {
    expect(typeof Libro).toBe('function');
    const libro = new Libro('1984', 'George Orwell', 1949, 'ficción');
    expect(libro.titulo).toBe('1984');
    expect(libro.autor).toBe('George Orwell');
    expect(libro.año).toBe(1949);
    expect(libro.genero).toBe('ficción');
    expect(typeof libro.resumen).toBe('function');
    expect(libro.resumen()).toBe('El libro 1984 de George Orwell fue publicado en 1949 y es del género ficción');
    expect(libro.descripcionCorta).toBe('1984 - George Orwell');
  });

  // Test para biblioteca y arrays derivados
  test('3. La biblioteca debe contener al menos 3 libros y los arrays derivados deben ser correctos', () => {
    expect(Array.isArray(biblioteca)).toBe(true);
    expect(biblioteca.length).toBeGreaterThanOrEqual(3);
    biblioteca.forEach(libro => {
      expect(libro).toBeInstanceOf(Libro);
    });
    expect(Array.isArray(resumenesLibros)).toBe(true);
    expect(resumenesLibros.length).toBe(biblioteca.length);
    resumenesLibros.forEach((res, i) => {
      expect(res).toBe(biblioteca[i].resumen());
    });
    expect(Array.isArray(librosDeFiccion)).toBe(true);
    librosDeFiccion.forEach(libro => {
      expect(libro.genero).toBe('ficción');
    });
    expect(Array.isArray(descripcionesCortas)).toBe(true);
    descripcionesCortas.forEach((desc, i) => {
      expect(desc).toBe(biblioteca[i].descripcionCorta);
    });
  });

  // Test para selección de opción correcta
  test('4. La respuesta sobre métodos estáticos debe ser "B"', () => {
    expect(respuestaClase1).toBe('B');
  });

  test('5. La respuesta sobre getters debe ser "A"', () => {
    expect(respuestaClase2).toBe('A');
  });

  // Test para crearMascotasDesdeArray
  test('6. crearMascotasDesdeArray debe retornar instancias de Mascota correctamente', () => {
    const arr = [
      { nombre: 'Rocky', especie: 'perro', edad: 6 },
      { nombre: 'Pelusa', especie: 'gato', edad: 3 }
    ];
    const mascotas = crearMascotasDesdeArray(arr);
    expect(Array.isArray(mascotas)).toBe(true);
    expect(mascotas.length).toBe(2);
    expect(mascotas[0]).toBeInstanceOf(Mascota);
    expect(mascotas[0].nombre).toBe('Rocky');
    expect(mascotas[0].especie).toBe('perro');
    expect(mascotas[0].edad).toBe(6);
    expect(mascotas[1].nombre).toBe('Pelusa');
    expect(mascotas[1].especie).toBe('gato');
    expect(mascotas[1].edad).toBe(3);
    expect(Mascota.esMascota(mascotas[0])).toBe(true);
    expect(Mascota.esMascota(mascotas[1])).toBe(true);
  });
});