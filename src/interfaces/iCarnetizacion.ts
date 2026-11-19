export interface iCarnetizacion {
    onNuevaSolicitud(callback: () => void): void;

    reportar({
        detalleSolicitud,
        totalRecaudado,
        cantidadReposiciones,
    }: {
        detalleSolicitud: string;
        totalRecaudado: number;
        cantidadReposiciones: number;
    }): void;
}