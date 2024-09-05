export class TelefonoDTO {
    constructor(idTelefono, tipo, numero) {
        this.idTelefono = idTelefono;
        this.tipo = tipo;
        this.numero = numero;
    }

    // Métodos Get y Set
    getIdTelefono() {
        return this.idTelefono;
    }

    setIdTelefono(idTelefono) {
        this.idTelefono = idTelefono;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getNumero() {
        return this.numero;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    // Método para representar el teléfono como cadena
    toString() {
        return `Telefono [idTelefono=${this.idTelefono}, tipo=${this.tipo}, numero=${this.numero}]`;
    }
}


