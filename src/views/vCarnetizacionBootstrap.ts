import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";

export default class vCarnetizacionBootstrap implements iCarnetizacion {
    private btNuevaSolicitud: HTMLButtonElement;
    private lblDetalleSolicitud: HTMLElement;
    private lblTotalRecaudado: HTMLElement;
    private lblCantidadReposiciones: HTMLElement;

    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud") as HTMLButtonElement;
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud") as HTMLElement;
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones") as HTMLElement;
    }

    onNuevaSolicitud(callback: () => void): void {
        this.btNuevaSolicitud.onclick = callback;
    }

    reportar({
        detalleSolicitud,
        totalRecaudado,
        cantidadReposiciones,
    }: {
        detalleSolicitud: string;
        totalRecaudado: number;
        cantidadReposiciones: number;
    }): void {
        const linea = document.createElement("div");
        linea.className = "py-1 border-bottom";
        linea.textContent = detalleSolicitud;
        this.lblDetalleSolicitud.appendChild(linea);

        this.lblTotalRecaudado.textContent = `${totalRecaudado}`;
        this.lblCantidadReposiciones.textContent = `${cantidadReposiciones}`;
    }
}