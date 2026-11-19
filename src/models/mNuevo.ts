import mSolicitud from "./mSolicitud.js";

export default class mNuevo extends mSolicitud {
    constructor(cedula: string, nombre: string) {
        super(cedula, nombre);
    }

    override calcularMonto(): number {
        return super.calcularMonto();
    }

    override obtenerTipo(): string {
        return "Nuevo";
    }
}