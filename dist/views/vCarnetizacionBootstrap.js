export default class vCarnetizacionBootstrap {
    btNuevaSolicitud;
    lblDetalleSolicitud;
    lblTotalRecaudado;
    lblCantidadReposiciones;
    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud");
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones");
    }
    onNuevaSolicitud(callback) {
        this.btNuevaSolicitud.onclick = callback;
    }
    reportar({ detalleSolicitud, totalRecaudado, cantidadReposiciones, }) {
        const linea = document.createElement("div");
        linea.className = "py-1 border-bottom";
        linea.textContent = detalleSolicitud;
        this.lblDetalleSolicitud.appendChild(linea);
        this.lblTotalRecaudado.textContent = `${totalRecaudado}`;
        this.lblCantidadReposiciones.textContent = `${cantidadReposiciones}`;
    }
}
//# sourceMappingURL=vCarnetizacionBootstrap.js.map