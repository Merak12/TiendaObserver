import { Observador } from './Observador.js';

export class Cliente extends Observador {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    actualizar(producto) {
        console.log(`¡Hola ${this.nombre}! La prenda '${producto}' ya está disponible.`);
    }
}
