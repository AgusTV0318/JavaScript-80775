// Variables
//caja que guarda algo

//palabras reservadas

//let o cosnt

let nombre = "Carl";
let password = "12334";
let segundoNombre = "jhonson";
//camelCase
let segundo_nombre = "jhonson";

console.log(nombre);
prompt("ingresa tu password");
/* alert("hola"); */

console.log(password);
password = "1122334";
console.log(password);

const apellido = "jorge";

console.log(apellido);

// tipos de datos

//string --> cadena de texto

let palabra = "casa";
let frase = "esta es la frase";
let fraseDos = "El perro se 'durmio'";
console.log(fraseDos);

// number --> numero
//enteros, o decimales
let edad = 32;
let precios = 12.5;

let telefono = "42440979";
let celular = "1589045021";

//booleanos --> los que responden preguntas de si o no
// true o false

let Estaautenticado = false;
let esMayor = true;

if (Estaautenticado) {
  console.log("El usuario esta autenticado");
}

// operadores

//operadores matematicos
let a = 12;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % 5); //operdaor de modulo o resto
//console.log(12 / 5);
//console.log(12 % 5);

//12 % 5 --> devuleve el resto de la division

// CONCATENACION
let nombreUsuario = "Tomas";
let saludo = "hola " + nombreUsuario + " como estas?";
console.log(saludo);

// template literals
//backticks
let saludoMejorado = `hola ${nombreUsuario} como estas? tu edad es ${edad} y tu telefono es ${telefono}`;
console.log(saludoMejorado);

// operadores de comparacion

let n1 = 5;
let n2 = 7;

//comparación simple --> solo evalua el DATO no el TIPO DE DATO
console.log(n1 == n2);
console.log(n1 != n2);

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);

//comparación estricta --> compara el DATO y TAMBIÉN el tipo de dato
console.log(n1 === n2);
console.log(n1 !== n2);
