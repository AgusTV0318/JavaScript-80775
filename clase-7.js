// accediendo al DOM

// para traer nodos del HTML al js
// getElementById
// querySelector
// querySelectorAll

let tituloHtml = document.getElementById("title");
console.log(tituloHtml);

let contendordeCatergorias = document.querySelector(".container-categorias");
console.log(contendordeCatergorias);

let categoria = document.querySelectorAll(".categorias");
console.log(categoria);

// tituloHtml.style = "color:red";

// tituloHtml.classList.revome("dark");
tituloHtml.textContent = "este es el nuevo titulo";
tituloHtml.innerHTML = "<h2> este es un h2</h2>";

let contendorProductos = document.getElementById("producto");
console.log(contendorProductos);

let producto = [{ title: "un producto", price: 200 }];
contendorProductos.innerHTML = `
<div class="product">
<h2>${producto[0].title}</h2>
<h2>${producto[0].price}</h2>
</div>
`;

let botonModo = document.getElementById("btn-Modo");
botonModo.addEventListener("click", () => {
  tituloHtml.classList.add("dark");
});
