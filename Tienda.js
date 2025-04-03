export class Tienda {
    constructor() {
        this.productos = [];
        this.clientes = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    suscribirClienteAProducto(cliente, producto) {
        producto.agregarObservador(cliente);
    }

    desuscribirClienteDeProducto(cliente, producto) {
        producto.eliminarObservador(cliente);
    }

    agregarProductoAlStock(nombreProducto) {
        for (const producto of this.productos) {
            if (producto.nombre === nombreProducto && !producto.estaEnStock()) {
                producto.agregarAlStock();
            }
        }
    }
}
