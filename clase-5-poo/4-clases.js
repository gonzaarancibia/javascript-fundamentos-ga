// 🧠 Tema: Clases (Sintaxis Moderna) 🎓

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 4-clases.js

//--------------------------------------------------
// 1. Sintaxis y métodos de instancia y de clase
//--------------------------------------------------

// 👉 Paso 1: Creá una clase llamada Mascota con:
// - Un constructor que reciba nombre, especie y edad, y los asigne como propiedades.
// - Un método de instancia llamado presentarse que retorne "Hola, soy [nombre], soy un [especie] y tengo [edad] años".
// - Un método de clase (static) llamado esMascota(obj) que retorne true si el objeto es instancia de Mascota.
class Mascota {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }


  presentarse() {
    return `Hola, soy ${this.nombre}, soy un ${this.especie} y tengo ${this.edad} años`;
  }

  
  static esMascota(obj) {
    return obj instanceof Mascota;
  }
}

// 👉 Paso 2: Creá dos instancias de Mascota: mascota1 (nombre: "Luna", especie: "perro", edad: 4) y mascota2 (nombre: "Milo", especie: "gato", edad: 2).
const mascota1 = new Mascota("Luna", "perro", 4);
const mascota2 = new Mascota("Milo", "gato", 2);


// 👉 Paso 3: Mostrá en consola el resultado de llamar a presentarse en ambas mascotas y usá el método de clase para verificar si mascota1 es una Mascota.
console.log(mascota1.presentarse()); 
console.log(mascota2.presentarse()); 
console.log(Mascota.esMascota(mascota1)); 

//--------------------------------------------------
// 2. Práctica con clases, métodos y propiedades computadas
//--------------------------------------------------

// 👉 Paso 4: Creá una clase llamada Libro con:
// - Un constructor que reciba título, autor, año y género, y los asigne como propiedades.
// - Un método resumen que retorne "El libro [título] de [autor] fue publicado en [año] y es del género [género]".
// - Una propiedad computada (getter) llamada descripcionCorta que retorne "[título] - [autor]".
class Libro {
  constructor(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }
  resumen() {
    return `El libro ${this.titulo} de ${this.autor} fue publicado en ${this.año} y es del género ${this.genero}`;
  }
  get descripcionCorta() {
    return `${this.titulo} - ${this.autor}`;
  }
}

// 👉 Paso 5: Creá un array llamado biblioteca con al menos 3 instancias de Libro, de distintos géneros.
const biblioteca = [
  new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico"),
  new Libro("1984", "George Orwell", 1949, "Distopía"),
  new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954, "Fantasía épica")
];

// 👉 Paso 6: Usá map() para crear un array con los resúmenes de todos los libros de la biblioteca y guardalo en una variable llamada resumenesLibros.
const resumenesLibros = biblioteca.map(libro => libro.resumen());

// 👉 Paso 7: Usá filter() para crear un array llamado librosDeFiccion con solo los libros cuyo género sea "ficción".
const librosDeFiccion = biblioteca.filter(libro => libro.genero === "ficción");


// 👉 Paso 8: Usá map() para crear un array con las descripciones cortas de los libros de la biblioteca y guardalo en una variable llamada descripcionesCortas.
const descripcionesCortas = biblioteca.map(libro => libro.descripcionCorta);

//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 9: Seleccioná la opción correcta sobre métodos estáticos en clases:
// Guardá la letra de la opción correcta en la variable 'respuestaClase1'.
// Opción A: Solo pueden usarse desde instancias.
// Opción B: Se llaman desde la clase, no desde la instancia.
// Opción C: No existen en JavaScript.
let respuestaClase1 = 'B';

// 👉 Paso 10: Seleccioná la opción correcta sobre getters en clases:
// Guardá la letra de la opción correcta en la variable 'respuestaClase2'.
// Opción A: Permiten definir propiedades computadas que se acceden como atributos.
// Opción B: Solo funcionan en funciones constructoras.
// Opción C: No pueden retornar strings.
let respuestaClase2 = 'A';

//--------------------------------------------------
// 4. Práctica combinada
//--------------------------------------------------

// 👉 Paso 11: Creá una función llamada crearMascotasDesdeArray que reciba un array de objetos con nombre, especie y edad,
// y retorne un array de instancias de Mascota.
function crearMascotasDesdeArray(arr) {
  return arr.map(item => new Mascota(item.nombre, item.especie, item.edad));
}

// 👉 Paso 12: Usá la función anterior con el array:
const arrayMascotas = [{nombre: "Rocky", especie: "perro", edad: 6}, {nombre: "Pelusa", especie: "gato", edad: 3}]
const mascotas = crearMascotasDesdeArray(arrayMascotas);
// Mostrá en consola el resultado de presentarse de cada mascota creada y verificá con el método de clase si son instancias de Mascota.
mascotas.forEach(m => {
  console.log(m.presentarse()); // método de instancia
  console.log("¿Es Mascota?", Mascota.esMascota(m)); // método de clase
});
// No modifiques el código debajo de este comentario
module.exports = {
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
};