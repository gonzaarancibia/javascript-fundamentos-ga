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


// 👉 Paso 2: Creá una clase Moto que herede de Vehiculo (usando extends).
// - El constructor debe recibir marca, año, kilometros y cilindrada, y llamar al constructor de Vehiculo.
// - Agregá una propiedad cilindrada y un método detalle() que retorne "Moto [marca] [cilindrada]cc del año [año]".


// 👉 Paso 3: Creá una instancia moto1 (marca: "Yamaha", año: 2021, kilometros: 5000, cilindrada: 250).
// Mostrá en consola el resultado de llamar a info(), detalle() y luego sumá 1000 km usando agregarKilometros() y mostrá el nuevo estado.


//--------------------------------------------------
// 2. Métodos en el prototype y práctica avanzada
//--------------------------------------------------

// 👉 Paso 4: Agregá un método al prototype de Vehiculo llamado necesitaService() que retorne true si los kilometros superan 10000.


// 👉 Paso 5: Mostrá en consola si moto1 necesita service antes y después de sumar 10000 km.


// 👉 Paso 6: Creá una clase Camion que herede de Vehiculo.
// - El constructor debe recibir marca, año, kilometros y capacidadCarga (en toneladas).
// - Agregá una propiedad capacidadCarga y un método cargar(toneladas) que retorne un string:
//   - Si toneladas <= capacidadCarga: "Cargando [toneladas] toneladas en el camión [marca]".
//   - Si toneladas > capacidadCarga: "No se puede cargar tanto peso en el camión [marca]".


// 👉 Paso 7: Creá una instancia camion1 (marca: "Volvo", año: 2018, kilometros: 80000, capacidadCarga: 20).
// Mostrá en consola el resultado de llamar a cargar(15) y cargar(25).


//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 8: Seleccioná la opción correcta sobre métodos en el prototype:
// Guardá la letra de la opción correcta en la variable 'respuestaHerencia1'.
// Opción A: Los métodos en el prototype se comparten entre todas las instancias.
// Opción B: Cada instancia tiene su propia copia del método.
// Opción C: Solo funcionan con arrays.
let respuestaHerencia1 = '';

// 👉 Paso 9: Seleccioná la opción correcta sobre extends:
// Guardá la letra de la opción correcta en la variable 'respuestaHerencia2'.
// Opción A: Permite heredar propiedades y métodos de otra clase.
// Opción B: Solo sirve para heredar arrays.
// Opción C: No existe en JavaScript.
let respuestaHerencia2 = '';

//--------------------------------------------------
// 4. Práctica combinada
//--------------------------------------------------

// 👉 Paso 10: Creá una función llamada crearMotosDesdeArray que reciba un array de objetos con marca, año, kilometros y cilindrada,
// y retorne un array de instancias de Moto.


// 👉 Paso 11: Usá la función anterior con el array:
// [{marca: "Honda", año: 2020, kilometros: 3000, cilindrada: 150}, {marca: "Suzuki", año: 2019, kilometros: 12000, cilindrada: 200}]
// Mostrá en consola el resultado de info(), detalle() y necesitaService() de cada moto creada.

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