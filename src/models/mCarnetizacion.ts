import mSolicitud from "./mSolicitud.js";

export default class mCarnetizacion {
    private _acumMontoTotal: number = 0;
    private _contReposiciones: number = 0;

    constructor() {
        this._acumMontoTotal = 0;
        this._contReposiciones = 0;
    }

    procesarSolicitud(sol: mSolicitud): void {
        this._acumMontoTotal += sol.calcularMonto();
        if (sol.esReposicion()) {
            this._contReposiciones++;
        }
    }

    totalRecaudado(): number {
        return this._acumMontoTotal;
    }

    cantidadReposiciones(): number {
        return this._contReposiciones;
    }
}