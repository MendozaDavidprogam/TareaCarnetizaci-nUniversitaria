export default class mSolicitud {
    _cedula = "";
    _nombre = "";
    _costoBase = 5;
    constructor(cedula, nombre) {
        this.cedula = cedula;
        this.nombre = nombre;
    }
    set cedula(cedula) {
        this._cedula = cedula.trim();
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    calcularMonto() {
        return this._costoBase;
    }
    esReposicion() {
        return false;
    }
    obtenerTipo() {
        return "Solicitud";
    }
}
//# sourceMappingURL=mSolicitud.js.map