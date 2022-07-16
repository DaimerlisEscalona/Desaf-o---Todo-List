const productosIniaciales = [
  {
    id: "9507643862394",
    descripcion: "Mangos",
    prodComprado: false,


  },
  {
    id: "5456438664403",
    descripcion: "Platanos",
    prodComprado: false,
  },
  {
    id: "109055945814132",
    descripcion: "Pollo",
    prodComprado: false,
  },
];


let arregloProductos = document.getElementById("listaProducto");
let btnAgregarP = document.getElementById("buttonAgregarProducto");
let inpTotalProductos = document.getElementById("totalProductos");
let inpProductoComprado = document.getElementById("productoComprado");
let contProductosComprados = 0;


function vistaGeneral(arregloProductos) {

  if (arregloProductos.completada == true) {
    return `
    
        <ul>
            <li class="formato-lista">${arregloProductos.id} </li>
            <li class="formato-lista">${arregloProductos.descripcion}</li>
            <li class="formato-lista"> <input type="checkbox" class = "form-check" id=${arregloProductos.id} onclick="checkMarcarProducto(${arregloProductos.id})" checked="true"</li>
            <li class="formato-lista"> <button class = "form-borrar" id=${arregloProductos.id} onclick="borrarProductos(${arregloProductos.id})">  x </button></li>
        </ul> 
    `}
  else {
    return `
    
        <ul>
            <li class="formato-lista">${arregloProductos.id} </li>
            <li class="formato-lista">${arregloProductos.descripcion}</li>
            <li class="formato-lista"> <input type="checkbox" class = "form-check" id=${arregloProductos.id} onclick="checkMarcarProducto(${arregloProductos.id})"  ></li>
            <li class="formato-lista"> <button class = "form-borrar"  id=${arregloProductos.id} onclick="borrarProductos(${arregloProductos.id})">  x </button></li>
        </ul> 
    `}
}


function cargaVistaGeneral(arregloProductos) {

  let html = "";
  let contadorBusquedaProductos = 0;
  for (const arregloProductos of productosIniaciales) {
    html += vistaGeneral(arregloProductos);
    contadorBusquedaProductos += 1;
  }
  inpTotalProductos.innerHTML = "Total de Productos: " + contadorBusquedaProductos;
  arregloProductos.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', (event) => {

  cargaVistaGeneral(arregloProductos);

});


btnAgregarP.addEventListener("click", function () {

  let descripcion = document.getElementById("nuevoProducto").value;

  if (descripcion == "") {
    alert("Debe Ingresar Un Producto");
  } else if (descripcion <= 0) {
    alert("Debe Ingresar Un Producto");
  } else {
    const productoNuevo = { id: Date.now(), descripcion }
    productosIniaciales.push(productoNuevo);
    nuevoProducto.value = "";
  }
  cargaVistaGeneral(arregloProductos);

})


function checkMarcarProducto(checkProducto, buttonProducto) {

  let checkbox = document.getElementById(checkProducto);
  let index = productosIniaciales.findIndex((ele) => ele.id == checkProducto);
  let checked = checkbox.checked;
  if (checked) {
    productosIniaciales[index].completada = true;
    alert("Producto Comprado")
    contProductosComprados += 1;
  }
  else {
    contProductosComprados--;
    productosIniaciales[index].completada = false;
  }
  inpProductoComprado.innerHTML = "Productos Comprados: " + contProductosComprados;
};


function borrarProductos(id) {

  const index = productosIniaciales.findIndex((indice) => indice.id == id)
  productosIniaciales.splice(index, 1)
  cargaVistaGeneral(arregloProductos);

}
