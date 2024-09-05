import { TelefonoDTO } from "./telefonoDTO";

export class ContactoDTO {
    constructor(idContacto, nombre, apellido, email, direccion) {
        this.idContacto = idContacto;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.telefonos = [];  // Inicializamos la lista de teléfonos
    }

    // Métodos Get y Set
    getIdContacto() {
        return this.idContacto;
    }

    setIdContacto(idContacto) {
        this.idContacto = idContacto;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getTelefonos() {
        return this.telefonos;
    }

    // Método para agregar un teléfono
    agregarTelefono(telefono) {
        this.telefonos.push(telefono);
    }

    // Método para eliminar un teléfono
    eliminarTelefono(telefono) {
        this.telefonos = this.telefonos.filter(t => t !== telefono);
    }

    // Representar contacto como cadena
    toString() {
        return `Contacto [idContacto=${this.idContacto}, nombre=${this.nombre}, apellido=${this.apellido}, email=${this.email}, direccion=${this.direccion}, telefonos=${this.telefonos.map(t => t.toString()).join(", ")}]`;
    }
}

