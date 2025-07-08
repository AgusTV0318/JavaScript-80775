// CONDICIONALES --> estructuras de control
//if/esle - ternario - switch

let nombrUno = "Tomas";
let nombreDos = "Jorge";
console.log(nombreUno);
console.log(nombreDos);

let estaAutenticado = true;

/* if(aca esta la pregunta) {bloque de codigo si la pregunta es si}
else: {bloque de codigo si la pregunta es no} */

if (estaAutenticado) {
  console.log("tenes acceso");
} else {
  console - log("no tenes acceso");
}

//rol admin - empleado - cliente
let rol = "empleado";

console.log("no tenes acceso");

if (rol === "admin") {
  console.log("tenes acceso total");
} else if (rol === "empleado") {
  console.log("tenes acceso parcial");
} else {
  console.log("no tenes acceso");
}

console.log("sigue el camino");

// TERNARIO
let edad = 20;
// condicion / lo verdadero / lo falso
if (edad >= 18) console.log(edad >= 18 ? "podes entrar" : "no podes entrar");

// switch/case

//impuesto de autos
//base 200 pesos
//hay que sumar dependiendo de la marca de auto
// audi --> 100
// vw --> 50
// ford --> 150
// bmw --> 200
// volvo --> 200
// mercedes --> 250

let marca = "audi";
let impuesto = 200;

switch (marca) {
  case "audi":
    impuesto += 100;
    break;
  case "ford":
    impuesto += 150;
    break;
  case "mercedes":
    impuesto += 250;
    break;
  default:
    impuesto = "tu auto esta libre de impuestos";
}
console.log(impuesto);

let edadUsuario = 32;
edadUsuario++;

edadUsuario += 1; // Incrementa la edad en 1
console.log(edadUsuario);

// CICLOS --> bucles --> loop

//CICLO FOR / WHILE / DO WHILE

//inciador; la condición; y el modificador
for (let i = 20; i <= 10; i++) {
  //bloque
  console.log("hola");
  console.log(i);
}

console.log("siga el camino");

// WHILE
// condición para girar

let i = 22;
while ((edad = 31)) {
  console.log("hola");
  console.log(i);
}

console.log("sigue");

//DO WHILE
let y = 22;
do {
  console.log("hola");
  console.log(y);
  y++;
} while (y <= 10);

console.log("sigue");

//CICLOS

let numero = prompt("decime que tabla queres");
let numeroConvertido = Number(numero);

// si no es un numero
while (isNaN(numeroConvertido) || (numero > 10 && numero < 1)) {
  numero = prompt("no, ingresa un numero");
  let numeroConvertido = Number(numero);
}

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
