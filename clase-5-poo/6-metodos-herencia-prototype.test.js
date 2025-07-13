const {
  Vehiculo,
  Moto,
  moto1,
  Camion,
  camion1,
  respuestaHerencia1,
  respuestaHerencia2,
  crearMotosDesdeArray,
} = require('./6-metodos-herencia-prototype');

describe('Métodos y Herencia Prototípica 🔄', () => {
  // Test para Vehiculo y Moto
  test('1. Vehiculo y Moto deben ser clases y crear instancias correctamente', () => {
    expect(typeof Vehiculo).toBe('function');
    expect(typeof Moto).toBe('function');
    expect(moto1).toBeInstanceOf(Moto);
    expect(moto1).toBeInstanceOf(Vehiculo);
    expect(moto1.marca).toBe('Yamaha');
    expect(moto1.año).toBe(2021);
    expect(moto1.kilometros).toBeGreaterThanOrEqual(5000);
    expect(moto1.cilindrada).toBe(250);
    expect(typeof moto1.info).toBe('function');
    expect(typeof moto1.detalle).toBe('function');
    expect(moto1.info()).toMatch(/Vehículo Yamaha del año 2021 con \d+ km/);
    expect(moto1.detalle()).toBe('Moto Yamaha 250cc del año 2021');
    expect(typeof moto1.agregarKilometros).toBe('function');
    // Suma de kilómetros
    const kmAntes = moto1.kilometros;
    moto1.agregarKilometros(1000);
    expect(moto1.kilometros).toBe(kmAntes + 1000);
  });

  // Test para necesitaService
  test('2. El método necesitaService debe funcionar correctamente', () => {
    const motoTest = new Moto('Test', 2020, 9000, 125);
    expect(typeof motoTest.necesitaService).toBe('function');
    expect(motoTest.necesitaService()).toBe(false);
    motoTest.agregarKilometros(2000);
    expect(motoTest.necesitaService()).toBe(true);
  });

  // Test para Camion y su método cargar
  test('3. Camion debe ser una clase que hereda de Vehiculo y su método cargar debe funcionar', () => {
    expect(typeof Camion).toBe('function');
    expect(camion1).toBeInstanceOf(Camion);
    expect(camion1).toBeInstanceOf(Vehiculo);
    expect(camion1.marca).toBe('Volvo');
    expect(camion1.año).toBe(2018);
    expect(camion1.kilometros).toBe(80000);
    expect(camion1.capacidadCarga).toBe(20);
    expect(typeof camion1.cargar).toBe('function');
    expect(camion1.cargar(15)).toBe('Cargando 15 toneladas en el camión Volvo');
    expect(camion1.cargar(25)).toBe('No se puede cargar tanto peso en el camión Volvo');
  });

  // Test para selección de opción correcta
  test('4. La respuesta sobre métodos en el prototype debe ser "A"', () => {
    expect(respuestaHerencia1).toBe('A');
  });

  test('5. La respuesta sobre extends debe ser "A"', () => {
    expect(respuestaHerencia2).toBe('A');
  });

  // Test para crearMotosDesdeArray
  test('6. crearMotosDesdeArray debe retornar instancias de Moto correctamente', () => {
    const arr = [
      { marca: 'Honda', año: 2020, kilometros: 3000, cilindrada: 150 },
      { marca: 'Suzuki', año: 2019, kilometros: 12000, cilindrada: 200 }
    ];
    const motos = crearMotosDesdeArray(arr);
    expect(Array.isArray(motos)).toBe(true);
    expect(motos.length).toBe(2);
    expect(motos[0]).toBeInstanceOf(Moto);
    expect(motos[0].marca).toBe('Honda');
    expect(motos[0].año).toBe(2020);
    expect(motos[0].kilometros).toBe(3000);
    expect(motos[0].cilindrada).toBe(150);
    expect(motos[0].info()).toBe('Vehículo Honda del año 2020 con 3000 km');
    expect(motos[0].detalle()).toBe('Moto Honda 150cc del año 2020');
    expect(motos[0].necesitaService()).toBe(false);
    expect(motos[1].necesitaService()).toBe(true);
  });
});