import { Cliente } from './Cliente.js';
import { Producto } from './Producto.js';
import { Tienda } from './Tienda.js';


const cliente1 = new Cliente("Sofía");
const cliente2 = new Cliente("Luis");
const cliente3 = new Cliente("Mariana");


const producto = new Producto("Chaqueta de cuero");


const tienda = new Tienda();
tienda.agregarCliente(cliente1);
tienda.agregarCliente(cliente2);
tienda.agregarCliente(cliente3);
tienda.agregarProducto(producto);


tienda.suscribirClienteAProducto(cliente1, producto);
tienda.suscribirClienteAProducto(cliente2, producto);


tienda.agregarProductoAlStock("Chaqueta de cuero");


tienda.desuscribirClienteDeProducto(cliente2, producto);


producto.quitarDelStock();
