export default class mCarnetizacion {
    _acumMontoTotal = 0;
    _contReposiciones = 0;
    constructor() {
        this._acumMontoTotal = 0;
        this._contReposiciones = 0;
    }
    procesarSolicitud(sol) {
        this._acumMontoTotal += sol.calcularMonto();
        if (sol.esReposicion()) {
            this._contReposiciones++;
        }
    }
    totalRecaudado() {
        return this._acumMontoTotal;
    }
    cantidadReposiciones() {
        return this._contReposiciones;
    }
}
//# sourceMappingURL=mCarnetizacion.js.map