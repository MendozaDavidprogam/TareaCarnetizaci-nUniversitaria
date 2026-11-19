import mSolicitud from "./mSolicitud.js";
export default class mNuevo extends mSolicitud {
    constructor(cedula, nombre) {
        super(cedula, nombre);
    }
    calcularMonto() {
        return super.calcularMonto();
    }
    obtenerTipo() {
        return "Nuevo";
    }
}
//# sourceMappingURL=mNuevo.js.map