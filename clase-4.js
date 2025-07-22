// tipos de datos: primitivos
// strings - numbers - bootleanos - undefined- null - NaN

// estructuras de datos
let nombredeUsuario = "jorge";
let edadUsuario = "32";
let password = "1234abcde#";
let numeroFavorito = "12";
let Cumpleaños = "12/05/12";

let nombreProducto = "telefono";
let precioProducto = 200;
let descripcionProducto = "este es un telefono";

// objetos
// propiedades (caracteristicas) y metodos ()
let usuario = {
  // clave : valor
  nombre: "pepe",
  edad: "32",
  password: "1234abcde#",
  numeroFavorito: 12,
  Cumpleaños: "12 / 05 / 12",
  esMayor: true,
  direccion: { calle: "italia", numero: "222" },
};

// console.log(nombredeUsuario);
// console.log(password);
console.log(usuario);
// dot notation

cosnole.log(usuario.Cumpleaños);

usuario.Cumpleaños = "11/11/11";

console.log(usuario.Cumpleaños);
console.log(usuario.direccion.calle);

// bracket notation
console.log(usuario.numeroFavorito);
console.log(usuario["numeroFavorito"]);

let producto = {
  titulo: "telefono",
  precio: 200,
  estaHabilitado: true,
  categoria: "telefono",
  stock: 20,
  descontarStock: function (cantidad = 1) {
    // producto.stock = producto.stock - 1;
    if (cantidad !== undefinded) {
      this.stock -= cantidad;
    } else {
      console.log("debes pasar la cantidad");
    }
  },
};
console.log(producto.stock);
producto.descontarStock(5);
console.log(producto.stock);

let productoDos = {
  titulo: "telefono",
  precio: 200,
  estaHabilitado: true,
  categoria: "telefono",
  stock: 20,
  descontarStock: function (cantidad = 2) {
    // producto.stock = producto.stock - 1;
    if (cantidad !== undefinded) {
      this.stock -= cantidad;
    } else {
      console.log("debes pasar la cantidad");
    }
  },
};

producto.descontarStock(2);
productoDos.descontarStock(3);

console.log(producto.stock);
console.log(productoDos.stock);

//ARRAY --> colecciones
//agrupar elementos de un mismo tipo

let numeroSuerteUno = 12;
let numeroSuerteDos = 33;
let numeroSuerteTres = 21;
let numeroDeLaSuerte = [12, 33, 21];
