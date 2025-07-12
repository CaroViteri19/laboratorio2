/*Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe,
 o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
 { nombre: "Camisa", precio: 20 },
 { nombre: "Zapatos", precio: 50 }
];
'*/
const inventario = [
 { nombre: "mandarinas"},
 { nombre: "zapote"},
 { nombre: "banano"}, 
 { nombre: "manzana"}
]
function buscarProducto(nombre, inventario) {
  let encontrado = false;

  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      console.log("Producto encontrado:", inventario[i].nombre);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log("Producto no disponible en el inventario.");
  }
}

buscarProducto("zapote", inventario);

