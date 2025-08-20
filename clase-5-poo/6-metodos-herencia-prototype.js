// 🧠 Tema: Métodos y Herencia Prototípica 🔄

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 6-metodos-herencia-prototype.js

//--------------------------------------------------
// 1. Herencia con clases (extends) y métodos avanzados
//--------------------------------------------------

// 👉 Paso 1: Creá una clase Vehiculo con:
// - Un constructor que reciba marca, año y kilometros, y los asigne como propiedades.
// - Un método info() que retorne "Vehículo [marca] del año [año] con [kilometros] km".
// - Un método agregarKilometros(cant) que sume cant a los kilometros del vehículo.
class Vehiculo {
  constructor(marca, año, kilometros) {
    this.marca = marca;
    this.año = año;
    this.kilometros = kilometros;
  }
    info() {
    return `Vehículo ${this.marca} del año ${this.año} con ${this.kilometros} km`;
  }
    agregarKilometros(cant) {
    this.kilometros += cant;
  }
}

// 👉 Paso 2: Creá una clase Moto que herede de Vehiculo (usando extends).
// - El constructor debe recibir marca, año, kilometros y cilindrada, y llamar al constructor de Vehiculo.
// - Agregá una propiedad cilindrada y un método detalle() que retorne "Moto [marca] [cilindrada]cc del año [año]".
class Moto extends Vehiculo {
  constructor(marca, año, kilometros, cilindrada) {
    super(marca, año, kilometros); 
    this.cilindrada = cilindrada;
  }
  detalle() {
    return `Moto ${this.marca} ${this.cilindrada}cc del año ${this.año}`;
  }
}


// 👉 Paso 3: Creá una instancia moto1 (marca: "Yamaha", año: 2021, kilometros: 5000, cilindrada: 250).
// Mostrá en consola el resultado de llamar a info(), detalle() y luego sumá 1000 km usando agregarKilometros() y mostrá el nuevo estado.
const moto1 = new Moto("Yamaha", 2021, 5000, 250);

console.log(moto1.info());     
console.log(moto1.detalle());

moto1.agregarKilometros(1000);

console.log(moto1.info());

//--------------------------------------------------
// 2. Métodos en el prototype y práctica avanzada
//--------------------------------------------------

// 👉 Paso 4: Agregá un método al prototype de Vehiculo llamado necesitaService() que retorne true si los kilometros superan 10000.
Vehiculo.prototype.necesitaService = function () {
  return this.kilometros > 10000;
};

// 👉 Paso 5: Mostrá en consola si moto1 necesita service antes y después de sumar 10000 km.
console.log("¿moto1 necesita service?", moto1.necesitaService());
moto1.agregarKilometros(10000);
console.log("¿moto1 necesita service después de sumar 10000 km?", moto1.necesitaService());

// 👉 Paso 6: Creá una clase Camion que herede de Vehiculo.
// - El constructor debe recibir marca, año, kilometros y capacidadCarga (en toneladas).
// - Agregá una propiedad capacidadCarga y un método cargar(toneladas) que retorne un string:
//   - Si toneladas <= capacidadCarga: "Cargando [toneladas] toneladas en el camión [marca]".
//   - Si toneladas > capacidadCarga: "No se puede cargar tanto peso en el camión [marca]".
class Camion extends Vehiculo {
  constructor(marca, año, kilometros, capacidadCarga) {
    super(marca, año, kilometros);
    this.capacidadCarga = capacidadCarga;
  }
    cargar(toneladas) {
    if (toneladas <= this.capacidadCarga) {
      return `Cargando ${toneladas} toneladas en el camión ${this.marca}`;
    } else {
      return `No se puede cargar tanto peso en el camión ${this.marca}`;
    }
  }
}

// 👉 Paso 7: Creá una instancia camion1 (marca: "Volvo", año: 2018, kilometros: 80000, capacidadCarga: 20).
// Mostrá en consola el resultado de llamar a cargar(15) y cargar(25).
const camion1 = new Camion("Volvo", 2018, 80000, 20);
console.log(camion1.cargar(15)); 
console.log(camion1.cargar(25));

//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 8: Seleccioná la opción correcta sobre métodos en el prototype:
// Guardá la letra de la opción correcta en la variable 'respuestaHerencia1'.
// Opción A: Los métodos en el prototype se comparten entre todas las instancias.
// Opción B: Cada instancia tiene su propia copia del método.
// Opción C: Solo funcionan con arrays.
let respuestaHerencia1 = 'A';

// 👉 Paso 9: Seleccioná la opción correcta sobre extends:
// Guardá la letra de la opción correcta en la variable 'respuestaHerencia2'.
// Opción A: Permite heredar propiedades y métodos de otra clase.
// Opción B: Solo sirve para heredar arrays.
// Opción C: No existe en JavaScript.
let respuestaHerencia2 = 'A';

//--------------------------------------------------
// 4. Práctica combinada
//--------------------------------------------------

// 👉 Paso 10: Creá una función llamada crearMotosDesdeArray que reciba un array de objetos con marca, año, kilometros y cilindrada,
// y retorne un array de instancias de Moto.
const crearMotosDesdeArray = array => array.map(({ marca, año, kilometros, cilindrada }) =>
  new Moto(marca, año, kilometros, cilindrada)
);

// 👉 Paso 11: Usá la función anterior con el array:
// [{marca: "Honda", año: 2020, kilometros: 3000, cilindrada: 150}, {marca: "Suzuki", año: 2019, kilometros: 12000, cilindrada: 200}]
// Mostrá en consola el resultado de info(), detalle() y necesitaService() de cada moto creada.
const motosArray = [
  { marca: "Honda", año: 2020, kilometros: 3000, cilindrada: 150 },
  { marca: "Suzuki", año: 2019, kilometros: 12000, cilindrada: 200 }
];

crearMotosDesdeArray(motosArray).forEach(moto => {
  console.log(moto.info());
  console.log(moto.detalle());
  console.log(moto.necesitaService());
  console.log("------------");
});


// No modifiques el código debajo de este comentario
module.exports = {
  Vehiculo,
  Moto,
  moto1,
  Camion,
  camion1,
  respuestaHerencia1,
  respuestaHerencia2,
  crearMotosDesdeArray,
};