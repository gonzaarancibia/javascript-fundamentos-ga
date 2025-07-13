const {
  Animal,
  animal1,
  Perro,
  perro1,
  respuestaProto1,
  crearPerrosDesdeArray,
} = require('./5-prototipos-herencia');

describe('Prototipos y Herencia 🧬', () => {
  // Test para Animal y su método
  test('1. Animal debe ser una función constructora y crear instancias correctamente', () => {
    expect(typeof Animal).toBe('function');
    expect(animal1).toBeInstanceOf(Animal);
    expect(animal1.nombre).toBe('Firulais');
    expect(typeof animal1.hablar).toBe('function');
    expect(animal1.hablar()).toBe('Firulais hace un sonido');
  });

  // Test para Perro y herencia de Animal
  test('2. Perro debe ser una función constructora que hereda de Animal', () => {
    expect(typeof Perro).toBe('function');
    expect(perro1).toBeInstanceOf(Perro);
    expect(perro1).toBeInstanceOf(Animal);
    expect(perro1.nombre).toBe('Rocky');
    expect(perro1.raza).toBe('Labrador');
    expect(typeof perro1.hablar).toBe('function');
    expect(typeof perro1.ladrar).toBe('function');
    expect(perro1.hablar()).toBe('Rocky hace un sonido');
    expect(perro1.ladrar()).toBe('Rocky dice guau!');
  });

  // Test para instanceof
  test('3. perro1 debe ser instancia de Perro y de Animal', () => {
    expect(perro1 instanceof Perro).toBe(true);
    expect(perro1 instanceof Animal).toBe(true);
  });

  // Test para la cadena prototípica
  test('4. La respuesta sobre la cadena prototípica debe ser "A"', () => {
    expect(respuestaProto1).toBe('A');
  });

  // Test para crearPerrosDesdeArray
  test('5. crearPerrosDesdeArray debe retornar instancias de Perro correctamente', () => {
    const arr = [
      { nombre: 'Toby', raza: 'Beagle' },
      { nombre: 'Lola', raza: 'Caniche' }
    ];
    const perros = crearPerrosDesdeArray(arr);
    expect(Array.isArray(perros)).toBe(true);
    expect(perros.length).toBe(2);
    expect(perros[0]).toBeInstanceOf(Perro);
    expect(perros[0].nombre).toBe('Toby');
    expect(perros[0].raza).toBe('Beagle');
    expect(perros[0].hablar()).toBe('Toby hace un sonido');
    expect(perros[0].ladrar()).toBe('Toby dice guau!');
    expect(perros[1].nombre).toBe('Lola');
    expect(perros[1].raza).toBe('Caniche');
    expect(perros[1].hablar()).toBe('Lola hace un sonido');
    expect(perros[1].ladrar()).toBe('Lola dice guau!');
  });
});