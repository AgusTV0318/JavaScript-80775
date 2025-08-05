const clientesBanco = [
  ,
  ,
  (cliente1 = {
    id: 101,
    nombre: "Lucía Fernández",
    alias: "lucia.fer.cash",
    cbu: "0001234500000001234567",
    tipoCuenta: "Caja de Ahorro",
    saldo: 152340.75,
  }),
  (cliente2 = {
    id: 102,
    nombre: "Martín Gómez",
    alias: "martin.gomez.bank",
    cbu: "0009876500000007654321",
    tipoCuenta: "Cuenta Corriente",
    saldo: 84200.0,
  }),
  (cliente3 = {
    id: 103,
    nombre: "Carla Ruiz",
    alias: "carla.ruiz.finanzas",
    cbu: "0004567800000003456789",
    tipoCuenta: "Caja de Ahorro",
    saldo: 23050.25,
  }),
];

const encontrarCliente = (array, cbu) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].cbu === cbu) {
      return array[i];
    }
  }
};

encontrarCliente(clientesBanco, "0001234500000001234567");

let x = encontrarCliente(clientesBanco, "0001234500000001234567");
console.log(x);

const filtrarPorTipodeCuenta = (array, tipoCuenta) => {
  let flitradoportipo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tipoCuenta === tipoCuenta) {
      flitradoportipo.push(array[i]);
    }
  }

  return flitradoportipo;
};
let y = filtrarPorTipodeCuenta(clientesBanco, "Caja de Ahorro");
console.log(y);

// generar un nuevo array con info útil
const devolverInfoMasLimpia = (array) => {};
let z = devolverInfoMasLimpia(clientesBanco);
console.log(z);

// un callback es una función que se pasa como argumento a otra función
let clienteEncontrado = clientesBanco.find((elemento) => {
  return elemento === "0001234500000001234567";
});
console.log(clienteEncontrado);

let arrayCajasdeAhorro = clientesBanco.filter((cliente) => {
  return cliente.tipoCuenta === "Cuenta Corriente";
});

console.log(arrayCajasdeAhorro);

let arraySoloConCbu = clientesBanco.map((cliente) => {
  return { cbu: cliente.cbu };
});

console.log(arraySoloConCbu);

// si algo se encuentra o no en un array --> SOME
let ClienteAlDia = clientesBanco.some((cliente) => {
  return cliente.saldo >= 0;
});

console.log(ClienteAlDia);
