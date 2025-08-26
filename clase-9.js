// document.addEventListener("DOMContentLoaded", function () {});

const x = async () => {
  try {
    const getUsers = await fetch("https://fakestoreapi.com/products");
    const Response = await getUsers.json();
    console.log(Response);
  } catch (error) {
    console.log(error);
  }
};

// const getUsersFetch = () => {
const getUsers = fetch("https://fakestoreapi.com/products");
//   getUsers
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((x) => console.error(x));
// };
// getUsersFetch();

let miAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
  //   Headers: { tokenAcceso },
});

document.addEventListener("DOMContentLoaded", () => {
  const getProducts = axios.get("https://fakestoreapi.com/products");
  getProducts.then((res) => console.log(res.data));
});

let boton = document.getElementById("btn-crear");
boton.addEventListener("click", () => {
  let producto = {
    title: "producto nuevo",
    price: 200,
  };

  const createProduct = miAxios.post("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(producto),
  });
  createProduct
    .then((res) => console.log(res.data))
    .catch((error) => console.error(error));
});

const botonUno = document.getElementById("btn-alerta-uno");
botonUno.addEventListener("click", () => {
  Swal.fire({
    title: "Quiere borrar el carrito?",
    // text: "queres confirmar",
    icon: "warning",
    confirmButtonText: "Sí",
    showConfirmButton: true,
    showCancelButton: false,
    showDenyButton: true,
    timer: 1500,
  }).then((res) => {
    if (res.isConfirmed) {
      Swal.fire({ title: "se ha limpiado el carrito." });
    } else if (res.isDenied) {
      Swal.fire({ title: "se denego la limpieza." });
    }
  });
});
