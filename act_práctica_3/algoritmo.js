function obtenerDatos() {
  const nombre = prompt("Ingrese su Nombre Completo");
  const edad = (prompt("Ingrese su Edad"), 10);
  return { nombre, edad };
}

// function obtenerDatos() {
//   const nombre = prompt("Ingrese su nombre:");
//   const edad = parseInt(prompt("Ingrese su edad:"), 10);
//   return { nombre, edad };
// }

// function procesarDatos(datos) {
//   const nuevaEdad = datos.edad + 5;
//   const mensaje = `Hola ${datos.nombre}, en 5 años tendrás ${nuevaEdad} años.`;
//   return mensaje;
// }

// function mostrarResultados(mensaje) {
//   alert(mensaje);
// }

// (function () {
//   const datosUsuario = obtenerDatos();
//   const resultadoFinal = procesarDatos(datosUsuario);
//   mostrarResultados(resultadoFinal);
// })();

// function ejecutarAlgoritmo() {
//   let continuar = true;

//   while (continuar) {
//     const datos = obtenerDatos();
//     const resultado = procesarDatos(datos);
//     mostrarResultados(resultado);
//     continuar = confirm("¿Deseás repetir el formulario?");
//   }
// }

// ejecutarAlgoritmo();
