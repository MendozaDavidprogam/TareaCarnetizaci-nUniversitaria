export default class mSolicitud {
    protected _cedula: string = "";
    protected _nombre: string = "";
    protected _costoBase: number = 5;

    constructor(cedula: string, nombre: string) {
        this.cedula = cedula;
        this.nombre = nombre;
    }

    set cedula(cedula: string) {
        this._cedula = cedula.trim();
    }

    get cedula(): string {
        return this._cedula;
    }

    set nombre(nombre: string) {
        this._nombre = nombre.trim();
    }

    get nombre(): string {
        return this._nombre;
    }

    calcularMonto(): number {
        return this._costoBase;
    }

    esReposicion(): boolean {
        return false;
    }

    obtenerTipo(): string {
        return "Solicitud";
    }
}