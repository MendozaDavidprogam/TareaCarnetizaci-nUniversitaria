import mCarnetizacion from "../models/mCarnetizacion.js";
export default class cCarnetizacion {
    mCarnetizacion = new mCarnetizacion();
    vCarnetizacion;
    cSolicitud;
    constructor(vistaMayor, controladorMenor) {
        this.vCarnetizacion = vistaMayor;
        this.cSolicitud = controladorMenor;
        this.vCarnetizacion.onNuevaSolicitud(() => this.procesar1Solicitud());
    }
    procesar1Solicitud() {
        this.cSolicitud.solicitarSolicitud((solicitud) => {
            if (solicitud !== null) {
                const detalleSolicitud = `${solicitud.nombre} (${solicitud.cedula}) debe pagar: $${solicitud.calcularMonto()}`;
                this.mCarnetizacion.procesarSolicitud(solicitud);
                this.vCarnetizacion.reportar({
                    detalleSolicitud,
                    totalRecaudado: this.mCarnetizacion.totalRecaudado(),
                    cantidadReposiciones: this.mCarnetizacion.cantidadReposiciones(),
                });
            }
        });
    }
}
//# sourceMappingURL=cCarnetizacion.js.map