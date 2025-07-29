// FUNCIONES COSNTRUCTORAS O CLASS

class Producto {
  cosntructor(titulo, precio, imagen, despcrition, stock) {
    this.apellido = "pepe";
    this.titulo = titulo;
    this.imagen = imagen;
    this.precio = precio;
    this.despcrition = despcrition;
    this.stock = stock;
  }
  descontarStock(cantidad) {
    this.stock = this.stock - cantidad;
  }
}

let productoUno = new producto("televisor", 200, "https", "hola");
let productoDos = new producto(
  "notebook",
  200,
  "https://",
  "una buena notebook"
);

let productos = [productoUno, productoDos];

console.log(productos);

productos[0].descontarStock(6);

console.log(productos);

// JSON

let objeto = { edad: 22, esMayor: true, nombre: "pepe" };
console.log(objeto);

//Enviar al backend
let objetoJSON = JSON.stringify(objeto);
console.log(objetoJSON);

// quiero obtener info del backend
let peticionAlBackend = objetoJSON;
console.log(peticionAlBackend);

let ObjetoPedido = objetoJSON;
let ObjetoConvertido = JSON.parse(ObjetoPedido);

console.log(ObjetoConvertido);

let x = true;
let xNueva = JSON.stringify(xNueva);
console.log(xNueva);

// let xConvertida = JSON.parse("22");
// console.log(xConvertida);

// OBTENER - GUARDAR - ELIMINAR
// localstorage

// GUARDAR
let preferenciasUsuario = { modoOscuro: true, letra: "pequeña" };

localStorage.setItem("preferencias", JSON.stringify(preferenciasUsuario));

// let preferencias = localStorage.getItem("preferencias"); // convertir con JSON.parse
let preferencias = JSON.parse(localStorage.getItem("preferencias")); //
console.log(preferencias);
