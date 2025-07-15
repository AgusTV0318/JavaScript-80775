l; /* et islogged = false;
let rol = "admin";
let permisos = true;

if (islogged || rol === " admin" || permisos) {
  console.log("entra en el if");
}
if (islogged && rol === "admin" && permisos) {
  console.log("entra en el IF");
}
 */

// FUNCIONES
// declarada

function sumar() {
  // bloque de codigo
  console.log("esto esta dentro de la función");
  if (true) {
    console.log("estoy dentro");
  }
}

sumar();

// let userName = prompt("Ingresa tu nombre");
// {
//   alert("bienvenido ${userName} ");
// }

// saludar();

// PARÁMETROS

function sumar(numeroUno, numeroDos, nombre) {
  console.log(numeroUno + numeroDos);
  console.log("hola " + nombre);
}

// ARGUMENTOS
sumar(5, 7, "pepe");
sumar(1, 3, "juan");
sumar(2, 4, "marta");

//input - proceso - output

function restar(a, b) {
  //salida explicita
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "uno de los parametros no es un numero";
  }

  //salida implicita
}

let resultado = restar(10, "pepe");
// SIEMPRE en la ejecución de una función, se transforma
// en lo que la función retorna, si yo no retorno nada, js retorna undefined

console.log(resultado);

//scope ---> alcance de una variable

//locales

console.log(user);

let user = "juan";
if (true) {
  let user = "juan";
  console.log(user);
}

// FUNCIONES EXPRESADAS TIPO FLECHAS (arrow)
let functionNumero = function (numero) {
  return 10 * numero;
};
let resultadoFunction = functionNumero(5);

console.log(resultadoFunction);

let functionFlecha = (unNumero) => {
  return unNumero * 3;
};

let resultadoFlecha = functionFlecha(10);
console.log(resultadoFlecha);

//  Quiero una funcion que recibe 2 numeros por parametros y una opcion para saber
// si quiero sumarlos o restarlos
//funcion (2, 5, "sumar")
// funcion( 2, 5, "restar")

// retornar el resultado
// los numeros deben ser pedidos por PROMPT

const operacion = (n1, n2, tipo) => {
  //flag (bandera)

  if (n1 === undefined || n2 === undefined) {
    return "uno de los numeros no esta correcto";
  }

  if (typeof n1 !== "number" || typeof n2 !== "number")
    if (tipo === "suma") {
      return n1 + n2;
    } else {
      return n1 - n2;
    }
};

let primerNumero = Number(prompt("ingresa el primer numero"));
let segundoNumero = Number(prompt("ingresa el segundo numero"));
let tipoOperacion = Number(prompt("tipo de opreacion"));

let a = operacion(15, 3, "suma"); //---> 18
let b = operacion(15, 3, "resta"); //---> 12
let c = operacion(15, 3, "pepe"); //---> undefined

console.log(a);
console.log(b);
console.log(c);
