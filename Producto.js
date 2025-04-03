export class Producto {
    constructor(nombre) {
        this.nombre = nombre;
        this.enStock = false;
        this.observadores = [];
    }

    agregarObservador(observador) {
        this.observadores.push(observador);
    }

    eliminarObservador(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    notificarObservadores() {
        this.observadores.forEach(obs => obs.actualizar(this.nombre));
    }

    agregarAlStock() {
        this.enStock = true;
        console.log(` a prenda '${this.nombre}' está ahora disponible en la tienda.`);
        this.notificarObservadores();
    }

    quitarDelStock() {
        this.enStock = false;
        console.log(`La prenda '${this.nombre}' está agotada.`);
    }

    estaEnStock() {
        return this.enStock;
    }
}
